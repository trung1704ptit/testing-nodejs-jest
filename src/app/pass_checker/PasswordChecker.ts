export class PasswordChecker {
    public checkPassword(password: string): boolean {
        if (password.length < 8) {
            return false;
        }
        if (password === password.toLowerCase()) {
            return false;
        }
        return true
    }
}