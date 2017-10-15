var express = require('express');
require('babel-polyfill');
let route = express.Router();
let epartmentDB = require('../db/epartmentDB');
let subjectlevelDB = require('../db/subjectlevelDB');
let subjecttypeDB = require('../db/subjecttypeDB');
let topicDB = require('../db/topicDB');
let subjectDB = require('../db/subjectDB');
let choiseDB = require('../db/choiseDB');
let Subject = require('../module/Subject');
///addSubjectRouter/manager/addSubject
route.post('/manager/addSubject',(req,resp)=>{
	var type_id = +req.body.type_id;
	var department_id = +req.body.department_id;
	var level_id = +req.body.level_id;
	var topic_id =+ req.body.topic_id;
	var stem = req.body.stem.toString();
	var time_now = new Date();
	var date_now =time_now.toLocaleDateString();
	var analysis =req.body.analysis.toString();
	var answers =JSON.parse(req.body.answers);
	var choises =JSON.parse(req.body.choises);
	console.log("answers",answers);
	console.log("choises",choises);
	var correct=new Array();
	choises.forEach(function(item,index){
		if(item==1){
			correct.push(answers[index]);
		}
	});
	var subject=new Subject(id=null,analysis,answer=correct,
		"未审核",stem,date_now,department_id,level_id,type_id,topic_id,user_id=null);
	subjectDB.save(subject).then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
//
route.post('/manager/addSubject_jiandati',(req,resp)=>{
	var type_id = +req.body.type_id;
	var department_id = +req.body.department_id;
	var level_id = +req.body.level_id;
	var topic_id =+ req.body.topic_id;
	var stem = req.body.stem.toString();
	var answers = new Array(req.body.answers.toString());
	var time_now = new Date();
	var date_now =time_now.toLocaleDateString();
	var analysis =req.body.analysis.toString();
	var subject=new Subject(id=null,analysis,answers,"未审核",stem,date_now,department_id,level_id,type_id,topic_id,user_id=null);
	subjectDB.save(subject).then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
///exam/manager/getSubjectByMax_id
route.get('/manager/getSubjectByMax_id',(req,resp)=>{
	subjectDB.findByMax_id().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		console.log(error);
	});
});
//addSubjectRouter/manager/addChoise
route.post('/manager/addChoise',(req,resp)=>{
	console.log("我来啦");
	var subject_id = +req.body.subject_id;
	var choises =JSON.parse(req.body.choises);
	var answers =JSON.parse(req.body.answers);
	choises.forEach(function(item,index){
		choiseDB.save(answers[index],item,subject_id).then((data)=>{
			resp.send(data);
		}).catch(function(error){
			return;
			console.log(error);
		});
	});
	
});
module.exports =route;