import React from "react";
import Button from "../../../typography/Button";

const Contribute = () => {
  return (
    <div>
      {/* <!-- Start contribute area --> */}
      <section className="contribute-area section-gap">
        <div className="contribute-box">
          {/* <!-- single box --> */}
          <div className="contribute-single-box">
            <div className="contribute-aricle">
              <div className="sp">
                <h3>Their lives depend on your donation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, illo ipsum. Laboriosam, tenetur dignissimos
                  debitis ducimus aliquid consequuntur error inventore?
                </p>
                <Button>How to Contribute?</Button>
              </div>
            </div>
            <div className="contribute-images"></div>
          </div>

          {/* <!-- single box 2 --> */}
          <div className="contribute-single-box">
            <div className="contribute-imagesTwo"></div>
            <div className="contribute-aricle">
              <div className="sp">
                <h3>They need us to suvive</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, illo ipsum. Laboriosam, tenetur dignissimos
                  debitis ducimus aliquid consequuntur error inventore?
                </p>
                <Button>How to Contribute?</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of contribute area --> */}
    </div>
  );
};

export default Contribute;
