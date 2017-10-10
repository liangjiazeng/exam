let pool = require('./pool');
require('babel-polyfill');
module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from tbl_exam_paper where id like '%"
        +keys+"%' or answerQuestionTime like '%"
        +keys+"%' or createTime like '%"
        +keys+"%' or description like '%"
        +keys+"%' or title like '%"
        +keys+"%' or totalPoints like '%"
        +keys+"%' or type like '%"
        +keys+"%' or department_id like '%"
        +keys+"%' or user_id like '%"
        +keys+"%'";
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from tbl_exam_paper where id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from tbl_exam_paper";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from tbl_exam_paper where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(id,answerQuestionTime,createTime,description,title,totalPoints,type,department_id,user_id){
      var sql = "insert into tbl_exam_paper values(null,'"
      +answerQuestionTime+"','"+createTime+"','"+description+"','"+title+"',"+totalPoints+",'"+type+"',"+department_id+","+user_id+")";
      return pool.execute(sql);
    },
    update(id,answerQuestionTime,createTime,description,title,totalPoints,type,department_id,user_id){
      var sql = "update tbl_exam_paper set answerQuestionTime = '"
      +answerQuestionTime+"' where id ="+id+"";
      return pool.execute(sql);
    }
}
