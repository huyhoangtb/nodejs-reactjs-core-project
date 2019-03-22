import Client from "../entities/schemas/Client";
import Token from "../entities/schemas/Token";
import Account from "../entities/schemas/Account";
import {isCorrectPassword} from "../utils/password";
import User from "../entities/schemas/User";
import IToken from "../entities/ientities/IToken";
import {Service} from "typedi";
import {Schema, Types} from "mongoose";
let ObjectId = Types.ObjectId;

@Service("oauth2Repository")
export class Oauth2Repository {

    /**
     * init main application
     *
     * @returns {Promise<IClient>}
     */
    async initMainApp() {
        return this.initApp('mainApplication', 'clientSecret');
    };

    /**
     * init application
     *
     * @param clientId
     * @param clientSecret
     * @returns {Promise<void>}
     */
    async initApp(clientId: string, clientSecret: string) {
        const data = {
            clientId: clientId,
            clientSecret: clientSecret
        };

        // return await Client.findOneAndUpdate(data, {$set: data}, {upsert: true, new: true}).lean();
        const client = new Client(data);

        return await client.save();
    };

    /**
     * remove access token.
     *
     * @param {string} bearerToken
     * @returns {Promise<IToken | null>}
     */
    static async removeAccessToken(bearerToken: string) {
        return await Token.findOneAndRemove({accessToken: bearerToken});
    }

    /*
     * Get access token.
     */
    async getAccessToken(bearerToken: string) {
        return await Token.findOne({accessToken: bearerToken}).lean();
    }

    /**
     * Get refresh token
     * @param refreshToken
     * @returns {Promise<"mongoose".Query<object>>}
     */
    async getRefreshToken(refreshToken: string) {
        return Token.findOne({refreshToken: refreshToken}).lean();
    };


    /**
     * Get client
     *
     * @param {string} clientId
     * @param {string} clientSecret
     * @returns {Promise<object>}
     */
    async getClient(clientId: string, clientSecret: string) {
        return await Client.findOne({clientId: clientId, clientSecret: clientSecret}).lean();
    }

    /**
     * Grant type allowed.
     */

    async grantTypeAllowed(clientId: string, grantType: string, callback: Function) {

        callback(false, grantType === "password");
    };

    /**
     * Save token.
     *
     * @param {string} accessToken
     * @param {string} clientId
     * @param {Date} expires
     * @param {Number} userIid
     * @returns {Promise<IToken>}
     */
    async saveToken(accessToken: string, clientId: string, expires: Date, userIid: Number) {

        const token = new Token({
            accessToken: accessToken,
            expires: expires,
            clientId: clientId,
            userIid: userIid
        });

        return await token.save();
    };

    /**
     * Get login account.
     *
     * @param {string} username
     * @param {string} password
     * @returns {Promise<void>}
     */
    async getUser(username: string, password: string) {
        const account = await Account.findOne({logins: username});
        if (!account) {
            return null;
        }
        const correctPassword = await isCorrectPassword(password, account.password);
        if (!correctPassword) {
            return null;
        }
        const user = await User.findOne({iid: account.userIid});
        if (!user) {
            return account;
        }
        user.account = account;
        return user;
    };

    //
    // /**
    //  * save token
    //  *
    //  * @param {IToken} token
    //  * @param {IClient} client
    //  * @param {IUser} user
    //  * @returns {Promise<IToken>}
    //  */
    // async saveToken(token: IToken, client: IClient, user: IUser) {
    //     const accessToken = new Token({
    //         accessToken: token.accessToken,
    //         accessTokenExpiresOn: token.accessTokenExpiresOn,
    //         client : client,
    //         clientId: client.clientId,
    //         refreshToken: token.refreshToken,
    //         refreshTokenExpiresOn: token.refreshTokenExpiresOn,
    //         user : user,
    //         userId: user._id,
    //     });
    //
    //     let saveResult = await accessToken.save() ;
    //     saveResult = saveResult && typeof saveResult == 'object' ? saveResult.toJSON() : saveResult;
    //
    //     const data: IToken = <IToken>saveResult;
    //     data.clientId = data.clientId;
    //     data.userId = data.userId;
    //     data.user = data.user;
    //     return data;
    // };

}
