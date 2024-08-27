import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

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
    <header className={`main1 ${className}`}>
      <div className="content1">
        <nav className="skills1">
          <div className="skill-list">
            <a className="home4">Home</a>
          </div>
          <div className="skill-list1">
            <a
              className="front-end-skills7"
              onClick={onFrontEndSkillsTextClick}
            >
              <p className="front-end-skills8">Front-end skills</p>
            </a>
          </div>
          <div className="skill-list2">
            <a className="front-end-skills7" onClick={onBackEndSkillsTextClick}>
              <p className="front-end-skills8">Back-end skills</p>
            </a>
          </div>
          <a className="contact6" onClick={onContactTextClick}>
            Contact
          </a>
        </nav>
        <div className="content-child" />
        <a className="akr3">Akr</a>
      </div>
    </header>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
