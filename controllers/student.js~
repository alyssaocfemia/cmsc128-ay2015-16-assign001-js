// controllers/student.js
var db = require(__dirname + './../lib/mysql');

exports.find = function (req, res, next) {
	//res.send('Hello World!');
	db.query("SELECT * FROM student", function (err, rows) {
		if(err) return(err);
		res.send(rows);
	});
};