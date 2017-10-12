let pool = require('./pool');
require('babel-polyfill');
module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from tbl_exam_choice where id like '%"
        +keys+"%' or content like '%"
        +keys+"%' or correct like '%"
        +keys+"%' or subject_id like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from tbl_exam_choice where id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from tbl_exam_choice";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from tbl_exam_choice where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    findBySubject_id(subject_id){
      var sql = "select * from tbl_exam_choice where subject_id = "+subject_id;
      return pool.execute(sql);
    },
    save(content,correct,subject_id){
      var sql = "insert into tbl_exam_choice values(null,'"+content+"',"+correct+","+subject_id+")";
      // console.log("sql",sql);
      return pool.execute(sql);
    }
    // update(id,name,realName){
    //   var sql = "update tbl_exam_choice set name = '"
    //   +name+"',realName ='"+realName+"' where id ="+id+"";
    //   return pool.execute(sql);
    // }
}
