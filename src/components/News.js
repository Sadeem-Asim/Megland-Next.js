import Link from "next/link";
const News = () => {
  return (
    <section id="news">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Latest Articles"
          data-align="center"
        >
          Latest Articles
        </h3>
        {/* News Shotcode */}
        <div className="fn_cs_news">
          <div className="news_part">
            <div className="left_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>01</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Dec 19, 2022 / CoinTelegraph</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://fr.cointelegraph.com/news/decentralization-in-gaming-interview-with-faheem-zafar-ceo-of-themegland">
                    <a target="_blank">Decentralization in gaming - Interview with Faheem Zafar</a>
                    </Link>
                  </h3>
                </div>
                <div className="image">
                  <Link href="https://fr.cointelegraph.com/news/decentralization-in-gaming-interview-with-faheem-zafar-ceo-of-themegland">
                    <a target="_blank">
                      <img src="/img/faheem.png" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="read_more">
                  <Link href="https://fr.cointelegraph.com/news/decentralization-in-gaming-interview-with-faheem-zafar-ceo-of-themegland">
                    <a target="_blank">
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="right_items">
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>02</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Dec 13, 2022 / CoinTribune</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://www.cointribune.com/themegland-la-nouvelle-etoile-du-gaming-dans-le-metaverse/">
                      <a target="_blank">TheMEGLAND, the new star of gaming in the metaverse</a>
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="https://www.cointribune.com/themegland-la-nouvelle-etoile-du-gaming-dans-le-metaverse/">
                    <a target="_blank">
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>03</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Dec 16, 2022 / CoinTribune</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://www.cointribune.com/interview-au-coeur-du-metaverse-gaming-avec-faheem-zafar-pdg-et-fondateur-de-themegland/?utm_source=Twitter&utm_medium=Social&utm_campaign=utm_cointribune_rs&utm_content=ap_a6yow41jsw">
                      <a target="_blank">Interview at the heart of metaverse gaming with Faheem Zafar, CEO of TheMEGLAND</a>
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="https://www.cointribune.com/interview-au-coeur-du-metaverse-gaming-avec-faheem-zafar-pdg-et-fondateur-de-themegland/?utm_source=Twitter&utm_medium=Social&utm_campaign=utm_cointribune_rs&utm_content=ap_a6yow41jsw">
                    <a target="_blank">
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="blog__item">
                <div className="counter">
                  <span className="cc">
                    <span>04</span>
                  </span>
                </div>
                <div className="meta">
                  <p>Dec 27, 2022 / Forbes</p>
                </div>
                <div className="title">
                  <h3>
                    <Link href="https://www.forbes.fr/technologie/adr-faheem-zafar-livre-les-ambitions-de-sa-plateforme-gaming-themegland-axee-sur-le-metaverse/">
                      <a target="_blank">Faheem Zafar reveals the ambitions of his metaverse-focused gaming platform TheMEGLAND</a>
                    </Link>
                  </h3>
                </div>
                <div className="read_more">
                  <Link href="https://www.forbes.fr/technologie/adr-faheem-zafar-livre-les-ambitions-de-sa-plateforme-gaming-themegland-axee-sur-le-metaverse/">
                    <a target="_blank">
                      <span>Read More</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bottom_part">
            <div className="left_bot">
              <Link href="/blog">
                <a className="metaportal_fn_button full">
                  <span>Read All Articles</span>
                </a>
              </Link>
            </div>
            <div className="right_bot">
              <p>
                We’re a team of creatives who are excited about unique ideas and
                create consectetur adipiscing elit. Etiam vitae purus a lectus
                semper.
              </p>
            </div>
          </div> */}
        </div>
        {/* !News Shotcode */}
      </div>
    </section>
  );
};
export default News;
