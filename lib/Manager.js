const Employee = require('./Employee')


//Inherits from Employee
class Manager extends Employee{
    constructor(name,id, email, officeNum){
        super(name, id, email)
    
        this.officeNum = officeNum;

    }

// Overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
    }
    
    
    module.exports = Manager;