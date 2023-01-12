import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { setClient, setContract } from "../redux/actions/web3";
import { stickyNav } from "../utilits";
import Web3 from "web3";
import contractAbi from "./../assets/presale.json";
const Header = ({
  walletToggle,
  navigationToggle,
  account,
  setClient,
  setContract,
}) => {
  useEffect(() => {
    stickyNav();
    integrateWeb3();
  }, []);

  const integrateWeb3 = async () => {
    const contractAddress = "0xaB9f90b67CEB0A2E6BBCf1abd72D4Fc8861287De";
    const web3 = new Web3(Web3.givenProvider || Web3.currentProvider);
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    setClient(web3);
    setContract(contract);
  };
  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            {/* <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div> */}
            <div className="logo main_logo">
              <Link href="/">
                <a>
                  <img src="/img/Logo_website.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/#home">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/collection">
                  <a className="creative_link">Our Assets</a>
                </Link>
              </li> */}
              <li>
                <Link href="/mint">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Mint</span>
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/#faq">
                  <a className="creative_link">Faq</a>
                </Link>
              </li> */}
              <li>
                <Link href="/#roadmap">
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
          <div className="wallet">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                walletToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>
                {account
                  ? `${account.substring(0, 10)}...${account.substring(
                      35,
                      account.length - 1
                    )}`
                  : "Connect To Wallet"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  account: state.web3.account,
});

export default connect(mapStateToProps, {
  walletToggle,
  navigationToggle,
  setClient,
  setContract,
})(Header);
