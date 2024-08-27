import { memo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = memo(({ className = "" }) => {
  return (
    <div className={`frame-parent5 ${className}`}>
      <div className="frame-parent6">
        <div className="css-parent">
          <div className="frame-parent8">
            <div className="coding-skills-parent">
              <h3 className="coding-skills">Coding Skills</h3>
              <div className="line-parent2">
                <div className="frame-child5" />
                <div className="frame-child6" />
              </div>
            </div>
            <div className="html-wrapper">
              <b className="html">HTML</b>
            </div>
          </div>
          <div className="wrapper">
            <div className="div">100%</div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="rectangle-parent">
            <div className="frame-child7" />
            <div className="frame-child8" />
            <div className="frame-child9" />
          </div>
        </div>
      </div>
      <div className="frame-parent9">
        <div className="css-parent">
          <b className="css">CSS</b>
          <div className="skill-dividers">80%</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="coding-skill-icon-top" />
          <div className="coding-skill-icon-bottom" />
        </div>
      </div>
      <div className="frame-parent9">
        <div className="css-parent">
          <b className="javascript">JavaScript</b>
          <div className="skill-dividers">60%</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="coding-skill-icon-top" />
          <div className="frame-child13" />
        </div>
      </div>
      <div className="frame-parent9">
        <div className="css-parent">
          <b className="css">React</b>
          <div className="skill-dividers">35%</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="coding-skill-icon-top" />
          <div className="frame-child16" />
        </div>
      </div>
      <div className="frame-parent9">
        <div className="css-parent">
          <b className="css">
            <p className="sass1">Sass</p>
          </b>
          <div className="skill-dividers">30%</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="coding-skill-icon-top" />
          <div className="frame-child19" />
        </div>
      </div>
      <div className="frame-parent9">
        <div className="css-parent">
          <b className="greenshock">
            <p className="sass1">GreenShock</p>
          </b>
          <div className="skill-dividers">20%</div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child7" />
          <div className="coding-skill-icon-top" />
          <div className="frame-child22" />
        </div>
      </div>
    </div>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
