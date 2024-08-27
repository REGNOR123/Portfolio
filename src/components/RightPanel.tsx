import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./RightPanel.css";

const RightPanel = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonShapeClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <section className={`right-panel ${className}`}>
      <div className="panel-content">
        <img
          className="panel-content-child"
          loading="lazy"
          alt=""
          src="/group-6.svg"
        />
        <div className="developer-info">
          <div className="info-container">
            <div className="dev-name">
              <div className="name-role">
                <h3 className="full-stack-developer">Full Stack Developer</h3>
                <h1 className="amit-kumar">Amit Kumar</h1>
              </div>
              <div className="objective">
                <p className="potebujete-vytvoit-webov">
                  Potřebujete vytvořit webové stránky ? Při tvorbě webových
                  stránek zajišťuji celkový design od návrhu až po realizaci.
                  Perfektní technickou stránku zajistišťuji též, aby všechno
                  běželo přesně jak má. Kdyby by Vás mé portofilo přípradně
                  zkušenosti zaujaly - napište mi !
                </p>
              </div>
            </div>
            <div className="aboutbutton">
              <div className="button-shape" onClick={onButtonShapeClick} />
              <div className="about1" onClick={onAboutTextClick}>
                About
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RightPanel.propTypes = {
  className: PropTypes.string,
};

export default RightPanel;
