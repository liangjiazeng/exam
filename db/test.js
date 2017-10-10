require('babel-polyfill');
// var Student =require('../model/student');
// var Course =require('../model/course');
// var studentDB = require('./studentDB');
// var courseDB = require('./courseDB');
// studentDB.findAll().then(function(data){
//   console.log(data);
// }).catch(function(error){
//   console.log("报错了 ！"+error);
// });

// var stu = new Student(null,'张三','男','1993-12-05',null);
// studentDB.save(stu).then(function(date){
// 	console.log(date);
// }).catch(function(err){
// 	console.log(err);
// })


// var stu = new Student(74,'张三','男','1999-12-05',null);
// studentDB.update(stu).then(function(date){
// 	console.log(date);
// }).catch(function(err){
// 	console.log(err);
// })

// studentDB.query("男").then(function(date){
// 	console.log(date);
// }).catch(function(err){
// 	console.log(err);
// })
 
 // courseDB.findAll().then((data)=>{
 // 	console.log(data);
 // }).catch((error)=>{
 // 	console.log(err);
 // });
// var sb = new Course(101,'sb');
//   courseDB.save(sb).then((data)=>{
//  	console.log(data);
//  }).catch((err)=>{
//  	console.log(err);
//  });

// var sb = new Course(101,'JAVA');
//  courseDB.update(sb).then((data)=>{
//  	console.log(data);
//  }).catch((error)=>{
//  	console.log(err);
//  });

// var sb = new Course(101,'JAVA');
//  courseDB.query('JA').then((data)=>{
//  	console.log(data);
//  }).catch((error)=>{
//  	console.log(err);
//  });
var epartmentDB = require('./epartmentDB');
// var ss=[7];
// epartmentDB.batchDelete(ss).then((data)=>{
// 	console.log(data);
// });
// epartmentDB.save(7,"你好").then((data)=>{
// 	console.log(data);
// });
epartmentDB.findAll().then((data)=>{
	console.log(data);
});
