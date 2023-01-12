import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../../src/layout/Layout";
import { getNfts, getSingleNft } from "../../src/redux/actions/nfts";
const Nft = ({ getSingleNft, nft, getNfts, nfts }) => {
  const router = useRouter();
  const { id } = router.query;
  const [similarItem, setSimilarItem] = useState([]);
  useEffect(() => {
    getSingleNft(id);
    getNfts();
  }, [id]);
  useEffect(() => {
    if (nfts && nft) {
      setSimilarItem(
        nfts.filter(
          (nft_) =>
            nft_.type === nft.type ||
            nft.special === nft_.special ||
            nft.clothing == nft_.clothing
        )
      );
    }
  }, [nfts]);

  const [quantity, setQuantity] = useState(nft ? nft.quantity : 0);

  const updateQuantity = (type) => {
    if (type == "+") {
      setQuantity((nft.quantity = nft.quantity + 1));
    } else {
      setQuantity((nft.quantity = nft.quantity == 1 ? 1 : nft.quantity - 1));
    }
  };

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div
                  className="img_in"
                  style={{ backgroundImage: `url(${nft && nft.image})` }}
                >
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <a href="https://twitter.com/TheMEGLAND">
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/the.megland/">
                      <img
                        src="/svg/social/facebook-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/themegland/">
                      <img
                        src="/svg/social/instagram-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <img
                        src="/svg/social/pinterest-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/behance-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  {/* <Link href="/collection"> */}
                    <a>Asset</a>
                  {/* </Link> */}
                  <span className="separator">/</span>
                  <span className="current">{nft && nft.title}</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text={nft && nft.title}
                data-align="left"
              >
                {nft && nft.title}
              </h3>
              <div className="desc">
                <p>
                • TheMEGLAND is a decentralized platform that unifies video and crypto game enthusiasts on one innovative platform
                <br></br>
                • A Metaverse universe where users can fight, build, own, govern and monetize their gaming experiences in the Ethereum blockchain through the $MEG, the platform's utility token
                <br></br>
                • Each player will be able to let their imagination run wild, thanks to the ease of use and power of the 3 tools at their disposal
                <br></br>
                • Genesis LANDS are the rarest and are on sale only at launch 🚀
               </p>
                
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/portal.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Public Mint is Live</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price</h4>
                      <h3>{nft && nft.price} ETH</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Remaining</h4>
                      <h3>344/999</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <div className="qnt">
                        <span
                          className="decrease"
                          onClick={() => updateQuantity("-")}
                        >
                          -
                        </span>
                        <span className="summ" data-price={nft && nft.quantity}>
                          {nft && nft.quantity}
                        </span>
                        <span
                          className="increase"
                          onClick={() => updateQuantity("+")}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        {nft && (
                          <span className="total_price">
                            {(Number(nft.price) * Number(nft.quantity)).toFixed(
                              2
                            )}
                          </span>
                        )}
                        ETH + GAS
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                >
                  <span>Mint Now</span>
                </a>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <a href="https://metac-assets.s3.us-east-1.amazonaws.com/TheMEGLAND_Conditions_g%C3%A9n%C3%A9rales_de_vente_du_Token_NFT_08.08.2022.pdf">Terms of Service</a>.
                </p>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_time">
                  <h4>Public Mint Ends In</h4>
                  {/* 
      There is two types of countdown: due_date (Due Date), ever (Evergreen timer)
       1. 	data-type="due_date"
        In this case you have to change value of data-date. For example:
        data-date="October 13, 2022 12:30:00"
        It will mean that mint will finished at this time

       2. 	data-type="ever"
        In this case you have to change values of data-days, data-hours, data-minutes and data-seconds. For example:
        data-days="34"
        data-hours="10"
        data-minutes="20"
        data-seconds="0"
        It will mean that the time expires after this time, but when the page is refreshed, the value will return again. It means, it won't end.
     */}
                  <h3
                    className="metaportal_fn_countdown"
                    data-type="ever"
                    data-date="October 13, 2022 12:30:00"
                    data-days={34}
                    data-hours={10}
                    data-minutes={20}
                    data-seconds={0}
                  >
                    0d: 0h: 0m: 0s
                  </h3>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Whitelist:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                  <p>
                    <span className="text">Presale:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                </div>
                <div className="mint_info">
                  <p>
                    You need to pay a GAS fee during minting. We allow max 5
                    mints per wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* !Mint Box */}
           
           
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  nft: state.nfts.nft,
  nfts: state.nfts.data,
});

export default connect(mapStateToProps, { getSingleNft, getNfts })(Nft);
