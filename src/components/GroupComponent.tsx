import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "", frontEndSkills }) => {
  return (
    <div className={`line-parent1 ${className}`}>
      <div className="frame-child3" />
      <div className="front-end-skills-wrapper">
        <h1 className="front-end-skills4">{frontEndSkills}</h1>
      </div>
      <div className="skill-divider" />
      <div className="frame-child4" />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  frontEndSkills: PropTypes.string,
};

export default GroupComponent;
