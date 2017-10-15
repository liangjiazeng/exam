let pool = require('./pool');
require('babel-polyfill');
module.exports = {
    //通过关键字查询
    query(keys){
      console.log("keys",keys);
      var sql = "select s.* from tbl_exam_subject as s where s.id like '%"
      +keys+"%' or s.department_id=(select id from tbl_exam_epartment where name like '%"
      +keys+"%') or s.subjectLevel_id=(select id from tbl_exam_subjectlevel where realName like '%"
      +keys+"%') or s.subjectType_id=(select id from tbl_exam_subjecttype where realName like '%"
      +keys+"%') or s.topic_id=(select id from tbl_exam_topic where title like '%"
      +keys+"%') or s.user_id=(select id from tbl_exam_user where name like '%"
      +keys+"%')";
        console.log(sql);
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
      +subject.analysis+"','"+subject.answer.join()+"','"
      +subject.checkState+"','"+subject.stem+"','"
      +subject.uploadTime+"',"+subject.department_id+","
      +subject.subjectLevel_id+","
      +subject.subjectType_id+","
      +subject.topic_id+","
      +subject.user_id+")";
      console.log(sql);
      return pool.execute(sql);
    },
    updateCheckStatue(id,checkStatue){
      var sql="update tbl_exam_subject set checkState ='"+checkStatue+"' where id ="+id+"";
      return pool.execute(sql);

    },
    findByMax_id(){
      var sql = "select * from tbl_exam_subject order by id desc limit 1";
      return pool.execute(sql);
    }
}
