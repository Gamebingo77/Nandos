import { NotificationPopup } from "@/components/notification-popup";

export default function Home() {
  return (
    <>
      <div className="page">
        {/* Header / Logo */}
        <div className="header">
          <div className="logo">Nando's</div>
        </div>

        {/* Hero headline */}
        <div className="hero">
          <h1>
            Claim Your <span className="red">£100</span>
            <br />
            Nando's Gift Card
          </h1>
          <p>Follow these simple steps to get started</p>
        </div>

        {/* 4 Steps */}
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <p>Click on "Claim Now"</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <p>Enter your email and basic info</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <p>Complete 4–5 sponsored deals</p>
          </div>
          <div className="step step-4">
            <div className="step-num">4</div>
            <p>Enjoy your £100 Nando's gift card!</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="cta-wrap">
          <a
            href="https://giftclick.org/aff_c?offer_id=1080&aff_id=19791&source=uknan"
            className="cta-btn"
          >
            CLAIM NOW
          </a>
        </div>

        {/* Disclaimer */}
        <p className="disclaimer">
          By clicking "Claim Now", you agree to complete the
          <br />
          required steps to receive your gift card.
        </p>

        <hr className="divider" />

        {/* FAQ Section */}
        <div className="faq-section">
          <p className="faq-title">Frequently Asked Questions</p>

          <details>
            <summary>How long do the deals take?</summary>
            <div className="faq-answer">
              Most deals take just a few minutes to complete. Some may take up to 24
              hours to verify after submission.
            </div>
          </details>

          <details>
            <summary>What are deals?</summary>
            <div className="faq-answer">
              Deals are sponsored offers from our partners. They may include free
              trials, short surveys, or simple sign-ups with third-party brands.
            </div>
          </details>

          <details>
            <summary>How many deals do I have to do?</summary>
            <div className="faq-answer">
              You are required to complete between 3 and 5 deals to fully qualify for
              your £100 Nando's gift card reward.
            </div>
          </details>

          <details>
            <summary>When will I receive my reward?</summary>
            <div className="faq-answer">
              Rewards are typically sent within 7–14 business days after all your
              deals have been verified and confirmed.
            </div>
          </details>
        </div>

        {/* Footer links */}
        <div className="footer">
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="https://www.nandos.co.uk" target="_blank" rel="noopener noreferrer">
            Nandos UK
          </a>
        </div>
      </div>

      <NotificationPopup />

      <style jsx>{`
        .page {
          background: #ffffff;
          width: 100%;
          max-width: 460px;
          min-height: 100vh;
        }

        .header {
          text-align: center;
          padding: 30px 24px 18px;
        }

        .logo {
          font-family: var(--font-marker);
          font-size: 34px;
          font-weight: 800;
          color: #d1011b;
          display: inline-block;
          padding: 6px 16px;
          line-height: 1;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .hero {
          text-align: center;
          padding: 6px 28px 28px;
        }

        .hero h1 {
          transform: rotate(-3deg);
          display: inline-block;
          font-family: var(--font-marker);
          font-size: 38px;
          font-weight: 800;
          color: #000000;
          line-height: 1.08;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .hero h1 .red {
          color: #d1011b;
        }

        .hero p {
          font-size: 14px;
          color: #777777;
          letter-spacing: 0.01em;
        }

        .steps {
          padding: 0 20px 26px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 14px;
          border: 2px solid #000000;
          border-radius: 10px;
          padding: 15px 16px;
          margin-bottom: 10px;
          background: #ffffff;
        }

        .step-num {
          min-width: 38px;
          height: 38px;
          background: #000000;
          color: #ffffff;
          font-family: var(--font-marker);
          font-size: 17px;
          font-weight: 800;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step p {
          font-size: 14px;
          font-weight: 500;
          color: #111111;
          line-height: 1.4;
        }

        .step-4 .step-num {
          background: #d1011b;
          color: #ffffff;
        }

        .cta-wrap {
          padding: 4px 20px 12px;
        }

        .cta-btn {
          display: block;
          width: 100%;
          background: #d1011b;
          color: #ffffff;
          font-family: var(--font-marker);
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          border: 3px solid #d1011b;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s;
        }

        .cta-btn:hover {
          background: #ffcd41;
          color: #000000;
          border-color: #ffcd41;
        }

        .disclaimer {
          text-align: center;
          padding: 10px 28px 28px;
          font-size: 11.5px;
          color: #888888;
          line-height: 1.6;
        }

        .divider {
          border: none;
          border-top: 1.5px solid #eeeeee;
          margin: 0 20px;
        }

        .faq-section {
          padding: 24px 20px 20px;
        }

        .faq-title {
          font-family: var(--font-marker);
          font-size: 22px;
          font-weight: 800;
          color: #000000;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        details {
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          margin-bottom: 10px;
          overflow: hidden;
          transition: border-color 0.15s;
        }

        details[open] {
          border-color: #d1011b;
        }

        summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 16px;
          font-size: 14px;
          font-weight: 600;
          color: #111111;
          cursor: pointer;
          list-style: none;
          user-select: none;
          background: #ffffff;
        }

        summary::-webkit-details-marker {
          display: none;
        }

        summary::after {
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          border-right: 2.5px solid #d1011b;
          border-bottom: 2.5px solid #d1011b;
          transform: rotate(45deg);
          flex-shrink: 0;
          margin-left: 12px;
          transition: transform 0.2s;
        }

        details[open] summary::after {
          transform: rotate(-135deg);
        }

        .faq-answer {
          padding: 0 16px 15px;
          font-size: 13px;
          color: #555555;
          line-height: 1.7;
          border-top: 1.5px solid #f0f0f0;
          padding-top: 12px;
        }

        .footer {
          border-top: 1.5px solid #eeeeee;
          padding: 20px 24px 30px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer a {
          font-size: 11.5px;
          color: #555555;
          text-decoration: underline;
          font-weight: 500;
        }

        .footer a:hover {
          color: #d1011b;
        }
      `}</style>
    </>
  );
}
