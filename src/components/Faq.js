import { useState } from "react";

const Faq = () => {
  const faqs1 = [
    {
      title: "WHAT IS TheMEGLAND?",
      dec: "TheMEGLAND is a decentralized platform that unifies video game and crypto game enthusiasts on one innovative platform.",
    },
    {
      title: "HOW DO I STAY UPDATED AND SAFE?",
      dec: "A utility collection of 1,789 LANDS developed by TheMEGLAND. Distributed in two rounds, the first of which began on 20 December 2022.",
    },
    {
      title: "HOW CAN I MINT MY LAND?",
      dec: "You can safely MINT your LAND on TheMEGLAND website, if you don't use metamask you can always import your second wallet on metamask.",
    },
  ];
  const faqs2 = [
    {
      title: "WHAT ABOUT BLOCKCHAIN?",
      dec: "Our metaverse TheMEGLAND and all its ERC tokens are developed on the Ethereum Blockchain including the $MEG token.",
    },
    {
      title: "WHAT IS THE UTILITY OF THE LAND?",
      dec: "If you have several utilities on the LANDS of TheMEGLAND, please visit the (utility-of-nft-land) channel on our Discord server.",
    },
    {
      title: "HOW MANY LANDS ARE ISSUED?",
      dec: "TheMEGLAND's map has a limited number of LANDS which increases its rarity, we will issue the 178,929 LANDS over 5 years.",
    },
    // {
    //   title: "WHEN IS THE SALE DATE?",
    //   dec: "",
    // },
    // {
    //   title: "WHAT ABOUT BLOCKCHAIN?",
    //   dec: "",
    // },
  ];
  const [active, setActive] = useState(`a0`);
  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 className="fn__maintitle" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section id="faq">
      <div className="container">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <h3 className="fn__maintitle" data-text="FAQ">
              FAQ
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <h4>
              We answer all your most frequently asked questions :
              </h4>
              {/* <p>
                Nunc nec sollicitudin elit, ut pretium dui. Nulla facilisis
                pulvinar odio ac suscipit. Quisque pretium, est id facilisis
                luctus, magna lorem posuere velit.
              </p> */}
            </div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
