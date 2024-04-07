import { Sequelize, DataTypes } from "sequelize";


const sequelize = new Sequelize(
	"u935819075_felicitipsDB",
	"u935819075_contacto",
	"Felicitips2024",
	{
		host: "193.203.175.33",
		dialect: "mysql",
    logging:false
	},
);


//  ;
const Phrase = sequelize.define("phrase", {
  by: DataTypes.STRING,
  phrase: DataTypes.STRING,
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const Theme = sequelize.define("theme", {
  name: DataTypes.STRING,
  url: DataTypes.STRING,
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export { sequelize, Phrase, Theme };
