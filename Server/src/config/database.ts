export default {
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'db',
  // entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  logging: false,
  synchronize: true,
  autoLoadEntities: true,
};