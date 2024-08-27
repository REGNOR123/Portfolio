import { memo } from "react";
import PropTypes from "prop-types";
import "./BackendContent.css";

const BackendContent = memo(({ className = "" }) => {
  return (
    <div className={`backend-content ${className}`}>
      <div className="p-h-p-description-container-parent">
        <div className="p-h-p-description-container">
          <div className="work-title">
            <div className="work-heading">
              <h3 className="co-dlm1">Co dělám ?</h3>
              <div className="line-parent3">
                <div className="frame-child23" />
                <div className="frame-child24" />
              </div>
            </div>
          </div>
          <div className="p-h-p-image-parent">
            <div className="p-h-p-image">
              <div className="p-h-p-container">
                <img
                  className="image-14-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
                <div className="p-h-p-content">
                  <div className="php-parent">
                    <b className="php">
                      <p className="php1">PHP</p>
                    </b>
                    <div className="je-obecn-znmou-container2">
                      <p className="php1">
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
            <div className="image-15-parent">
              <img className="image-15-icon" alt="" src="/image-15@2x.png" />
              <div className="database-container">
                <div className="database-content">
                  <b className="database">
                    <p className="php1">{`Database `}</p>
                  </b>
                  <div className="je-obecn-znmou-container3">
                    <p className="php1">
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
        <div className="database-description-container">
          <div className="database-description-container-inner">
            <div className="coding-title-parent">
              <div className="coding-title">
                <div className="coding-heading">
                  <div className="coding-skills-group">
                    <h3 className="co-dlm1">Coding Skills</h3>
                    <div className="line-parent4">
                      <div className="frame-child23" />
                      <div className="frame-child26" />
                    </div>
                  </div>
                  <div className="node-js-wrapper">
                    <b className="node-js">Node Js</b>
                  </div>
                </div>
                <div className="empty-skills-title-wrapper">
                  <div className="empty-skills-title">10%</div>
                </div>
              </div>
              <div className="rectangle-parent4">
                <div className="frame-child27" />
                <div className="frame-child28" />
                <div className="frame-child29" />
              </div>
            </div>
          </div>
          <div className="express-container-wrapper">
            <div className="express-container">
              <div className="coding-title">
                <b className="express-js">Express Js</b>
                <div className="empty-my-s">10%</div>
              </div>
              <div className="rectangle-parent4">
                <div className="frame-child27" />
                <div className="frame-child28" />
                <div className="frame-child32" />
              </div>
            </div>
          </div>
          <div className="a-p-i-container-wrapper">
            <div className="express-container">
              <div className="coding-title">
                <b className="rest-api">Rest API</b>
                <div className="empty-my-s">10%</div>
              </div>
              <div className="rectangle-parent4">
                <div className="frame-child27" />
                <div className="frame-child28" />
                <div className="frame-child32" />
              </div>
            </div>
          </div>
          <div className="mongo-container-parent">
            <div className="coding-title">
              <b className="rest-api">Mongo Db</b>
              <div className="mongo-empty-label-parent">
                <div className="mongo-empty-label">10%</div>
                <div className="mongo-empty-label1">10%</div>
              </div>
            </div>
            <div className="rectangle-parent7">
              <div className="frame-child36" />
              <div className="frame-child37" />
              <div className="frame-child38" />
            </div>
          </div>
          <div className="s-q-l-container-wrapper">
            <div className="express-container">
              <div className="coding-title">
                <b className="rest-api">Sql</b>
                <div className="mongo-empty-label-parent">
                  <div className="mongo-empty-label">10%</div>
                  <div className="mongo-empty-label1">10%</div>
                </div>
              </div>
              <div className="rectangle-parent7">
                <div className="frame-child36" />
                <div className="frame-child37" />
                <div className="frame-child38" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

BackendContent.propTypes = {
  className: PropTypes.string,
};

export default BackendContent;
