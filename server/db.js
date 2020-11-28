var Sequelize = require('sequelize');
var CONFIG = require('./config');
//实例化数据库对象
var sequelize = new Sequelize(CONFIG.MYSQL.database,CONFIG.MYSQL.username,CONFIG.MYSQL.password, {
	host: CONFIG.MYSQL.host,
	dialect: "mysql",
	logging: CONFIG.DEBUG ? console.log : false,
	//配置数据数据库连接池
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
	timezone:'+8:00'
});
module.exports = sequelize;
