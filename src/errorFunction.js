export function errorResolve(code) {
    switch (code) {
        case "auth/weak-password":
            return "Şifre geçersiz"

        case "auth/email-already-in-use":
            return "Hesap zaten kullanımda"

        default:
            break;
    }
}