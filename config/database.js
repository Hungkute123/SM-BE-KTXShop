module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ktxshop'),
      user: env('DATABASE_USERNAME', 'ktxshop'),
      password: env('DATABASE_PASSWORD', '123456789'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
