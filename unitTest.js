const cont = require('./controller');
 
test('adds 1 + 2 to equal 3', () => {
 expect(cont.getUsers(req, res)).toBe(3);
});