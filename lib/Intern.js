class Intern{
    constructor(name, id, email, github,school){
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.school = school;
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

    getGithub() {
        return this.github;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern'
    }
    }

    module.exports = Intern;