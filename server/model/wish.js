//数据库映射文件
const Sequelize = require('sequelize');
const db = require('../db');

//定义model
const Wish = db.define('Wish', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	name:{
		type:Sequelize.STRING(20),allowNull:false
	},
	content:{
		type:Sequelize.STRING,allowNull:false
	}
},{
	underscored:true, //是否支持驼峰
	tableName:'wish' // MYSQL 数据库表
})
module.exports = Wish;
