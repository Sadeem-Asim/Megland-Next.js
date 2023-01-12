/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import { getNfts, getSingleNft } from "../src/redux/actions/nfts";
const Team = ({ getSingleNft, nft, getNfts, nfts }) => {
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
    <Layout pageTitle={"Team"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Similar Items */}
          <div className="metaportal_fn_similar metaportal_fn_top_160">
            <h3 className="fn__maintitle" data-text="Team">
              Team
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/Faheem.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Faheem Zafar</h6>
                      <p className="font_paragraph">CEO</p>
                    </div>
                    <a
                      href="https://twitter.com/FaheemZFR_?t=m25mgGQKZpvSUL4nnGJBKQ&s=09"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/faheem--z--"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/blockchain.jpg" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Mudassir Iqbal</h6>
                      <p className="font_paragraph">BlockChain Developer</p>
                    </div>
                    <a
                      href="https://twitter.com/mudasriqbal?t=ygzHSo7l5MiqSHjq9Q9zwg&s=09"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/mudaseriqbal"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/tarik.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Tarik Abrekouz</h6>
                      <p className="font_paragraph">Partnerships Coordinator</p>
                    </div>
                    <a
                      href="https://twitter.com/TarekABREKOUZ?t=xW1RPLtUDgWOv-rYJNHclQ&s=09"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/tarik-abrekouz-6b0ba513b"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/mariem.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Mariem Azaiez</h6>
                      <p className="font_paragraph">Game Developer</p>
                    </div>
                    <a
                      href="https://twitter.com/mariemazaiez318?t=03Zn5j_p3m3VnJLUfe1jfA&s=09"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/mariem-azaiez-874a30244"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/hamza.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Hamza Khalid</h6>
                      <p className="font_paragraph">Community Manager</p>
                    </div>
                    <a
                      href="https://twitter.com/_Crypto_Curran "
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/cryptocurran143"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/Sofian.jpg" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Sofiane Aliane</h6>
                      <p className="font_paragraph">3D Designer</p>
                    </div>
                    <a
                      href="https://twitter.com/@Alianesofiane3"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/sofiane-aliane-b5389a243"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/yac.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Yacine Megherbi</h6>
                      <p className="font_paragraph">Game Designer</p>
                    </div>
                    <a
                      href="https://twitter.com/MeggyMeggy18?t=Vaq5HALrNDsh4twdmYEHNQ&s=09"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/yacine-megherbi-bab1b11b6"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/Furqan.jpg" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Furqan Warraich</h6>
                      <p className="font_paragraph">Advisor</p>
                    </div>
                    <a
                      href="https://twitter.com/@Furqan_W14"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/furqan-warraich-3375261aa/"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/nancy.jpeg" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Nancy V. G.</h6>
                      <p className="font_paragraph">Advisor</p>
                    </div>
                    <a
                      href="https://twitter.com/Nancy_VGG"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/nancygomez/"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                {/* <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/Lefort.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Claryss Lefort</h6>
                      <p className="font_paragraph">Advisor</p>
                    </div>
                    <a
                      href="https://twitter.com/@ClaryssLefort"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/claryss-lefort/"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li> */}
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/dp.jpg" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Thom Vallegeas</h6>
                      <p className="font_paragraph">Advisor</p>
                    </div>
                    <a
                      href="https://twitter.com/THomVal1?t=EX_VqxNsbnMjQ4S_sbW-eg&s=09"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/thom-vallegeas-186b0461"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nft__item team_members">
                    <div className="img_holder">
                      <img src="img/team/Laurent.png" alt="" />
                    </div>
                    <div className="title_holder ">
                      <h6 className="title_head">Laurent Perello</h6>
                      <p className="font_paragraph">Advisor</p>
                    </div>
                    <a
                      href="https://twitter.com/perellolaurent?s=11&t=_ygFkp8uyoKMSBqtPoWgdw"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      href="https://www.linkedin.com/in/perello-laurent/"
                      className="font_atag"
                    >
                      <img
                        src="/svg/social/linkedin-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  nft: state.nfts.nft,
  nfts: state.nfts.data,
});

export default connect(mapStateToProps, { getSingleNft, getNfts })(Team);
