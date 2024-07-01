import { AxiosRequestHeaders} from 'axios';
import apiClient from './api-client';
// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'http://192.168.5.73:3000';

const contentTypes: any = {
  json: 'application/json',
  mfd: 'multipart/form-data',
};

// Base function for GET requests
const get = (route: string) => {
  return apiClient(`${BASE_URL}/${route}`);
};

// Base function for POST requests
const post = async (
  route: string,
  {body, type = '', user = {}}: {body: any; type?: string; user?: any},
) => {
  let headers: Pick<AxiosRequestHeaders, any> = {Accept: 'application/json'};
 
  if (user.token) {
    headers.Authorization = `Bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }
  return apiClient({
    method: 'post',
    url: `${BASE_URL}/${route}`,
    headers,
    data: { email: body.username, password: body.password },
  });
};

// Routes
const routes = {
  login: 'login',
  getNews: 'news',
};

export {routes, get, post};

export {login} from './auth';
export {getNews} from './news';
