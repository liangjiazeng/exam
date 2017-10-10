let pool = require('./pool');
require('babel-polyfill');
module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from tbl_exam_subjectlevel where name like '%"
        +keys+"%' or id like '%"
        +keys+"%' or realName like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from tbl_exam_subjectlevel where id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from tbl_exam_subjectlevel";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from tbl_exam_subjectlevel where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(id,name,realName){
      var sql = "insert into tbl_exam_subjectlevel values(null,'"
      +name+"','"+realName+"')";
      return pool.execute(sql);
    },
    update(id,name,realName){
      var sql = "update tbl_exam_subjectlevel set name = '"
      +name+"',realName ='"+realName+"' where id ="+id+"";
      return pool.execute(sql);
    }
}
