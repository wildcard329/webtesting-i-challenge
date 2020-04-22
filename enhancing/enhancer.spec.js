const {repair, succeed, fail, get} = require('./enhancer.js');
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
            enhancement: 16
        }
    })
    it('should have value', () => {
        expect(succeed(item)).toEqual({enhancement: 17});
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

describe('fail decreases item durability', () => {
    beforeEach(() => {
        item = {
            enhancement: 8,
            durability: 92
        }
    })
        it('should decrease durability by 5', () => {
            expect(fail(item)).toEqual({enhancement: 8, durability: 87});
    })
})

describe('fail decreases item durability', () => {
    beforeEach(() => {
        item = {
            enhancement: 15,
            durability: 84
        }
    })
        it('should decrease durability by 10', () => {
            expect(fail(item)).toEqual({enhancement: 15, durability: 74});
    })
})

describe('fail decreases item durability and enhance', () => {
    beforeEach(() => {
        item = {
            enhancement: 17,
            durability: 67
        }
    })
        it('should decrease durability by 10 and enhance by 1', () => {
            expect(fail(item)).toEqual({enhancement: 16, durability: 57});
    })
})

describe('should have default value', () => {
    beforeEach(() => {
        item = {
            name: 'End-Bringer!!!',
            enhancement: 0
        }
    })
        it('should initialize to empty object', () => {
            expect(get(item)).toEqual({name: 'End-Bringer!!!', enhancement: 0});
    })
})

describe('should have default value', () => {
    beforeEach(() => {
        item = {
            name: 'End-Bringer!!!',
            enhancement: 6
        }
    })
        it('should initialize to empty object', () => {
            expect(get(item)).toEqual({name: '[+6] End-Bringer!!!', enhancement: 6});
    })
})