import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI Image Generator",
      description:
        "Create stunning artwork with our advanced AI algorithms. Transform simple sketches into masterpieces with just one click.",
      icon: "🎨",
    },
    {
      title: "Premium Templates",
      description:
        "Access thousands of premium templates for all your design needs. All templates unlocked in the MOD APK version.",
      icon: "✨",
    },
    {
      title: "Advanced Photo Editor",
      description:
        "Professional-grade editing tools at your fingertips. Remove backgrounds, adjust lighting, and apply filters with precision.",
      icon: "📷",
    },
    {
      title: "Sticker Maker",
      description:
        "Create custom stickers for your social media posts. All premium sticker packs unlocked and ready to use.",
      icon: "🏷️",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <h1>
            PicsArt<span className="highlight">MOD</span>
          </h1>
          <p className="domain">w2.picsartmod.me</p>
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#download">Download</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Unleash Your Creativity with PicsArt MOD APK</h2>
          <p>All Premium Features & AI Tools Unlocked</p>
          <a href="#download" className="cta-button">
            Download Now
          </a>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="screen-content">
                <div className="app-interface">
                  <div className="app-header"></div>
                  <div className="app-tools"></div>
                  <div className="app-canvas"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-feature" id="features">
        <h2>Advanced AI Features Unlocked</h2>
        <div className="feature-showcase">
          <div className="feature-list">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-item ${
                  activeFeature === index ? "active" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="feature-preview">
            <div className="preview-container">
              <div className="preview-header">
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
              </div>
              <div className="preview-content">
                <h3>{features[activeFeature].title}</h3>
                <div className="preview-image">
                  <div className="feature-animation">
                    {features[activeFeature].icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-benefits">
        <h2>What's Included in the MOD APK?</h2>
        <div className="benefits-container">
          <div className="benefit-card">
            <div className="benefit-icon">💯</div>
            <h3>All Premium Features</h3>
            <p>
              Access every premium feature without any subscription fees or
              restrictions.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🤖</div>
            <h3>AI Tools Unlocked</h3>
            <p>
              Use cutting-edge AI technology to enhance your photos and create
              digital art.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🚫</div>
            <h3>Ad-Free Experience</h3>
            <p>
              Enjoy a completely ad-free experience for distraction-free
              creativity.
            </p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🔄</div>
            <h3>Regular Updates</h3>
            <p>
              Get the latest features as they're released with our frequent
              updates.
            </p>
          </div>
        </div>
      </section>

      <section className="download-section" id="download">
        <h2>Download PicsArt MOD APK</h2>
        <p>Latest Version: 22.3.5 | Updated: April 2025</p>
        <div className="download-options">
          <a href="https://w2.picsartmod.me/" className="download-button">
            <span className="button-icon">📱</span>
            <span className="button-text">
              <span>Download for Android</span>
              <span className="file-size">85 MB</span>
            </span>
          </a>
        </div>
        <div className="download-steps">
          <h3>Installation Guide:</h3>
          <ol>
            <li>Download the APK file from the button above</li>
            <li>
              Enable "Install from Unknown Sources" in your device settings
            </li>
            <li>Open the APK file and tap "Install"</li>
            <li>Launch the app and enjoy all premium features</li>
          </ol>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>Is PicsArt MOD APK safe to use?</h3>
            <p>
              Yes, our MOD APK is scanned for malware and viruses. We ensure
              it's safe for installation on your devices.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do I need to root my device?</h3>
            <p>
              No, PicsArt MOD APK works on both rooted and non-rooted devices
              without any additional configuration.
            </p>
          </div>
          <div className="faq-item">
            <h3>Will I get banned for using the MOD version?</h3>
            <p>
              Our MOD APK is designed to avoid detection. However, use at your
              own discretion as we cannot guarantee account safety.
            </p>
          </div>
          <div className="faq-item">
            <h3>How often is the MOD APK updated?</h3>
            <p>
              We update our MOD APK shortly after official app updates to ensure
              you have access to the latest features.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About PicsArt MOD</h2>
        <p>
          We provide modified versions of popular apps to give users access to
          premium features without the cost. Our team works diligently to ensure
          the highest quality MODs with regular updates and security checks.
        </p>
        <div className="disclaimer">
          <h3>Disclaimer</h3>
          <p>
            This modified application is provided for educational purposes only.
            We are not affiliated with the original PicsArt application. Users
            should consider purchasing the official app to support the
            developers.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              PicsArt<span className="highlight">MOD</span>
            </h2>
            <p>Unleash your creativity</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>For support or inquiries: support@picsartmod.me</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 w2.picsartmod.me - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
