export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi-server'),
      user: env('DATABASE_USERNAME', 'jamedrano'),
      password: env('DATABASE_PASSWORD', 'strapifist48'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
