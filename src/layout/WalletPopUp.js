/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
import { setAccount, setClient, setContract } from "../redux/actions/web3";
import { useConnect, useDisconnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const WalletPopUp = ({ walletToggle, wallet, account, setAccount, client }) => {
  const { isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
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
  useEffect(() => {
    if (window.ethereum) {
      // console.log(window.ethereum.providers);
      if (window.ethereum.providers) {
        const metamaskProvider = window.ethereum.providers.find(
          (provider) => provider.isMetaMask
        );
        const coinbaseProvider = window.ethereum.providers.find(
          (provider) => provider.isCoinbaseWallet
        );
        metamaskProvider?.on("accountsChanged", (accounts) => {
          setAccount(accounts[0]);
          console.log("account changed:", accounts);
        });
        coinbaseProvider?.on("accountsChanged", (accounts) => {
          setAccount(accounts[0]);
          console.log("account changed:", accounts);
        });
      } else {
        window.ethereum.on("accountsChanged", (accounts) => {
          setAccount(accounts[0]);
          console.log("account changed:", accounts);
        });
      }
    }
  }, [account]);
  const connectMetamask = async () => {
    if (window.ethereum) {
      let provider;
      if (window.ethereum.providers?.length >= 1) {
        provider = window.ethereum.providers.find(
          (provider) => provider.isMetaMask
        );
      } else {
        provider = window.ethereum;
      }
      if (provider) {
        client.setProvider(provider);
        if (isConnected) {
          await disconnectAsync();
        }

        const { account, chain } = await connectAsync({
          connector: new MetaMaskConnector({}),
        });
        console.log(account);
        setAccount(account);

        walletToggle(false);
      } else {
        notify("Install MetaMask Extension");
      }
    } else if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.open("https://metamask.app.link/dapp/themegland.io/");
    } else {
      notify("Install MetaMask Extension");
    }
  };

  const connectCoinBase = async () => {
    if (window.ethereum) {
      if (isConnected) {
        await disconnectAsync();
      }
      let provider;
      provider = window.ethereum.providers?.find(
        (provider) => provider.isCoinbaseWallet
      );
      if (provider) {
        client.setProvider(provider);
        const { account, chain } = await connectAsync({
          connector: new CoinbaseWalletConnector({}),
        });
        setAccount(account);
        walletToggle(false);
        return;
      } else if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        window.open("https://go.cb-w.com/dapp?cb_url=[https://themegland.io/]");
      } else {
        notify("Download Coinbase Extension");
      }
    } else {
      notify("Download Coinbase Extension");
    }
  };
  const connectWalletConnect = async () => {
    if (isConnected) {
      await disconnectAsync();
    }
    const { account, chain, provider } = await connectAsync({
      connector: new WalletConnectConnector({ options: { qrcode: true } }),
    });
    console.log(account);
    setAccount(account);
    console.log(provider);
    walletToggle(false);
  };
  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet_closer ${wallet ? "active" : ""}`}
        onClick={() => walletToggle(false)}
      />

      <div className={`metaportal_fn_walletbox ${wallet ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => walletToggle(false)}>
          <span />
        </a>
        <div className="walletbox">
          <div
            className="wallet"
            style={{
              margin: "0 auto",
              marginTop: "-50px",
              marginBottom: "50px",
            }}
          >
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
          <div className="title_holder">
            <h3>Connect Wallet</h3>
            <p>
              Connect with one of our available wallet providers or create a new
              one.
            </p>
          </div>
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div
                  className="item"
                  style={{ cursor: "pointer" }}
                  onClick={connectMetamask}
                >
                  <span className="icon">
                    <img src="/img/wallet/metamask.png" alt="" />
                  </span>
                  <span className="text">Metamask</span>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  style={{ cursor: "pointer" }}
                  onClick={connectCoinBase}
                >
                  <span className="icon">
                    <img src="/img/wallet/coinbase.png" alt="" />
                  </span>
                  <span className="text">Coinbase</span>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  style={{ cursor: "pointer" }}
                  onClick={connectWalletConnect}
                >
                  <span className="icon">
                    <img src="/img/wallet/walletconnect.png" alt="" />
                  </span>
                  <span className="text">WalletConnect</span>
                </div>
              </li>
            </ul>
          </div>
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
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.site.wallet,
  account: state.web3.account,
  client: state.web3.client,
});

export default connect(mapStateToProps, {
  walletToggle,
  setAccount,
  setClient,
  setContract,
})(WalletPopUp);
