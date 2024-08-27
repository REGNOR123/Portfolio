import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import "./FrontEnd.css";

const FrontEnd = () => {
  return (
    <div className="front-end">
      <FrameComponent1 />
      <footer className="front-end-inner">
        <div className="frame-div">
          <div className="frame-wrapper1">
            <div className="frame-parent1">
              <div className="frame-wrapper2">
                <div className="co-dlm-parent">
                  <h3 className="co-dlm">Co dělám ?</h3>
                  <div className="line-container">
                    <div className="line-div" />
                    <div className="frame-child2" />
                  </div>
                </div>
              </div>
              <div className="frame-parent2">
                <div className="frame-wrapper3">
                  <GroupComponent1
                    image14="/image-14@2x.png"
                    uIUXDesign="UI / UX Design"
                  />
                </div>
                <GroupComponent1
                  propFlex="unset"
                  propAlignSelf="stretch"
                  image14="/image-15@2x.png"
                  propHeight="53px"
                  propWidth="56px"
                  propWidth1="295px"
                  uIUXDesign="HTML, CSS, JavaScript"
                />
                <div className="image-16-parent">
                  <img
                    className="image-16-icon"
                    loading="lazy"
                    alt=""
                    src="/image-16@2x.png"
                  />
                  <div className="frame-wrapper4">
                    <div className="sass-green-sock-react-parent">
                      <b className="sass-green-sock-container">
                        <p className="sass-green">Sass, Green Sock, React</p>
                      </b>
                      <div className="je-obecn-znmou-container">
                        <p className="je-obecn-znmou">
                          Je obecně známou věcí, že člověk bývá při zkoumání
                          grafického návrhu rozptylován okolním textem, pokud mu
                          dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit
                          klasický smysluplný text vhodnou bezvýznamovou
                          alternativou
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </footer>
      <div className="a-journey-of-knowledge-and-gro-parent">
        <div className="a-journey-of-knowledge-and-gro" />
        <div className="social-media-content-wrapper">
          <div className="social-media-content">
            <div className="social-media-icons">
              <div className="facebook2">
                <p className="je-obecn-znmou">{`Facebook `}</p>
              </div>
              <div className="instagram1">Instagram</div>
              <a className="youtube1">Youtube</a>
            </div>
            <div className="all-right-reserved-frame">
              <div className="all-right-reserved-container1">
                <p className="je-obecn-znmou">© 2022 All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
