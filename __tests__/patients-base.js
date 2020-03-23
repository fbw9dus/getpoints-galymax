const app = require('../app')
const request = require('supertest')
let server;

describe('Patienats Router', () => {
  test('should export router', async done => {
    const response = await request(app)
    .get('/patients')
    expect(response.body).toEqual([{
          name: "Lorenzo Galbani",
          positive: false
      },{
          name: "Martin Heimbach",
          positive: true
      }])
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