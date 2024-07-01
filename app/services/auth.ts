import {routes, post} from './index';

export const login = (body: any) => {
  return post(`auth/${routes.login}`, {body});
};
