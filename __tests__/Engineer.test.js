const { expect } = require('expect')
const Engineer = require('../lib/Engineer')

test('create an engineer object', () =>{
    const engineer= new Engineer("Gary", 10, "gary.email.com", "Undisputed06")

    expect(engineer.name).toBe('Gary')
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toBe('gary.email.com')
    expect(engineer.github).toEqual(expect.any(String))
})

test('get engineer name', () => {
    const engineer = new Engineer("Gary", 10, "gary.email.com", "Undisputed06")

    expect(engineer.getName()).toBe('Gary')
})

test('get engineer id', () =>{
    const engineer = new Engineer("Gary", 10, "gary.email.com","Undisputed06" )

    expect(engineer.getID()).toEqual(expect.any(Number))
})

test('get engineer email', () => {
    const engineer= new Engineer("Gary", 10, "gary.email.com", "Undisputed06")

    expect(engineer.getEmail()).toBe('gary.email.com')
})

test('get engineer github', () => {
    const intern = new Engineer("Gary", 10, "gary.email.com", "Undisputed06")

    expect(intern.getGithub()).toEqual(expect.any(String))
})


test('get engineer role', () =>{
    const engineer = new Engineer("Gary", 10, "gary.email.com", "Undisputed06")

    expect(engineer.getRole()).toBe('Engineer')
})