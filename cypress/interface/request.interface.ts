export enum MethodType {
  POST = 'POST',
  DELETE = 'DELETE',
  GET = 'GET',
  PUT = 'PUT',
}

export interface RestHeader {
  Accept?: string;
  'Content-Type'?: string;
  Authorization?: string;
}

export interface RestRequestValue {
  url?: string;
  endPoint: string;
  baseUrl?: string;
  method: MethodType;
  auth?: string;
  body?: object;
  failOnStatusCode?: boolean;
  followRedirect?: boolean;
  form?: boolean;
  gzip?: boolean;
  headers?: Object;
  qs?: string;
  retryOnStatusCodeFailure?: boolean;
  retryOnNetworkFailure?: boolean;
  timeout?: string;
}
