module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'databaseGobarber',
  define: {
    timestemps: true,
    underscored: true,
    underscoredAll: true,
  },
};
