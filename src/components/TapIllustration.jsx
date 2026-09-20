export default function TapIllustration() {
  return (
    <div className="tap-illustration" aria-hidden="true">
      <div className="nfc-card">
        <div className="nfc-symbol">
          <span>)))</span>
        </div>
        <div className="nfc-card-label">NFC</div>
      </div>

      <div className="phone">
        <div className="phone-screen">
          <div className="phone-logo">G</div>
          <div className="phone-line"></div>
          <div className="phone-line short"></div>
          <div className="phone-stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
}