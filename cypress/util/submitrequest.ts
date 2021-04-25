import { RestRequestValue } from '../interface';
import { urlJoin } from 'url-join-ts';

export const sumbitRestRequest = function (RestRequestValue: RestRequestValue) {
  RestRequestValue.failOnStatusCode =
    RestRequestValue.failOnStatusCode || false;
  RestRequestValue.baseUrl = RestRequestValue.baseUrl || Cypress.env('baseUrl');
  RestRequestValue.url =
    RestRequestValue.url ||
    urlJoin(RestRequestValue.baseUrl, RestRequestValue.endPoint);
  cy.log(RestRequestValue);
  return cy.request(RestRequestValue);
};
