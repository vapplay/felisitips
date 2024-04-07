import { sequelize } from "./models/models";

(async () => {
  try {
    await sequelize.authenticate();
    //await sequelize.sync({ force: true })
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
