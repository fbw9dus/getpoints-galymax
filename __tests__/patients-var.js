const app = require('../app')
const request = require('supertest')
let server;

describe('Patients Router Variable', () => {
  test('should export router', async done => {
    const connection = request(app)
    const response1 = await connection.get('/patients/1')
    expect(response1.body).toEqual({
          name: "Lorenzo Galbani",
          positive: false
      })

    const response2 = await connection.get('/patients/2')
    expect(response2.body).toEqual({
        name: "Martin Heimbach",
        positive: true
      })
    done();

    //test
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