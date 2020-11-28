const Common = require('./common');
const async = require('async');
const WishModel = require('../model/wish');
const Constant = require('../constant/constant');

let exportObj = {
	getList,
	add
}
console.log(Common)
module.exports = exportObj;

function getList(req, res) {
	//定义一个async 任务
	let tasks = {
		query: cb => {
			//使用 Sequelize 的model 的findAll 方法查询
			WishModel.findAll({
				limit: 10,
				order: [
					['created_at', 'DESC']
				]
			}).then(function(result) {
				let list = [];
				result.forEach((v, i) => {
					let obj = {
						id: v.id,
						name: v.name,
						content: v.content
					}
					list.push(obj)
				});
				cb(null, list);
			}).catch(function(err) {
				console.log(err);
				cb(Constant.DEFAULT_ERROR);
			})
		}
	}
	async.auto(tasks, function(err, result) {
		if (err) {
			console.log(err)
		} else {
			res.render('index', {
				list: result['query']
			})
		}
	})
}


function add(req, res) {
	// 定义一个task任务
	let tasks = {
		//验证必填参数方法
		checkParams: cb => {
			console.log(1)
			Common.checkParams(req.body, ['name','content'], cb)
		},
		//添加请求方法
		add: ['checkParams', (results, cb) => {
			WishModel.create({
				name: req.body.name,
				content: req.body.content
			}).then(function(result) {
				cb(null)
			}).catch(function(err) {
				//错误处理
				console.log(err)
				//通过async提供的回调,返回数据到下一个async方法
				cb(Constant.DEFAULT_ERROR)
			})
		}]
	};

	async.auto(tasks, function(err, result) {
		if (err) {
			//错误处理
			console.log(err)
			let result = '失败';
			let msg = '添加失败,出现错误';
			if (err.code === 199) {
				// 199表示参数缺少错误何再constant.js文件中定义的对应
				msg = '添加失败，姓名和愿望都要填上哦'
			}
			res.render('result', {
				result: result,
				msg: msg
			})
		} else {
			res.render('result', {
				result: '成功！',
				msg: "添加成功，返回看一下"
			})
		}
	})

}
