let pool = require('./pool');
require('babel-polyfill');
module.exports = {
    //通过关键字查询
    query(keys){
      var sql = "select * from tbl_exam_epartment where name like '%"
        +keys+"%' or id like '%"
        +keys+"%'" ;
      return pool.execute(sql);
    },
    //通过id查询
    findById(id){
      var sql = "select * from tbl_exam_epartment where id = "+id;
      return pool.execute(sql);
    },
    findAll(){
      var sql = "select * from tbl_exam_epartment";
      return pool.execute(sql);
    },
    batchDelete(ids){
      var sql = "delete from tbl_exam_epartment where id in ("+ids.join()+")";
      return pool.execute(sql);
    },
    save(id,name){
      var sql = "insert into tbl_exam_epartment values(null,'"
      +name+"')";
      return pool.execute(sql);
    },
    update(id,name){
      var sql = "update tbl_exam_epartment set name = '"
      +name+"' where id ="+id+"";
      return pool.execute(sql);
    }
}
