class Subject{
	constructor(id=null,analysis=null,answer=null,checkState=null,stem=null,
		uploadTime=null,department_id=null,subjectLevel_id=null,subjectType_id=null,topic_id=null,user_id=null){
		this.id=id;
		this.analysis=analysis;
		this.answer = answer;
		this.checkState = checkState;
		this.stem = stem;
		this.uploadTime = uploadTime;
		this.department_id = department_id;
		this.subjectLevel_id = subjectLevel_id;
		this.subjectType_id = subjectType_id;
		this.topic_id = topic_id;
		this.user_id = user_id;
	}
}

module.exports = Subject;