const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

test('creates an Intern object', () => {
    const intern = new Intern('Taeyong');
});

test('set school with constructor', () => {
    const testValue = 'Yass Mamas Academy';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() methid', () => {
    const testValue = 'Yass Mamas Academy';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'Yass Mamas Academy');
    expect(e.getRole()).toBe(testValue);
});