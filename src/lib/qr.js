import QRCode from 'qrcode';
import { GOOGLE_REVIEW_URL } from './config.js';

export const QR_INK = '#10251d';

export async function useQrSvg() {
  return QRCode.toString(GOOGLE_REVIEW_URL, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
      dark: QR_INK,
      light: '#ffffff',
    },
  });
}