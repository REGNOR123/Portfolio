import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBackEndSkillsTextClick = useCallback(() => {
    navigate("/backend");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className={`frame-parent3 ${className}`}>
      <header className="frame-header">
        <div className="logo-parent">
          <div className="logo2" onClick={onLogoContainerClick}>
            <div className="logo-item" />
            <a className="akr2">Akr</a>
          </div>
          <nav className="frame-nav">
            <nav className="frame-parent4">
              <div className="home-wrapper">
                <a className="home3" onClick={onLogoContainerClick}>
                  Home
                </a>
              </div>
              <div className="front-end-skills-container">
                <a className="front-end-skills5">
                  <p className="front-end-skills6">Front-end skills</p>
                </a>
              </div>
              <div className="back-end-skills-wrapper">
                <a
                  className="back-end-skills4"
                  onClick={onBackEndSkillsTextClick}
                >
                  <p className="front-end-skills6">Back-end skills</p>
                </a>
              </div>
              <a className="contact5" onClick={onContactTextClick}>
                Contact
              </a>
            </nav>
          </nav>
        </div>
      </header>
      <GroupComponent frontEndSkills="Front-end skills" />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
