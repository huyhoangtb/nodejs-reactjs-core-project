// cd $server & run "npm run spawn"
import RabbitService from './services/RabbitService';
import jobTypes from './jobs/types';

const res = { id: 'asdf' };
console.log(res);
RabbitService.sendToQueue({
  type: jobTypes.createUserWallets,
  payload: res,
});
console.log('hahaha');


