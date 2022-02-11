const Manager = require('../lib/Manager')

test('Can instantiate Manager instance', () => {
    const e = new Manager
    expect(typeof(e)).toBe('object');
});
test('Can set role via constructor', () => {
    const testValue = 'Manager'
    const e = new Manager('Foo', 1, 'test@test.com', testValue)
    expect(e.role).toBe(testValue)
});
test('Can set office via constructor', () => {
    const testValue = 101
    const e = new Manager('Foo', 1, 'test@test.com', 'Manager', testValue)
    expect(e.office).toBe(testValue);
});
test('getRole() should return \"Manager\"', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'test@test.com', testValue)
    expect(e.getRole()).toBe(testValue)
});
test('Can get office via getOffice()', () => {
    const testValue = 101;
    const e = new Manager('Foo', 1, 'test@test.com', 'Manager', testValue)
    expect(e.getOffice()).toBe(testValue);
});