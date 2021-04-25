import { RestRequestValue, MethodType, RestHeader } from '../interface';
import { sumbitRestRequest, AccessType } from '../util';
import { repoPublic, repoPrivate, repoReadonly } from '../testdata';

describe('Create Git Repository', function () {
  const header = {} as RestHeader;
  const postRequest = {} as RestRequestValue;
  postRequest.method = MethodType.POST;
  postRequest.endPoint = 'user/repos';
  postRequest.headers = header;
  postRequest.failOnStatusCode = false;

  it('Repo with public access created successfully', function () {
    header.Authorization = `Bearer ${AccessType.WRITEACCESS}`;
    postRequest.failOnStatusCode = true;
    postRequest.body = repoPublic;
    sumbitRestRequest(postRequest).then((response) => {
      expect(response.status).to.eq(201);
      const {
        name: repoName,
        private: repoAccess,
        description: repoDescription,
      } = response.body;
      expect(repoName).to.eq(repoPublic.name);
      expect(repoAccess).to.eq(repoPublic.private);
      expect(repoDescription).to.eq(repoPublic.description);
    });
  });

  it('Repo creation fails with read only access', function () {
    header.Authorization = `Bearer ${AccessType.READACCESS}`;
    postRequest.failOnStatusCode = false;
    postRequest.body = repoReadonly;
    sumbitRestRequest(postRequest).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Repo with private access created successfully', function () {
    header.Authorization = `Bearer ${AccessType.WRITEACCESS}`;
    postRequest.failOnStatusCode = true;
    postRequest.body = repoPrivate;
    sumbitRestRequest(postRequest).then((response) => {
      expect(response.status).to.eq(201);
      const {
        name: repoName,
        private: repoAccess,
        description: repoDescription,
      } = response.body;
      expect(repoName).to.eq(repoPrivate.name);
      expect(repoAccess).to.eq(repoPrivate.private);
      expect(repoDescription).to.eq(repoPrivate.description);
    });
  });

  it('Repo already exists', function () {
    header.Authorization = `Bearer ${AccessType.WRITEACCESS}`;
    postRequest.failOnStatusCode = false;
    postRequest.body = repoPublic;
    sumbitRestRequest(postRequest).then((response) => {
      expect(response.status).to.eq(422);
    });
  });
});

describe('Query Created Git Repository', function () {
  const header = {} as RestHeader;
  const getRequest = {} as RestRequestValue;
  getRequest.method = MethodType.GET;
  getRequest.endPoint = 'user/repos';
  getRequest.headers = header;
  it('Successfully query all repository', function () {
    header.Authorization = `Bearer ${AccessType.WRITEACCESS}`;
    getRequest.failOnStatusCode = true;
    sumbitRestRequest(getRequest).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Successfully query all repository with read access', function () {
    header.Authorization = `Bearer ${AccessType.READACCESS}`;
    getRequest.failOnStatusCode = true;
    sumbitRestRequest(getRequest).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

describe('Delete Git Repository', function () {
  const header = {} as RestHeader;
  it('Successfully delete private repository', function () {
    const deleteRequest = {} as RestRequestValue;
    deleteRequest.method = MethodType.DELETE;
    deleteRequest.headers = header;
    deleteRequest.endPoint = `repos/JashAravind/${repoPrivate.name}`;
    header.Authorization = `Bearer ${AccessType.WRITEACCESS}`;
    deleteRequest.failOnStatusCode = true;
    sumbitRestRequest(deleteRequest).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
  it('Successfully delete public repository', function () {
    const deleteRequest = {} as RestRequestValue;
    deleteRequest.method = MethodType.DELETE;
    deleteRequest.headers = header;
    deleteRequest.endPoint = `repos/JashAravind/${repoPublic.name}`;
    header.Authorization = `Bearer ${AccessType.WRITEACCESS}`;
    deleteRequest.failOnStatusCode = true;
    sumbitRestRequest(deleteRequest).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
