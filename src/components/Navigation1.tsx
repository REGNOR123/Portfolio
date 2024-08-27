import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./Navigation1.css";

const Navigation1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrontEndSkillsTextClick = useCallback(() => {
    navigate("/frontend");
  }, [navigate]);

  const onBackEndSkillsTextClick = useCallback(() => {
    navigate("/backend");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className={`navigation ${className}`}>
      <header className="navigation-inner">
        <div className="navigation-element-parent">
          <div className="navigation-element">
            <div className="logo3" onClick={onLogoContainerClick}>
              <div className="logo-inner" />
              <a className="akr4">Akr</a>
            </div>
          </div>
          <nav className="skills2">
            <div className="skills-labels3">
              <a className="home5" onClick={onLogoContainerClick}>
                Home
              </a>
            </div>
            <div className="skills-labels4">
              <a
                className="front-end-skills9"
                onClick={onFrontEndSkillsTextClick}
              >
                <p className="front-end-skills10">Front-end skills</p>
              </a>
            </div>
            <div className="skills-labels5">
              <a
                className="front-end-skills9"
                onClick={onBackEndSkillsTextClick}
              >
                <p className="front-end-skills10">Back-end skills</p>
              </a>
            </div>
            <a className="contact7" onClick={onContactTextClick}>
              Contact
            </a>
          </nav>
        </div>
      </header>
      <GroupComponent frontEndSkills="About" />
    </section>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
