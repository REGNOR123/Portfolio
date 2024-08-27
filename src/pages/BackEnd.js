import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import BackendContent from "../components/BackendContent";
import "./BackEnd.css";

const BackEnd = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrontEndSkillsTextClick = useCallback(() => {
    navigate("/frontend");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="back-end">
      <footer className="main">
        <header className="content">
          <div className="skills">
            <div className="logo1" onClick={onLogoContainerClick}>
              <div className="logo-shape" />
              <a className="akr1">Akr</a>
            </div>
            <nav className="skills-container-wrapper">
              <nav className="skills-container3">
                <div className="skills-labels">
                  <a className="home2" onClick={onLogoContainerClick}>
                    Home
                  </a>
                </div>
                <div className="skills-labels1">
                  <a
                    className="front-end-skills2"
                    onClick={onFrontEndSkillsTextClick}
                  >
                    <p className="front-end-skills3">Front-end skills</p>
                  </a>
                </div>
                <div className="skills-labels2">
                  <a className="back-end-skills2">
                    <p className="front-end-skills3">Back-end skills</p>
                  </a>
                </div>
                <a className="contact4" onClick={onContactTextClick}>
                  Contact
                </a>
              </nav>
            </nav>
          </div>
        </header>
        <section className="frame-section">
          <GroupComponent frontEndSkills="Back-end skills" />
          <BackendContent />
        </section>
      </footer>
      <div className="back-end-child" />
      <div className="back-end-item" />
      <div className="back-end-inner" />
      <div className="back-end-child" />
      <div className="back-end-item" />
      <div className="back-end-inner" />
      <div className="footer3">
        <div className="footer-item" />
        <div className="social-container">
          <div className="social-icons-parent">
            <div className="social-icons2">
              <div className="facebook8">
                <p className="front-end-skills3">{`Facebook `}</p>
              </div>
              <div className="instagram4">Instagram</div>
              <div className="youtube4">Youtube</div>
            </div>
            <div className="copyright2">
              <div className="all-right-reserved-container4">
                <p className="front-end-skills3">© 2022 All Right Reserved</p>
                <p className="front-end-skills3">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
