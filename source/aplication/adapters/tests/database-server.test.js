const DatabaseAdapter = require('../database-server');
const configurations = require('../../configurations/configurations.json')

describe('DatabaseAdapter', () => {
  let database;

  beforeEach(() => {
    database = new DatabaseAdapter(configurations.database_connection);
  });

  afterEach(async () => {
    await database.close();
  });

  it('should execute a query and return the results', async () => {
    const results = await database.select('SELECT * FROM users WHERE id = ?',[1]);
    expect(results)
  });

  it('should execute a select query and return the results', async () => {
    const results = await database.select('SELECT * FROM users');
    expect(results)
  });
});