class Pager{
	constructor(id,answerQuestionTime,createTime,description,title=null,
		totalPoints,type,department_id,user_id){
		this.id=id;
		this.answerQuestionTime=answerQuestionTime;
		this.createTime = createTime;
		this.description = description;
		this.title = title;
		this.totalPoints = totalPoints;
		this.type = type;
		this.department_id = department_id;
		this.user_id = user_id;
	}
}

module.exports = Pager;