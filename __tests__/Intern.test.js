const Intern = require('../lib/Intern')

test('Can instantiate Intern instance', () => {
    const e = new Intern
    expect(typeof(e)).toBe('object');
});
test('Can set role via constructor', () => {
    const testValue = 'Intern'
    const e = new Intern('Foo', 1, 'test@test.com', testValue)
    expect(e.role).toBe(testValue)
});
test('Can set school via constructor', () => {
    const testValue = 'University'
    const e = new Intern('Foo', 1, 'test@test.com', 'Intern', testValue)
    expect(e.school).toBe(testValue);
});
test('getRole() should return \"Intern\"', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'test@test.com', testValue)
    expect(e.getRole()).toBe(testValue)
});
test('Can get school via getSchool()', () => {
    const testValue = 'University';
    const e = new Intern('Foo', 1, 'test@test.com', 'Intern', testValue)
    expect(e.getSchool()).toBe(testValue);
});
