const Manager = require('../lib/Manager')

test('create an employee object', () =>{
    const manager = new Manager("Gary", 10, "gary.email.com", 100)

    expect(manager.name).toBe('Gary')
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toBe('gary.email.com')
    expect(manager.officeNum).toEqual(expect.any(Number))
   
})

test('get manager name', () => {
    const manager = new Manager("Gary", 10, "gary.email.com", 100)

    expect(manager.getName()).toBe('Gary')
})

test('get manager id', () =>{
    const manager = new Manager("Gary", 10, "gary.email.com", 100)

    expect(manager.getID()).toEqual(expect.any(Number))
})


test('get manager role', () =>{
    const manager = new Manager("Gary", 10, "gary.email.com", 100)

    expect(manager.getRole()).toBe('Manager')

})