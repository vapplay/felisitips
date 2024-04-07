"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = exports.Phrase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("u935819075_felicitipsDB", "u935819075_contacto", "Felicitips2024", {
    host: "193.203.175.33",
    dialect: "mysql",
    logging: false
});
exports.sequelize = sequelize;
//  ;
const Phrase = sequelize.define("phrase", {
    by: sequelize_1.DataTypes.STRING,
    phrase: sequelize_1.DataTypes.STRING,
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});
exports.Phrase = Phrase;
const Theme = sequelize.define("theme", {
    name: sequelize_1.DataTypes.STRING,
    url: sequelize_1.DataTypes.STRING,
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});
exports.Theme = Theme;
