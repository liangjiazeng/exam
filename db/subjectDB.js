let pool = require('./pool');
require('babel-polyfill');
module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from tbl_exam_subject where id like '%"
        +keys+"%' or analysis like '%"
        +keys+"%' or answer like '%"
        +keys+"%' or checkState like '%"
        +keys+"%' or stem like '%"
        +keys+"%' or uploadTime like '%"
        +keys+"%' or department_id like '%"
        +keys+"%' or subjectLevel_id like '%"
        +keys+"%' or subjectType_id like '%"
        +keys+"%' or topic_id like '%"
        +keys+"%' or user_id like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from tbl_exam_subject where id = "+id;
      return pool.execute(sql);
    },
    findByFour_id(department_id,subjectLevel_id,subjectType_id,topic_id){
      var sql = "select * from tbl_exam_subject where department_id = "+department_id+" and subjectLevel_id = "
      +subjectLevel_id+" and subjectType_id ="
      +subjectType_id+" and topic_id = "+topic_id+"";
      return pool.execute(sql);
    },
    findByDepartment_id(id){
      var sql = "select * from tbl_exam_subject where department_id = "+id;
      return pool.execute(sql);
    },
    findBySubjectLevel_id(id){
      var sql = "select * from tbl_exam_subject where subjectLevel_id = "+id;
      return pool.execute(sql);
    },
    findBySubjectType_id(id){
      var sql = "select * from tbl_exam_subject where subjectType_id = "+id;
      return pool.execute(sql);
    },
    findByTopic_id(id){
      var sql = "select * from tbl_exam_subject where topic_id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from tbl_exam_subject";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from tbl_exam_subject where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    DeleteById(id){
      var sql = "delete from tbl_exam_subject where id ="+id+"";
      return pool.execute(sql);
    },
    save(subject){
      var sql = "insert into tbl_exam_subject values(null,'"
      +subject.analysis+"','"+subject.answer+"','"+subject.checkState+"','"
      +subject.stem+"','"
      +subject.uploadTime+"',"
      +subject.department_id+")";
      +subject.subjectLevel_id+")";
      +subject.subjectType_id+")";
      +subject.topic_id+")";
      +subject.user_id+")";
      return pool.execute(sql);
    },
    updateCheckStatue(id,checkStatue){
      var sql="update tbl_exam_subject set checkState ='"+checkStatue+"' where id ="+id+"";
      return pool.execute(sql);

    }
}
