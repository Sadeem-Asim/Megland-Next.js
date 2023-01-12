/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../src/layout/Layout";
import { connect } from "react-redux";
import { walletToggle } from "../src/redux/actions/siteSettings";
import {
  useContractReads,
  useContractWrite,
  // usePrepareContractWrite,
} from "wagmi";
import contractAbi from "../src/assets/presale.json";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NftSingle = ({ account, contract, client, walletToggle }) => {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0.3);
  const [totalItems, setTotalItems] = useState(1486);
  const [remaining, setRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.3);
  const notify = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 1999,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  };
  const { data } = useContractReads({
    contracts: [
      {
        address: "0x7Bbd1C7E9f2FF558aB30110135341663576D3c13",
        abi: contractAbi,
        functionName: "round1Id",
      },
      {
        address: "0x7Bbd1C7E9f2FF558aB30110135341663576D3c13",
        abi: contractAbi,
        functionName: "round1EndId",
      },
    ],
  });
  // const { config } = usePrepareContractWrite({
  //   address: "0xaB9f90b67CEB0A2E6BBCf1abd72D4Fc8861287De",
  //   abi: contractAbi,
  //   functionName: "round1Buy",
  //   args: [amount],
  //   overrides: {
  //     from: account,
  //     value: ethers.utils
  //       .parseUnits((amount * price).toString(), "ether")
  //       .toString(),
  //   },
  // });
  // const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const { write, isError, isLoading, isSuccess } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: "0x7Bbd1C7E9f2FF558aB30110135341663576D3c13",
    chainId: 1,
    abi: contractAbi,
    functionName: "round1Buy",
    args: [amount],
    overrides: {
      from: account,
      value: ethers.utils
        .parseUnits((amount * price).toString(), "ether")
        .toString(),
    },
  });
  useEffect(() => {
    if (data) {
      console.log(data);
      setTotalPrice((amount * price).toFixed(1));
      let n = data[0].toString();
      setTotalItems(data[1].toString());
      setRemaining(n - 1);
    }
  }, [amount, price, data]);
  useEffect(() => {
    if (isError) {
      notify("Insufficient Funds");
    }
  }, [isError]);
  const increase = () => {
    if (amount < 9) {
      setAmount(amount + 1);
    }
  };
  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const mint = async () => {
    try {
      if (account) {
        write?.();
        // let price = amount * 0.3;
        // price = client.utils.toWei(price.toString(), "ether");
        // console.log(contract);
        // contract?.methods
        //   .round1Buy(amount)
        //   .send({
        //     from: account,
        //     value: price,
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      } else {
        walletToggle(true);
      }
    } catch (error) {
      console.log(error);
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
                <div className="img_in" data-bg-img="/img/GENESIS.png">
                  <img src="/img/1x1.jpg" alt="" style={{ padding: "10px" }} />
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
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/collection">
                    <a>Assets</a>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">Genesis LAND #1</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text="Genesis LAND #1"
                data-align="left"
              >
                Genesis LAND #1
              </h3>
              <div className="desc">
                <p>
                  • TheMEGLAND is a decentralized platform that unifies video
                  and crypto game enthusiasts on one innovative platform
                  <br></br>• A Metaverse universe where users can fight, build,
                  own, govern and monetize their gaming experiences in the
                  Ethereum blockchain through the $MEG, the platform's utility
                  token
                  <br></br>• Each player will be able to let their imagination
                  run wild, thanks to the ease of use and power of the 3 tools
                  at their disposal
                  <br></br>• Genesis LANDS are the rarest and are on sale only
                  at launch 🚀
                </p>
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a
                      href="https://opensea.io/collection/themegland"
                      // rel="noopener"
                      // target="_blank"
                    >
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
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
                      <h3>{price} ETH</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Genesis Left</h4>
                      <h3>
                        {remaining}/{totalItems}
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <div className="qnt">
                        <span className="decrease" onClick={decrease}>
                          -
                        </span>
                        <span className="summ">{amount}</span>
                        <span className="increase" onClick={increase}>
                          +
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        <span className="total_price">{totalPrice}</span> ETH +
                        GAS
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                <div style={{ display: "flex" }}>
                  <div
                    // href=""
                    style={{ cursor: "pointer" }}
                    className="metaportal_fn_button"
                    onClick={mint}
                  >
                    <span>Mint </span>
                  </div>
                </div>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_checked">
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
                    You need to pay a GAS fee during minting. We allow max 9
                    mints per wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* !Mint Box */}
          {/* NFT Categories */}

          {/* !Similar Items */}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  account: state.web3.account,
  contract: state.web3.contract,
  client: state.web3.client,
});
export default connect(mapStateToProps, { walletToggle })(NftSingle);
