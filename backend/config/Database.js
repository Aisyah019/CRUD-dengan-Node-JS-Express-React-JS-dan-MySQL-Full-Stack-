import { Sequelize } from "sequelize";

const db = new Sequelize('cruddb','root','sinta123',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;