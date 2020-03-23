const app = require('../app')
const request = require('supertest')
let server;

describe('Patients Router Variable', () => {
  test('should export router', async done => {
    const response = await request(app)
    .get('/patients/1')
    expect(response.body).toEqual({
          name: "Lorenzo Galbani",
          positive: false
      })
      .get('/patients/2')
    expect(response.body).toEqual({
        name: "Martin Heimbach",
        positive: true
      })
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