class Manager{
    constructor(name,id, email, officeNum){
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;

    }
    
    getName(){
        return this.name;
    }
    
    getID() {
        return this.id
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return 'Manager';
    }
    }
    
    
    module.exports = Manager;