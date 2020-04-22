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
        item = {
            enhancement: 20
        }
    })
    it('should have value', () => {
        expect(succeed(item)).toEqual({enhancement: 20});
    });
});

describe('fail decreases item durability and enhance', () => {
    beforeEach(() => {
        item = {
            enhancement: 17,
            durability: 67
        }
        it('should have value', () => {
            expect(fail(item)).toEqual({enhancement: 16, durability: 57});
        })
    })
})