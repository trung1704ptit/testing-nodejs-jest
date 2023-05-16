import { PasswordChecker } from "../../app/pass_checker/PasswordChecker"

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it ('Password with less then 8 chars is invalid', () => {
        const actual = sut.checkPassword('123545');
        expect(actual).toBe(false)
    })

    
    it ('Password with more than 8 chars is ok', () => {
        const actual = sut.checkPassword('12354As52');
        expect(actual).toBe(true)
    })

    it ('Password with no uppercase letter is invalid', () => {
        const actual = sut.checkPassword('12354ss523');
        expect(actual).toBe(false)
    })
})