import Link from "next/link";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
                TheMEGLAND © 2022. All rights reserved
              {/* <a
                href="https://themeforest.net/user/frenify/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Frenify
              </a> */}
            </p>
          </div>
          <div className="right_part">
            <ul>
              {/* <li>
                <Link href="/policy">
                  <a className="creative_link">Newsletter</a>
                </Link>
              </li>  */}
              <li>
                <Link href="https://metac-assets.s3.us-east-1.amazonaws.com/TheMEGLAND_Conditions_g%C3%A9n%C3%A9rales_de_vente_du_Token_NFT_08.08.2022.pdf">
                  <a className="creative_link">Terms &amp; Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
