import { useEffect, useState } from 'react';
import ReviewCard from '../components/ReviewCard.jsx';
import TapIllustration from '../components/TapIllustration.jsx';
import { GOOGLE_REVIEW_URL } from '../lib/config.js';
import QRCode from 'qrcode';

export default function LandingPage() {
  const [qrSvg, setQrSvg] = useState('');

  useEffect(() => {
    QRCode.toString(GOOGLE_REVIEW_URL, {
      type: 'svg',
      errorCorrectionLevel: 'H',
      margin: 2,
      color: {
        dark: '#10251d',
        light: '#ffffff',
      },
    }).then(setQrSvg);
  }, []);

  return (
    <main className="landing-page">
      <section className="review-hero">
        <div className="review-header">
          <p className="eyebrow">KEERTHANA TIFFIN CENTRE</p>

          <h1>Enjoyed your meal?</h1>

          <p className="business-tamil">கீர்த்தனா டிபன் சென்டர்</p>

          <p className="hero-description">
            Share your experience on Google.
          </p>
        </div>

        <div className="review-main-card">
          <ReviewCard qrSvg={qrSvg} />

          <div className="tap-review">
            <TapIllustration />

            <div className="tap-text">
              <strong>Tap or Scan</strong>
              <span>
                Tap your NFC phone on the card or scan the QR code to open
                Google Reviews.
              </span>
            </div>
          </div>

          <a
            className="review-button"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
          >
            Review us on Google
          </a>
        </div>

        <p className="review-note">
          Choose your rating, write your review, and tap <strong>Post</strong>{' '}
          on Google.
        </p>
      </section>
    </main>
  );
}
