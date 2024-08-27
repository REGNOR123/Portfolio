import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  propFlex,
  propAlignSelf,
  image14,
  propHeight,
  propWidth,
  propWidth1,
  uIUXDesign,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const image14IconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const uIUXContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`image-14-parent ${className}`} style={groupDivStyle}>
      <img
        className="image-14-icon"
        loading="lazy"
        alt=""
        src={image14}
        style={image14IconStyle}
      />
      <div className="frame-wrapper5">
        <div className="ui-ux-design-parent">
          <b className="ui-ux-container" style={uIUXContainerStyle}>
            <p className="ui-ux">{uIUXDesign}</p>
          </b>
          <div className="u-i-design-description-paragra">
            <div className="je-obecn-znmou-container1">
              <p className="ui-ux">
                Je obecně známou věcí, že člověk bývá při zkoumání grafického
                návrhu rozptylován okolním textem, pokud mu dává nějaký smysl.
                Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text
                vhodnou bezvýznamovou alternativou
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  image14: PropTypes.string,
  uIUXDesign: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default GroupComponent1;
