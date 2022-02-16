// require('dotenv/config');

const environment = 'dev';

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: 
    `${'ebytr-app'}${suffix[environment]}`,
  username: 'Arvo',
  password: 'Naocliquenove@9',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
