import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker"

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it ('Password with less then 8 chars is invalid', () => {
        const actual = sut.checkPassword('123545');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })
    
    it ('Password with more than 8 chars is ok', () => {
        const actual = sut.checkPassword('12345678');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    })

    it ('Password with no uppercase letter is invalid', () => {
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })

    it ('Password with no lowercase letter is invalid', () => {
        const actual = sut.checkPassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })

    it ('Complex password is valid', () => {
        const actual = sut.checkPassword('1234abcD');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0);
    })
})