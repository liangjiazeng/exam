var express = require('express');
require('babel-polyfill');
let route = express.Router();
let epartmentDB = require('../db/epartmentDB');
let subjectlevelDB = require('../db/subjectlevelDB');
let subjecttypeDB = require('../db/subjecttypeDB');
let topicDB = require('../db/topicDB');
let subjectDB = require('../db/subjectDB');
let choiseDB = require('../db/choiseDB');
///addSubjectRouter/manager/addSubject
route.get('/manager/getAllSubjectType',(req,resp)=>{
	subjecttypeDB.findAll().then((data)=>{
		resp.send(data);
	}).catch(function(error){
		console.log(error);
	});
});
module.exports =route;