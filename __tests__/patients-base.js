const app = require('../app')
const request = require('supertest')
let server;

describe('Router', () => {
  test('should export router', async done => {
    const router = require('../routes/patients')
    
    expect(router).toEqual([{user: 'fake', password: 'fake'}])
    done();
  })
})

beforeAll(async (done) => {
  server = app.listen(3000, () => {
    global.agent = request.agent(server);
    done();
  });
});

afterAll(async () => {
  await server.close();
});