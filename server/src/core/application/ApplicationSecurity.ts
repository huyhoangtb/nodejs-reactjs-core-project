import {Oauth2Repository} from "../repositories/Oauth2Repository";
import {Action} from "routing-controllers";

const OAuthServer = require('node-oauth2-server');

export default class ApplicationSecurity {

    initOauth2Server(app: any) {
        const options = {
            model: new Oauth2Repository(),
            grants: ['authorization_code', 'password', 'refresh_token'],
            debug: true
        };

        app.oauth = new OAuthServer(options);
        app.all('/oauth/token', app.oauth.grant());

        // app.get('/api/v1/users', app.oauth.authorise(), function (req, res) {
        //     res.send('Secret area');
        // });
        // app.get('/api/v1/platform/init', app.oauth.authorise(), function (req, res) {
        //     res.send('Secret area');
        // });

        // app.post('/api/v1/user/:iid/change-password', app.oauth.authorise(), function (req, res) {
        //     res.send('Secret area');
        // });
        // RouterContext.listener(app);
        app.post('/', app.oauth.authorise(), function (req: Request, res: any) {
            res.send('Secret area');
        });
        app.use(app.oauth.errorHandler());
        return app;
    }

    async authorizationChecker(action: Action, roles: string[]) {
        console.log(roles);
        return false;

    // here you can use request/response objects from action
    // also if decorator defines roles it needs to access the action
    // you can use them to provide granular access check
    // checker must return either boolean (true or false)
    // either promise that resolves a boolean value
    // demo code:
    // const token = action.request.headers["authorization"];
    //
    // const user = await getEntityManager().findOneByToken(User, token);
    // if (user && !roles.length)
    // return true;
    // if (user && roles.find(role => user.roles.indexOf(role) !== -1))
    // return true;
    //
    // return false;
}
}
