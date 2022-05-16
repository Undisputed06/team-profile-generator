const Employee = require('../lib/Employee')

test('create an employee object', () =>{
    const employee = new Employee("Gary", 10, "gary.email.com")

    expect(employee.name).toBe('Gary')
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toBe('gary.email.com')
})

test('get employee name', () => {
    const employee = new Employee("Gary", 10, "gary.email.com")

    expect(employee.getName()).toBe('Gary')
})

test('get employee id', () =>{
    const employee = new Employee("Gary", 10, "gary.email.com")

    expect(employee.getID()).toEqual(expect.any(Number))
})

test('get employee email', () => {
    const employee = new Employee("Gary", 10, "gary.email.com")

    expect(employee.getEmail()).toBe('gary.email.com')
})