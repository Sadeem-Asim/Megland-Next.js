import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          <div className="social_trigger">
            {/* <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div> */}
            <div className="social">
              <ul>
              <li>
            <a
              href="https://t.me/TheMEGLAND"
              target="_blank"
              rel="noreferrer"
            >
              Tg.
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TheMEGLAND" target="_blank" rel="noreferrer">
              Tw.
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/themegland/"
              target="_blank"
              rel="noreferrer"
            >
              In.
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/themegland"
              target="_blank"
              rel="noreferrer"
            >
              Ln.
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/QtyxpzUfNX"
              target="_blank"
              rel="noreferrer"
            >
              Dc.
            </a>
          </li>
         
              </ul>
            </div>
          </div>
          <div className="wallet">
            <a
              href="#"
              className="metaportal_fn_button wallet_opener"
              onClick={() => walletToggle(true)}
            >
              <span>Wallet</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/Logo_website.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
          <li>
                <Link href="/#home">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/mint">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Mint</span>
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/#collection">
                  <a className="creative_link">Our Assets</a>
                </Link>
              </li>
              <li>
                <Link href="/#faq">
                  <a className="creative_link">Faq</a>
                </Link>
              </li> */}
              <li>
                <Link href="/#raadmap">
                  <a className="creative_link">Road Map</a>
                </Link>
              </li>
              <li>
                <Link href="/#news">
                  <a className="creative_link">Articles</a>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Partners</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Team</span>
                  </a>
                </Link>
              </li> 
              <li>
                <Link href="/whitepaper">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Whitpaper</span>
                  </a>
                </Link>
              </li>
              
              <li>
                <Link href="/#contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
