import Facebook from '../../assets/socialmedia/Facebook'
import Instagram  from '../../assets/socialmedia/Instagram'
import Twitter from '../../assets/socialmedia/Twitter'
import Youtube from '../../assets/socialmedia/Youtube'

import './footer.css'


function Footer() {
    return (
      <div>
        <footer className="footer">
          <div className="top">
            <div className="top-socials">
              <div className="left">
                <div className="something-on-top">
                  Popular Locations
                  <ul>
                    <li>
                      <a className="as">Kolkata</a>
                    </li>
                    <li>
                      <a className="as">Mumbai</a>
                    </li>
                    <li>
                      <a className="as">Chennai</a>
                    </li>
                    <li>
                      <a className="as">Pune</a>
                    </li>
                  </ul>
                </div>
                <div className="something-on-top">
                  Trending Locations
                  <ul>
                    <li>
                      <a className="as">Bhubaneshwar</a>
                    </li>
                    <li>
                      <a className="as">Hyderabad</a>
                    </li>
                    <li>
                      <a className="as">Chandigarh</a>
                    </li>
                    <li>
                      <a className="as">Nashik</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="something-on-top"
                  style={{ marginRight: "160px" }}
                >
                  About Us
                  <ul>
                    <li>
                      <a className="as">Tech@OLX</a>
                    </li>
                  </ul>
                </div>
                <div className="something-on-top">
                  Olx
                  <ul>
                    <li>
                      <a className="as">Blog</a>
                    </li>
                    <li>
                      <a className="as">Help</a>
                    </li>
                    <li>
                      <a className="as">Sitemap</a>
                    </li>
                    <li>
                      <a className="as">Legal & Privacy information</a>
                    </li>
                    <li>
                      <a className="as">
                        Vulnerability Disclosure Program
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="right-top">
                  <span>Follw Us</span>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <a>
                          <Facebook className="icon" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Instagram className="icon" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Twitter className="icon" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <Youtube className="icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right-bottom">
                  <a>
                    <picture>
                      <img
                        src="https://statics.olx.in/external/base/img/playstore.png"
                        alt=""
                      />
                    </picture>
                  </a>
                  <a>
                    <picture>
                      <img
                        src="https://statics.olx.in/external/base/img/appstore.png"
                        alt=""
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-top">
              <div style={{ borderRight: "1px solid white" }}>
                <picture>
                  <img
                    height={"96px"}
                    style={{ paddingRight: "48px" }}
                    src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
                    alt=""
                  />
                </picture>
              </div>
              <div className="footer-down-logos">
                <picture>
                  <img
                    src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
                    alt=""
                  />
                </picture>
              </div>
              <div className="footer-down-logos">
                <picture>
                  <img
                    src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
                    alt=""
                  />
                </picture>
              </div>
              <div className="footer-down-logos">
                <picture>
                  <img
                    src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
                    alt=""
                  />
                </picture>
              </div>
              <div className="footer-down-logos">
                <picture>
                  <img
                    src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
                    alt=""
                  />
                </picture>
              </div>
              <div className="footer-down-logos">
                <picture>
                  <img
                    src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="bottom-bottom">
              <div>Help - Sitemap</div>
              <div>All rights reserved © 2006-2024 OLX</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
  