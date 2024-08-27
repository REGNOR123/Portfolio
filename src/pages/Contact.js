import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
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
    navigate("/about");
  }, [navigate]);

  return (
    <div className="contact">
      <div className="contact-child" />
      <header className="contact-inner">
        <div className="frame-parent">
          <div className="logo-wrapper">
            <div className="logo" onClick={onLogoContainerClick}>
              <div className="logo-child" />
              <a className="akr">Akr</a>
            </div>
          </div>
          <nav className="skills-container-parent">
            <div className="skills-container">
              <a className="home" onClick={onLogoContainerClick}>
                Home
              </a>
            </div>
            <div className="skills-container1">
              <a
                className="front-end-skills"
                onClick={onFrontEndSkillsTextClick}
              >
                <p className="all-right-reserved">Front-end skills</p>
              </a>
            </div>
            <div className="skills-container2">
              <a
                className="front-end-skills"
                onClick={onBackEndSkillsTextClick}
              >
                <p className="all-right-reserved">Back-end skills</p>
              </a>
            </div>
            <a className="contact1" onClick={onContactTextClick}>
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="frame-group">
        <section className="frame-container">
          <div className="line-parent">
            <div className="frame-child" />
            <div className="contact-wrapper">
              <h1 className="contact2">
                <p className="all-right-reserved">Contact</p>
              </h1>
            </div>
            <div className="divider" />
            <div className="securesmartseemless" />
          </div>
          <footer className="form-container-parent">
            <div className="form-container">
              <div className="input-fields">
                <div className="group-div">
                  <div className="name-field-parent">
                    <div className="name-field">
                      <img
                        className="image-18-icon"
                        loading="lazy"
                        alt=""
                        src="/image-18@2x.png"
                      />
                    </div>
                    <div className="name-label-container">
                      <b className="placeholder-name">+91 7037300542</b>
                      <div className="fahradit-klasick-smyslupln">
                        Fahradit klasický smysluplný text vhodnou bezvýznamovo
                      </div>
                    </div>
                  </div>
                  <div className="image-19-parent">
                    <img
                      className="image-19-icon"
                      loading="lazy"
                      alt=""
                      src="/image-19@2x.png"
                    />
                    <div className="email-label-container">
                      <div className="address-parent">
                        <b className="address">Address</b>
                        <div className="fahradit-klasick-smyslupln">
                          Fahradit klasický smysluplný text vhodnou bezvýznamovo
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-20-parent">
                    <img
                      className="image-20-icon"
                      loading="lazy"
                      alt=""
                      src="/image-20@2x.png"
                    />
                    <div className="country-label-container">
                      <div className="amit1711030007gmailcom-parent">
                        <b className="amit1711030007gmailcom">
                          amit1711030007@gmail.com
                        </b>
                        <div className="fahradit-klasick-smyslupln">
                          Fahradit klasický smysluplný text vhodnou bezvýznamovo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submission-container-wrapper">
                  <div className="submission-container">
                    <div className="submit-button-container">
                      <h3 className="contact-me">Contact Me</h3>
                    </div>
                    <div className="description-container-parent">
                      <div className="description-container">
                        <div className="description-input-container">
                          <div className="line-group">
                            <div className="frame-item" />
                            <div className="frame-inner" />
                          </div>
                        </div>
                        <div className="input-fields-container">
                          <div className="input-fields-layout">
                            <div className="full-name-parent">
                              <div className="full-name">
                                <p className="all-right-reserved">Full Name</p>
                              </div>
                              <div className="rectangle-div" />
                            </div>
                            <TextField
                              className="input-fields-layout-child"
                              placeholder="Email"
                              variant="outlined"
                              sx={{
                                "& fieldset": { borderColor: "#555" },
                                "& .MuiInputBase-root": {
                                  height: "53px",
                                  borderRadius: "5px",
                                  fontSize: "18px",
                                },
                                "& .MuiInputBase-input": {
                                  color: "rgba(255, 255, 255, 0.5)",
                                },
                              }}
                            />
                            <div className="country-parent">
                              <div className="full-name">Country</div>
                              <div className="rectangle-div" />
                              <div className="polygon-wrapper">
                                <img
                                  className="polygon-icon"
                                  alt=""
                                  src="/polygon-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="description-container-child"
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "20",
                            background: "#333",
                            border: "#007ced solid 3px",
                            borderRadius: "30px",
                            "&:hover": { background: "#333" },
                            width: 161,
                            height: 62,
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                      <div className="frame-wrapper">
                        <textarea
                          className="group-textarea"
                          placeholder="Description"
                          rows={11}
                          cols={27}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <div className="footer-divider" />
              <div className="footer-content">
                <div className="footer-info">
                  <div className="social-links-container">
                    <div className="facebook">
                      <p className="all-right-reserved">{`Facebook `}</p>
                    </div>
                    <div className="instagram">Instagram</div>
                    <a className="youtube">Youtube</a>
                  </div>
                  <div className="all-right-reserved-wrapper">
                    <div className="all-right-reserved-container">
                      <p className="all-right-reserved">
                        © 2022 All Right Reserved
                      </p>
                      <p className="all-right-reserved">&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
        <section className="image-21-wrapper">
          <img
            className="image-21-icon"
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default Contact;
