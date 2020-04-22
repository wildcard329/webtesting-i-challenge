const {repair, succeed, fail} = require('./enhancer.js');
// test away!
describe('jest is working and functional', () => {
    it('should run tests without errors', () => {
        expect(true).toBe(true);
    });
});

describe('repairing item sets durability to 100', () => {
    beforeEach(() => {
        item = {}
    })
    it('should have values', () => {
        expect(repair(item)).toEqual({"durability": 100});
    });
});

describe('success increases item enhancement by 1, unless enhancement is at 20', () => {
    beforeEach(() => {
        item = {}
    })
    it('should have value', () => {
        expect(succeed(item.enhancement(5))).toEqual(6)
    })
})