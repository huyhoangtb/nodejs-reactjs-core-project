export default interface ITwoFaSecret {
    ascii: string;
    hex: string;
    base32: string;
    otpauth_url: string;
}
