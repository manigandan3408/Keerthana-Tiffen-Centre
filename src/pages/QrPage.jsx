import { useState } from 'react';
import QRCode from 'qrcode';
import ReviewCard from '../components/ReviewCard.jsx';
import { GOOGLE_REVIEW_URL } from '../lib/config';
import { QR_INK, useQrSvg } from '../lib/qr';

function download(href, filename) {
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default function QrPage() {
  const { svg, failed } = useQrSvg(GOOGLE_REVIEW_URL);
  const [copyState, setCopyState] = useState('idle'); // 'idle' | 'copied' | 'failed'
  const [downloadFailed, setDownloadFailed] = useState(false);

  async function downloadPng() {
    try {
      const dataUrl = await QRCode.toDataURL(GOOGLE_REVIEW_URL, {
        errorCorrectionLevel: 'H',
        width: 1200,
        margin: 4,
        color: { dark: QR_INK, light: '#ffffff' },
      });
      download(dataUrl, 'keerthana-tiffin-centre-google-review-qr.png');
    } catch (err) {
      console.error('[qr] Could not create the PNG:', err);
      setDownloadFailed(true);
    }
  }

  async function downloadSvg() {
    try {
      const markup = await QRCode.toString(GOOGLE_REVIEW_URL, {
        type: 'svg',
        errorCorrectionLevel: 'H',
        margin: 4,
        color: { dark: QR_INK, light: '#ffffff' },
      });
      const blobUrl = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml' }));
      download(blobUrl, 'keerthana-tiffin-centre-google-review-qr.svg');
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      console.error('[qr] Could not create the SVG:', err);
      setDownloadFailed(true);
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(GOOGLE_REVIEW_URL);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  }

  return (
    <div className="qr-page">
      <section className="qr-tools no-print">
        <h1>Review card</h1>
        <p className="qr-lead">
          A6 portrait card (105 × 148 mm). The QR code opens Keerthana Tiffin Centre’s Google review page:
        </p>
        <p className="qr-url">{GOOGLE_REVIEW_URL}</p>

        {(failed || downloadFailed) && (
          <p className="qr-warn" role="alert">
            The QR code or file could not be created. Please reload the page and try again.
          </p>
        )}

        <div className="qr-actions">
          <button type="button" className="btn btn-primary btn-small" onClick={() => window.print()} disabled={!svg}>
            Print card
          </button>
          <a className="btn btn-ghost btn-small" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            Test the link
          </a>
          <button type="button" className="btn btn-ghost btn-small" onClick={downloadPng} disabled={!svg}>
            Download QR (PNG)
          </button>
          <button type="button" className="btn btn-ghost btn-small" onClick={downloadSvg} disabled={!svg}>
            Download QR (SVG)
          </button>
        </div>

        <p className="qr-tip">
          In the print dialog choose paper size <b>A6</b>, margins <b>None</b>, scale <b>100%</b>. To save a PDF, pick
          “Save as PDF” as the printer. Always <b>scan the printed card</b> with a phone before printing a batch.
        </p>

        <div className="nfc-box">
          <h2>Program the NFC card</h2>
          <p>
            This website can’t write to a physical NFC card. Use an NFC writer app on your phone (for example “NFC Tools”)
            and write this exact link as a <b>URL / URI</b> record:
          </p>
          <div className="nfc-link">
            <input type="text" readOnly value={GOOGLE_REVIEW_URL} aria-label="Google review link" onFocus={(e) => e.target.select()} />
            <button type="button" className="btn btn-ghost btn-small" onClick={copyLink}>
              {copyState === 'copied' ? 'Copied' : 'Copy link'}
            </button>
          </div>
          {copyState === 'failed' && <p className="qr-tip">Couldn’t copy automatically. Touch and hold the link, then choose Copy.</p>}
          <p className="qr-tip">
            Then tap the finished card with an Android phone (NFC switched on) and with an iPhone XS or newer. Both should
            open the Google review page. Use an NDEF-capable tag such as NTAG213, 215 or 216.
          </p>
        </div>
      </section>

      <div className="card-stage">{svg ? <ReviewCard qrSvg={svg} /> : <div className="card-loading">Preparing card…</div>}</div>
    </div>
  );
}
