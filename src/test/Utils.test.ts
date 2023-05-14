import { toUpperCase } from "../app/Utils"

describe('Utils test suite', () => {
    it('should return auppercase', () => {
        const result = toUpperCase('abc');
        expect(result).toEqual('ABC')
    })
})