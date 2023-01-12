import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import {getSinglePartner , getPartners} from "../src/redux/actions/partners";
import partners from "../src/redux/reducer/partners";
const Partner = ({ partner, getSinglePartner, partners, getPartners }) => {


  return (
    <Layout pageTitle={"Partners"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small"> 
           
          {/* Similar Items */}
          <div className="metaportal_fn_similar metaportal_fn_top_160">
            <h3 className="fn__maintitle" data-text="Partners">
              Partners
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops partners_list">
              <ul className="grid">
                {/* {partners &&
                  similarItem.map(
                    (partner, i) =>
                    partner.id < 8 && (
                        <li key={partner.id}>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src={partner.image} alt="" />
                              <Link href={`/partner/${partner.id}`}>
                                <a className="full_link"></a>
                              </Link>
                            </div>
                            <div className="title_holder">
                              <h3 className="fn_title">
                                <a href="#">{partner.title}</a>
                              </h3>
                            </div>
                          </div>
                        </li>
                      )
                  )} */}
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/exclusible.png" alt="" />
                              <Link href="https://www.exclusible.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/icon2.png" alt="" />
                              <Link href="https://illumisrg.io/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/club.png" alt="" />
                              <Link href="https://www.winebottleclub.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/oaziz.png" alt="" />
                              <Link href="https://oaziz.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/blu.png" alt="" />
                              <Link href="http://www.bluefrogrobotics.com/fr/accueil">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/aar.png" alt="" />
                              <Link href="https://www.zero-code.io/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/yobike.png" alt="" />
                              <Link href="http://www.yobike.fr/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/hexa1.png" alt="" />
                              <Link href="https://metarents.io/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/metafight.png" alt="" />
                              <Link href="https://metafight.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/tokenomeme.png" alt="" />
                              <Link href="https://tokenomeme.wtf/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/log.png" alt="" />
                              <Link href="https://www.logixcoin.io/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/sota.png" alt="" />
                              <Link href="https://www.sotatek.com/?utm_source=linkedin&utm_medium=referral&utm_campaign=Linkedin">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/haish.png" alt="" />
                              <Link href="https://www.linkedin.com/company/the-hash/?originalSubdomain=pk">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/arg.png" alt="" />
                              <Link href="https://argonteq.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/meta-Engine.png" alt="" />
                              <Link href="https://www.metaengine.gg/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/wst.png" alt="" />
                              <Link href="https://twitter.com/Web3ST">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/nc.png" alt="" />
                              <Link href="https://www.instagram.com/nael_et_camelia/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/crypto.png" alt="" />
                              <Link href="https://twitter.com/CryptoTechDAO?s=20&t=us_Vs9c1kqrMgkRHJgj8Hw">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/icon.png" alt="" />
                              <Link href="https://twitter.com/Akira_OX004?s=20&t=us_Vs9c1kqrMgkRHJgj8Hw">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/groups.png" alt="" />
                              <Link href="https://www.youtube.com/watch?v=eLMxOCJDTsc&t=66s">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/ben.png" alt="" />
                              <Link href="https://www.youtube.com/watch?v=8eVp4GTs7NA&t=82s">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>   
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/mr.png" alt="" />
                              <Link href="https://www.youtube.com/watch?v=8eVp4GTs7NA&t=82s">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/mf.png" alt="" />
                              <Link href="https://www.francemeta.org/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/ccs.png" alt="" />
                              <Link href="https://www.cointribune.com/themegland-la-nouvelle-etoile-du-gaming-dans-le-metaverse/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/power.png" alt="" />
                              <Link href="https://fr.cointelegraph.com/news/decentralization-in-gaming-interview-with-faheem-zafar-ceo-of-themegland">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/FORBES.png" alt="" />
                              <Link href="https://www.forbes.fr/technologie/adr-faheem-zafar-livre-les-ambitions-de-sa-plateforme-gaming-themegland-axee-sur-le-metaverse/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/sta.png" alt="" />
                              <Link href="https://www.crossmint.io/?gclid=Cj0KCQiA5NSdBhDfARIsALzs2EAnT4U-07jjBRioOKzomD9lurg0hxjJClLwvAL8GgRC-3k9EmSJqlIaAolCEALw_wcB">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/+R.png" alt="" />
                              <Link href="https://earn.fr/">
                                <a className="full_link"></a>
                              </Link>
                            </div>
                            {/* <div className="title_holder">
                              <h3 className="fn_title">
                                <a href="#">Title</a>
                              </h3>
                            </div> */}
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/dkb.png" alt="" />
                              <Link href="https://www.dkb-legal.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/hasheo.png" alt="" />
                              <Link href="https://hashtagavocats.com/avocat-droit-des-societes/classement-cabinets-avocats/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/certik.png" alt="" />
                              <Link href="https://www.certik.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/eye.png" alt="" />
                              <Link href="https://opengem.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/mo.png" alt="" />
                              <Link href="https://metamask.io/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>  
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/cyb.png" alt="" />
                              <Link href="https://www.cybavo.com/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/Sanstitre.png" alt="" />
                              <Link href="https://www.mongodb.com/fr-fr">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>   
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/ethereum.png" alt="" />
                              <Link href="https://ethereum.org/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/polygon.png" alt="" />
                              <Link href="https://polygon.technology/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li>    
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/tron.png" alt="" />
                              <Link href="https://tron.network/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
                          </div>
                        </li> 
                        <li>
                          <div className="nft__item">
                            <div className="img_holder">
                              <img src="/img/bnb.png" alt="" />
                              <Link href="https://www.bnbchain.org/">
                                <a className="full_link"></a>
                              </Link>
                            </div> 
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
  partner: state.partners.partner,
  partners: state.partners.data,
});

export default connect(mapStateToProps, { getSinglePartner, getPartners })(Partner);
