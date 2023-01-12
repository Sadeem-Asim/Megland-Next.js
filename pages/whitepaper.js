import { connect } from "react-redux";
import Layout from "../src/layout/Layout";
import Link from "next/link"; 
const Whitepaper = ( ) => { 

  return (
    <Layout pageTitle={"Whitepaper"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">

          {/* Similar Items */}
          <div className="metaportal_fn_similar metaportal_fn_top_160">
            <h3 className="fn__maintitle" data-text="Whitepaper">
              Whitepaper
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
            <div className="metaportal_fn_collection">
            {/* Filters */}

            {/* !Filters */}
            <div className=""> 
              {/* Result List */}
              <div className="metaportal_fn_result_list">
                <div className="metaportal_fn_drops">
                  <ul className="grid"> 
                    <li>
                      <div className="nft__item">
                        <div className="img_holder">
                          <img src="/img/English.png" alt="" />
                          <Link href="https://metac-assets.s3.amazonaws.com/EN-Whitepaper+TheMEGLAND+v1.pdf"  >
                            <a  target="_blank" className="full_link" />
                          </Link>
                        </div>
                        {/* <div className="title_holder">
                          <h3 className="fn_title">
                            <Link href={`/nft/${nft.id}`}>{nft.title}</Link>
                          </h3>
                        </div> */}
                      </div>
                    </li> 
                    <li>
                      <div className="nft__item">
                        <div className="img_holder">
                          <img src="/img/French.png" alt="" />
                          <Link href="https://metac-assets.s3.amazonaws.com/FR-Whatepaper+TheMEGLAND+v1.pdf">
                            <a  target="_blank" className="full_link" />
                          </Link>
                        </div>
                        {/* <div className="title_holder">
                          <h3 className="fn_title">
                            <Link href={`/nft/${nft.id}`}>{nft.title}</Link>
                          </h3>
                        </div> */}
                      </div>
                    </li> 
                  </ul>
                </div>
              </div>
              {/* !Result List */}
            </div>
          </div>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};
 

export default connect( )(Whitepaper);
