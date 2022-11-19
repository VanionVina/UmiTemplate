import { RequestConfig } from "@umijs/max";
import { getProfile } from "./services/UserApi";
import { CurrentUser } from "./utils/typings";

export async function getInitialState(): Promise<CurrentUser> {
  let token = localStorage.getItem('token');
  let userName = null;

  if(token) {
    const result = await getProfile();
    userName = result?.username;
  }

  return { 
    userName,
    token,
  };
};

export const request: RequestConfig = {
  timeout: 5000,
  errorConfig: {
    errorHandler: () => { },
    errorThrower: () => { }
  },
  requestInterceptors: [
    (config: any) => {
      const token = localStorage.getItem('token');
      const authHeaders = token && (config.url.substring(0, 5) == '/api/') ?
        { Authorization: 'Bearer ' + token } :
        {};
      const testHeaders = { 'X-Test': 'yes' };

      config.headers = { ...config.headers, ...authHeaders, ...testHeaders };

      return config;
    }
  ],
  responseInterceptors: []
};