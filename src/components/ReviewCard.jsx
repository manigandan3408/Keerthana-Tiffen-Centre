import { HeartIcon, LogoMark, NfcIcon, StarIcon } from './Icons.jsx';

// The printable A6 card. All sizes are in `cqw` (1% of the card's own width),
// so the same design scales from the screen preview to 105 x 148 mm on paper.
// The QR code (and the NFC chip, programmed separately) both open Google Reviews.
export default function ReviewCard({ qrSvg }) {
  return (
    <article className="rcard" aria-label="Review card, front">
      <div className="rc-bg" />
      <div className="rc-frame" />

      <header className="rc-head">
        <LogoMark className="rc-logo" />
        <div>
          <div className="rc-name">
            Keerthana
            <br />
            Tiffin Centre
          </div>
          <div className="rc-tamil" lang="ta">கீர்த்தனா டிபன் சென்டர்</div>
        </div>
      </header>

      <div className="rc-body">
        <div>
          <h2 className="rc-title">Enjoyed your meal?</h2>
          <p className="rc-ta" lang="ta">உங்கள் உணவு பிடித்ததா?</p>
          <p className="rc-sub">Share your experience on Google</p>
        </div>

        <div className="rc-tap">
          <NfcIcon />
          <span>Tap your phone or scan to review</span>
        </div>

        <div className="rc-plate">
          <div
            className="rc-qr"
            role="img"
            aria-label="QR code that opens Keerthana Tiffin Centre's Google review page"
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <div className="rc-band">
            <span className="rc-en">
              <StarIcon />
              Scan the QR code
            </span>
            <span className="rc-tam" lang="ta">QR code-ஐ Scan செய்யவும்</span>
          </div>
        </div>
      </div>

      <footer className="rc-foot">
        <span>Thank you for supporting Keerthana Tiffin Centre</span>
        <HeartIcon />
      </footer>
    </article>
  );
}
