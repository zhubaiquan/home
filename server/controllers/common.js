// const async = require('async');
const Constant = require('../constant/constant.js')

function checkParams(params, checkArr, cb) {
	console.log(params,checkArr)
	let flag = true;
	checkArr.forEach(v => {
		if (!params[v]) {
			flag = false;
		}
	});
	if (flag) {
		cb(null)
	} else {
		cb(Constant.LACK)
	}
}
const exportObj = {
	checkParams
}

module.exports = exportObj;
