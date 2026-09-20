import ReviewCard from '../components/ReviewCard.jsx';
import TapIllustration from '../components/TapIllustration.jsx';
import { GOOGLE_REVIEW_URL } from '../lib/config.js';

export default function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">GOOGLE REVIEWS</p>

          <h1>Keerthana Tiffin Centre</h1>

          <p className="business-tamil">கீர்த்தனா டிபன் சென்டர்</p>

          <h2>Enjoyed your meal?</h2>

          <p className="hero-description">
            Share your experience on Google. Tap your phone or scan the QR code
            to leave your review.
          </p>

          <a
            className="review-button"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
          >
            Review us on Google
          </a>
        </div>

        <ReviewCard />
      </section>

      <section className="tap-section">
        <div className="tap-content">
          <p className="eyebrow">TAP OR SCAN</p>

          <h2>Two easy ways to review</h2>

          <p>
            Tap your NFC-enabled phone on the card, or scan the QR code with
            your camera. Both take you directly to Google Reviews.
          </p>

          <TapIllustration />
        </div>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <div>
              <h3>Tap or scan</h3>
              <p>Use NFC or scan the QR code on the card.</p>
            </div>
          </div>

          <div className="step">
            <span>02</span>
            <div>
              <h3>Write your review</h3>
              <p>Choose your Google rating and share your experience.</p>
            </div>
          </div>

          <div className="step">
            <span>03</span>
            <div>
              <h3>Tap Post</h3>
              <p>Submit your review directly on Google.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <h2>Your review goes directly to Google</h2>

        <p>
          This page does not collect or store customer feedback. You post your
          review yourself through Google.
        </p>
      </section>
    </main>
  );
}