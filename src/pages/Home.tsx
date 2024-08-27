import Main from "../components/Main";
import RightPanel from "../components/RightPanel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home1">
      <Main />
      <RightPanel />
      <div className="footer1">
        <div className="separator" />
        <div className="social-links">
          <footer className="links-container">
            <div className="social-icons">
              <div className="facebook4">
                <p className="facebook5">{`Facebook `}</p>
              </div>
              <a className="instagram2">Instagram</a>
              <a className="youtube2">Youtube</a>
            </div>
            <div className="copyright">
              <div className="all-right-reserved-container2">
                <p className="facebook5">© 2022 All Right Reserved</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
