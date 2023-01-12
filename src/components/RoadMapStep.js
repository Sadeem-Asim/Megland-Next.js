import { Swiper, SwiperSlide } from "swiper/react";
import { roadMapProps } from "../sliderProps";
const RoadMapSlider = () => {
  return (
    <section id="roadmap">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="RoadMap"
          data-align="center"
        >
          RoadMap
        </h3>

        {/* Updated Roadmap Start */}
        <div className="timeline-centered timeline-sm">
              <article className="timeline-entry">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2020</span><span></span>

                  </time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label"><h4 className="timeline-title"> Q3 2020</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Creation -</b>  Creation of TheMEGLAND project.
                        </li>
                        <li>
                        <b>  White Paper -</b> Starting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2021</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet"><h4 className="timeline-title">Q1 2021</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Development -</b> Collaboration with video game studios.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2021</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label">
                    <h4 className="timeline-title">Q4 2021</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>WhitePaper - </b> Ongoing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner ">
                  <time datetime="2014-01-09T13:22" className="timeline-time"><span>2022</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">Q1 2022</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                         <b> Team - </b>Beginning of the recruitment of the MEG team.
                        </li>
                        <li>
                          <b>Community - </b> Launching and growing a community that shares our vision.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">
                  <time datetime="2014-01-09T13:22" className="timeline-time"><span>2022</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">

                    <h4 className="timeline-title">Q2 2022</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Startup -</b> Official launch of the startup and the Metaverse TheMEGLAND.
                        </li>
                        <li>
                         <b> Partnerships -</b> Formalization of pre-partnerships. Multiple resources spread around the world with a global community.
                        </li>
                        <li>
                         <b> Pre-seed -</b> Fund raising in pre-seed.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </article>
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2022</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">Q3 2022</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        
                        <li>
                          <b> Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>  NFT presale -</b> NFTs sold in presale.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">
                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2022</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">October 2022</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        
                        <li>
                          <b> Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b> Team-</b> Recruitment of the MEG team in progres
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </article>
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2022</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">November 2022</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        
                        <li>
                          <b> Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b> Audit-</b> Audit of the NFT smart contract by OpenGem in progress.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">
                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2022</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">December 2022</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        
                        <li>
                          <b> DeFi -</b> Introduce DeFi and Staking mechanisms.
                        </li>
                        <li>
                          <b> Audit-</b> Audit of the NFT smart contract by OpenGem completed.
                        </li>
                        <li>
                          <b> LAND presale-</b> LAND presale, Round A: in December, Round B: in January.
                        </li>
                        <li>
                          <b> AMF visa-</b> Submission of file concerning the visa application to the AMF.
                        </li>
                        <li>
                          <b> Public Dashboard-</b> The public version of the dashboard will be published. Users can start registering their accounts and browse amazing content.
                        </li>
                        <li>
                          <b> Partnerships-</b> New partners with new IPs to come.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </article>

              
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">January 2023 </h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                      
                        <li>
                          <b>Smart contracts -</b>Smart contracts available on Github, Upbit and Bithumb, among others.
                        </li>
                        <li>
                          <b>Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>Carbon Footprint -</b>Commitment to a series of initiatives to reduce the carbon footprint of TheMEGLAND platform.
                        </li>
                        <li>
                          <b>Marketplace -</b> $MEG / NFT purchases, P2P sales, art sales.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              <article className="timeline-entry">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">February 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                      <li>
                          <b>Initial Exchange Offering, IEO -</b>Opening of the IEO, launch of the MEG token.
                        </li>
                        <li>
                          <b>Listing-</b> Listing on different exchanges.
                        </li>
                        <li>
                          <b>LAND presale -</b> LAND presale round, Round 2: 3% of the total offer
                        </li>
                        <li>
                          <b>UGC - </b>Multi-chain solution on MATIC, BNB chain, TRON and total opening of the market place for UGC.
                        </li>
                        <li>
                          <b>MegEdit -</b> Download and creation possible with MegEdit.
                        </li>
                        <li>
                          <b>Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>Events -</b> Art galleries, virtual concerts and many other events in the metaverse.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">March 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>MegEdit -</b> MegEdit Alpha version launched, users will also be able to export assets to the market and save them on the blockchain
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>
              </article>


              <article className="timeline-entry ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">April 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>Game Maker - </b>Private version of Game Maker for a few early testers.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">May 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>PLAND presale -</b>LAND presale round, Round 3: 4 series for 5% of the total supply over 6 weeks.
                        </li>
                        <li>
                          <b>Partnerships - </b>New partners with new IPs to come.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">June 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Play-to-earn -</b>Early Play-to-Earn Alpha Seasons and Online Explorers Alpha Season.
                        </li>
                        <li>
                          <b>Partnerships - </b>New partners with new IPs to come.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">July 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>LAND presale -</b>LAND presale round, Round 4: in 4 series for 5% of the total offer over 6 weeks.
                        </li>
                        <li>
                          <b>Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>Metaverse -</b> Gradual opening of the Metaverse to LAND owners who have built quality experiences.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">August 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Game Maker -</b>Public release of Game Maker Alpha.
                        </li>
                        <li>
                          <b>Partnerships - </b>New partners with new IPs to come.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned ">
                <div className="timeline-entry-inner">
                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>

                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">September 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>LAND presale -</b>LAND presale round, Round 5: in 4 series for 7% of the total offer over 6 weeks.
                        </li>
                        <li>
                          <b>Partnerships -</b> New partners with new IPs to come.
                        </li>
                        <li>
                          <b>MegEdit -</b>  Official version 1.0.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">October 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b> TML Public Alpha -</b> Launch of the public TML Alpha version, the games platform, with dozens of games available to play (supported by the Foundation).
                        </li>
                        <li>
                          <b>Partnerships - </b>New partners with new IPs to come.
                        </li>
                        <li>
                          <b>Events -  </b>Launch of the first season event with play-to-earn mechanics.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">November 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Multiplayer -  </b> Socialize, chat and interact with friends in TheMEGLAND hubs.
                        </li>
                        <li>
                          <b>Season -  </b>Public launch of the multiplayer season.
                        </li>
                        <li>
                          <b>Partnerships - </b>New partners with new IPs to come.
                        </li>
                      


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">

                    <time datetime="2014-01-09T13:22" className="timeline-time"><span>2023</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <h4 className="timeline-title">December 2023</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Franchise - </b> Launch of TheMEGLAND franchise on iOS, Android and Steam.
                        </li>
                        <li>
                          <b>Partnerships - </b>New partners with new IPs to come.
                        </li>
                        <li>
                          <b>LAND Public Sale - </b>Regular LAND sales and support for Game Maker.
                        </li>


                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2024</span><span></span>

                  </time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label"><h4 className="timeline-title"> Q1 2024</h4>
                    <div className="roadmap_block">
                      <ul className="roadmap_list">
                        <li>
                          <b>Game Maker -</b> Alpha 1.0 version with realistic 3D game packages, Behaviors and visual script.
                        </li>
                        <li>
                          <b>Foundation -</b> Launched a DAO with staking and voting mechanisms for $MEG, AVATAR and LAND owners.
                        </li>
                        <li>
                          <b>Multi-platform -</b> Availability of the game on PC, smartphones and tablets.
                        </li>
                        <li>
                          <b>Multiplayer - </b> One of the first user-generated games with realistic 3D NFT multiplayer modes.
                        </li>
                         
                        <li>
                          <b>MEG Token -</b> Development of staking mechanisms for yield generation and retention to increase asset scarcity.
                        </li>
                        <li>
                          <b>LAND Public Sale -</b>Regular LANDS sales will continue.
                        </li>
                        <li>
                          <b>Events -</b> Additional seasons with big rewards to win before the arrival of the official version.
                        </li>
                        <li>
                          <b>Partnerships -</b>  New partners with new IPs to come.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry ">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2025</span><span></span></time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label bg-violet">
                    <div className="roadmap_block">
                    <ul className="roadmap_list">
                        <li>
                          <b>TML -</b> Official game version 1.0 and major updates.
                        </li>
                        <li>
                          <b>Game Maker -</b> Official Version 1.0.  creating games with friends, custom scripting with 2nd layer programming, and major updates with more game packages and behaviors. Our philosophy is to rely on user feedback so that our products meet the needs and preferences of the market as much as possible.
                        </li>
                        <li>
                          <b>Jobs- </b>  Thousands of jobs will be created by TheMEGLAND platform.
                        </li>
                         
                        <li>
                          <b>Cross-platform -</b> Availability of the game on console and Web3 console..
                        </li>
                        <li>
                          <b>Games platform -</b> Over 2,500 games available.
                        </li>
                        <li>
                          <b>Events -</b> Additional seasons with big rewards to win before the arrival of the official version.
                        </li>
                        <li>
                          <b>Partnerships -</b>  New partners with new IPs to come.
                        </li>
                        <li>
                          <b>LANDS Public Sale -</b>Regular LANDS sales will continue.
                        </li>
                      
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                  <time className="timeline-time"><span>2026</span><span></span>

                  </time>
                  <div className="timeline-icon bg-violet"></div>
                  <div className="timeline-label">
                    <div className="roadmap_block">
                    <ul className="roadmap_list">
                        <li>
                          <b>TML -</b> Gaming platform with over 5,000 games available.
                        </li>
                        <li>
                          <b>Game Maker -</b>  Major updates to game packages and added behaviors.
                        </li>
                        <li>
                          <b>DAO - </b> TheMEGLAND DAO allows you to participate in major decisions on the Game Platform.
                        </li>
                        <li>
                          <b>Partnerships -</b>  New partners with new IPs to come.
                        </li>
                        <li>
                          <b>Events -</b>  Additional seasons with rewards up for grabs.
                        </li>
                        <li>
                          <b>MEG platform -</b> Launch of the METAC ENGINE GAMES platform, start of a new project to bring together a community including developers, gamers and even architects.
                        </li>
                         
                        <li>
                          <b>Blockchain MEG -</b> We plan to develop a blockchain in order to create a MEG cryptocurrency, the holders of MEG tokens will then legally become partners of TheMEGLAND company.
                        </li>
                        <li>
                          <b>MEG advantages - </b>The Metac Engine Games platform will give the advantage of creating your own games, architectures thanks to the new language of the MEG engine which will be called MEG-ENGINE.
                        </li>
                        <li>
                          <b>MEG Store -</b> The MEG Store is available.
                        </li>
                        <li>
                          <b>MEG Engine -</b> New coding language.
                        </li>
                        
                       
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="timeline-entry-inner">
                                <div className="inner_entery" className="timeline-icon bg-violet"></div>
                        </div> */}
              </article>
            </div>
        {/* Updated Roadmap End */}

        {/* <div className="fn_cs_roadmap">
          <div className="step_holder">
            <div className="step_in" />
          </div>
          <div className="slider_holder">
            <Swiper {...roadMapProps} className="swiper-container">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 01</span>
                    <div className="item_in">
                      <p className="date">October 09, 2022</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 02</span>
                    <div className="item_in">
                      <p className="date">October 17, 2022</p>
                      <h3 className="title">New Set #12 is Coming Up</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 03</span>
                    <div className="item_in">
                      <p className="date">October 28, 2022</p>
                      <h3 className="title">Metaverse 3.0 Launch</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 04</span>
                    <div className="item_in">
                      <p className="date">November 11, 2022</p>
                      <h3 className="title">Female Set #20 is Coming Up</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 05</span>
                    <div className="item_in">
                      <p className="date">November 23, 2022</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 06</span>
                    <div className="item_in">
                      <p className="date">December 02, 2022</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 07</span>
                    <div className="item_in">
                      <p className="date">January 14, 2023</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 08</span>
                    <div className="item_in">
                      <p className="date">January 28, 2023</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <span className="icon" />
                    <span className="phase">Phase 09</span>
                    <div className="item_in">
                      <p className="date">February 12, 2023</p>
                      <h3 className="title">Mini Game Lounch For Community</h3>
                      <p className="desc">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default RoadMapSlider;
