class User{
	constructor(id,age,gender,name,password,telephone,department_id){
		this.id=id;
		this.age=age;
		this.gender = gender;
		this.name = name;
		this.password = password;
		this.telephone = telephone;
		this.department_id = department_id;
	}
}

module.exports = User;