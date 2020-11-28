const config = {
	DEBUG: true,
	//MYSQL数据库连接设置
	MYSQL: {
		host: "localhost",
		database: "wish",
		username: "root",
		password: "13029116189zhu"
	}
}

if (process.env.NODE_ENV === 'production') {
	//生产环境MYSQL 数据库连接配置
	config.MYSQL = {
		host:"www.zhubaiquan.com",
		database:"wish",
		username:"root",
		password:"13029116189zhu!"
	}
}

module.exports = config;
