import Navigation1 from "../components/Navigation1";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Navigation1 />
      <div className="about-child" />
      <div className="footer2">
        <div className="footer-child" />
        <div className="social">
          <footer className="social-icons1">
            <div className="platform-icons">
              <div className="facebook6">
                <p className="facebook7">{`Facebook `}</p>
              </div>
              <a className="instagram3">Instagram</a>
              <a className="youtube3">Youtube</a>
            </div>
            <div className="copyright1">
              <div className="all-right-reserved-container3">
                <p className="facebook7">© 2022 All Right Reserved</p>
                <p className="facebook7">&nbsp;</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
