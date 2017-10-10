var express = require('express');
require('babel-polyfill');
let route = express.Router();
let epartmentDB = require('../db/epartmentDB');
let subjectlevelDB = require('../db/subjectlevelDB');
let subjecttypeDB = require('../db/subjecttypeDB');
let topicDB = require('../db/topicDB');
let subjectDB = require('../db/subjectDB');
let choiseDB = require('../db/choiseDB');
//查询所有类型
route.get('/manager/getAllSubjectType',(req,resp)=>{
	
	subjecttypeDB.findAll().then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
//获取所有题目难度级别
route.get('/manager/getAllSubjectLevel',(req,resp)=>{
	
	subjectlevelDB.findAll().then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
//获取所有的方向
route.get('/manager/getAllDepartmentes',(req,resp)=>{
	
	epartmentDB.findAll().then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
//获取所有的知识点
route.get('/manager/getAllTopics',(req,resp)=>{
	
	topicDB.findAll().then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
//得到全部的题目
route.get('/manager/getAllSubject',(req,resp)=>{
	
	subjectDB.findAll().then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
//BySubjectType_id
route.post('/manager/getSubjectBySubjectType_id',(req,resp)=>{
	var id = req.body.id;
	subjectDB.findBySubjectType_id(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//getSubjectBySubjectLevel_id
route.post('/manager/getSubjectBySubjectLevel_id',(req,resp)=>{
	var id = req.body.id;
	subjectDB.findBySubjectLevel_id(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//getSubjectByDepartment_id
route.post('/manager/getSubjectByDepartment_id',(req,resp)=>{
	var id = req.body.id;
	subjectDB.findByDepartment_id(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//getSubjectByDepartment_id
route.post('/manager/getSubjectByTopic_id',(req,resp)=>{
	var id = req.body.id;
	subjectDB.findByTopic_id(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//getSubjectByFour_id
route.post('/manager/getSubjectByFour_id',(req,resp)=>{
	var department_id=+req.body.department_id;
	var subjectLevel_id=+req.body.subjectLevel_id;
	var subjectType_id=+req.body.subjectType_id;
	var topic_id=+req.body.topic_id;
	subjectDB.findByFour_id(department_id,subjectLevel_id,subjectType_id,topic_id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//exam/manager/getChoiseBySubject_id
route.post('/manager/getChoiseBySubject_id',(req,resp)=>{
	var subject_id = req.body.subject_id;
	choiseDB.findBySubject_id(subject_id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//exam/manager/update_Subject_CheckStatue
route.post('/manager/update_Subject_CheckStatue',(req,resp)=>{
	var id =+req.body.id;
	var checkStatue = req.body.text;
	console.log("id",id);
	console.log("checkStatue",checkStatue);
	subjectDB.updateCheckStatue(id,checkStatue).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//exam/manager/delete_SubjectById
route.post('/manager/delete_SubjectById',(req,resp)=>{
	var id =+req.body.id;
	subjectDB.DeleteById(id).then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
module.exports = route;