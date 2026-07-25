/**
 * Gera o payload "Pix Copia e Cola" (BR Code, padrao EMV Merchant Presented Mode)
 * de forma estatica, sem depender de nenhum PSP/API externa.
 * merchantName/merchantCity sao aproximados (sem acentos, ate 25/15 chars) pois o
 * app nao coleta esses dados; bancos aceitam essa aproximacao no Copia e Cola.
 */

const DIACRITICS_REGEX = new RegExp("[̀-ͯ]", "g");

const field = (id: string, value: string) => {
    const len = value.length.toString().padStart(2, "0");
    return `${id}${len}${value}`;
};

const sanitize = (str: string, maxLen: number) => {
    const clean = str
        .normalize("NFD")
        .replace(DIACRITICS_REGEX, "")
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .trim()
        .slice(0, maxLen);
    return clean || "RACHA";
};

const crc16 = (payload: string): string => {
    let crc = 0xFFFF;
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            crc = (crc & 0x8000) !== 0 ? ((crc << 1) ^ 0x1021) : (crc << 1);
            crc &= 0xFFFF;
        }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
};

export type PixPayloadInput = {
    pixKey: string;
    amount?: number | null;
    merchantName?: string | null;
    merchantCity?: string | null;
    txid?: string;
};

export const generatePixPayload = ({ pixKey, amount, merchantName, merchantCity, txid }: PixPayloadInput): string => {
    const name = sanitize(merchantName || "METANOL FC", 25);
    const city = sanitize(merchantCity || "BRASIL", 15);
    const id = (txid || "***").replace(/[^a-zA-Z0-9]/g, "").slice(0, 25) || "***";

    const merchantAccountInfo = field("26", field("00", "br.gov.bcb.pix") + field("01", pixKey));
    const amountField = amount && amount > 0 ? field("54", amount.toFixed(2)) : "";

    const payloadWithoutCrc =
        field("00", "01") +
        merchantAccountInfo +
        field("52", "0000") +
        field("53", "986") +
        amountField +
        field("58", "BR") +
        field("59", name) +
        field("60", city) +
        field("62", field("05", id)) +
        "6304";

    return `${payloadWithoutCrc}${crc16(payloadWithoutCrc)}`;
};
