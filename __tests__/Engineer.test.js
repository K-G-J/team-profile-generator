const Engineer = require('../lib/Engineer')

test('Can instantiate Engineer instance', () => {
    const e = new Engineer();
    expect(typeof(e)).toBe('object');
});
test('Can set role via constructor', () => {
    const testValue = 'Engineer'
    const e = new Engineer('Foo', 1, 'test@test.com', testValue)
    expect(e.role).toBe(testValue)
});
test('Can set GitHub account via constructor', () => {
    const testValue = 'GitHubUsername';
    const e = new Engineer('Foo', 1, 'test@test.com', 'Engineer', testValue)
    expect(e.github).toBe(testValue);
});
test('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue)
    expect(e.getRole()).toBe(testValue)
});
test('Can get GitHub username via getGithub()', () => {
    const testValue = 'GitHubUsername';
    const e = new Engineer('Foo', 1, 'test@test.com', 'Engineer', testValue)
    expect(e.getGithub()).toBe(testValue);
});