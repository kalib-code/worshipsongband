const fs = require('fs');
const strapi = require('@strapi/strapi')
const request = require('supertest');

let server 

/** this code is called once before any test */
beforeAll(async () => {
  instance = await strapi().load(); 
  const app = instance.server.app
  app.use(instance.server.router.routes()).use(instance.server.router.allowedMethods())
  server = app.callback()
});

/** this code is called after all the tests are finished */
afterAll(async () => {
  const dbSettings = instance.config.get('database.connections.default.settings');
  
  //close server to release the db-file
  await instance.destroy();
  //delete test database after all tests
  if (dbSettings && dbSettings.filename) {
    const tmpDbFile = `${__dirname}/../${dbSettings.filename}`;
    if (fs.existsSync(tmpDbFile)) {
      fs.unlinkSync(tmpDbFile);
    }
  }
});

//Run test to make sure Strapi is defined.
it('strapi is defined', () => {
  expect(server).toBeDefined();
});

it('returns 204 from /_health', (done) => {
    request(server)
     .get('/_health')
     .expect(204)
     .end(done)
 });


