const { expect } = require('expect')
const Intern = require('../lib/Intern')

test('create intern object', () =>{
    const intern= new Intern("Gary", 10, "gary.email.com", "Undisputed06", "Savannah State")

    expect(intern.name).toBe('Gary')
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toBe('gary.email.com')
    expect(intern.github).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
    
})

test('get intern name', () => {
    const intern = new Intern("Gary", 10, "gary.email.com", "Undisputed06","Savannah State")

    expect(intern.getName()).toBe('Gary')
})

test('get intern id', () =>{
    const intern = new Intern("Gary", 10, "gary.email.com","Undisputed06", "Savannah State" )

    expect(intern.getID()).toEqual(expect.any(Number))
})

test('get intern email', () => {
    const intern = new Intern("Gary", 10, "gary.email.com", "Undisputed06","Savannah State")

    expect(intern.getEmail()).toBe('gary.email.com')
})

test('get intern github', () => {
    const intern = new Intern("Gary", 10, "gary.email.com", "Undisputed06","Savannah State")

    expect(intern.getGithub()).toEqual(expect.any(String))
})


test('get intern school', () => {
    const intern = new Intern("Gary", 10, "gary.email.com", "Undisputed06","Savannah State")

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('get itern role', () =>{
    const intern = new Intern("Gary", 10, "gary.email.com", "Undisputed06", "Savannah State")

    expect(intern.getRole()).toBe('Intern')
})