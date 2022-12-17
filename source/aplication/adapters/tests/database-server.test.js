const DatabaseAdapter = require('../database-server');

describe('DatabaseAdapter', () => {
  let database;

  beforeEach(() => {
    database = new DatabaseAdapter({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cars-center'
    });
  });

  afterEach(async () => {
    await database.close();
  });

  it('should execute a query and return the results', async () => {
    const results = await database.query('SELECT * FROM users WHERE id = ?', [1]);
    expect(results).toEqual([{ id: 1, email: 'williampscheidt@hotmail.com', isAdmin: 0, password: "teste123456" }]);
  });

  it('should execute a select query and return the results', async () => {
    const results = await database.select('SELECT * FROM users');
    expect(results).toEqual([{ id: 1, email: 'williampscheidt@hotmail.com', isAdmin: 0, password: "teste123456" }, { id: 6, email: 'guilhermepolaski@hotmail.com', isAdmin: 0, password: "85sadg48s4g" }]);
  });
});