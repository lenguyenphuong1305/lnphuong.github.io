import React from 'react';
import styles from './App.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  Link
} from "react-router-dom";
import Survey from './components/Survey/Survey';
import Home from './components/Home/Home';
import logoImg from './images/logo.png'
import 'antd/dist/antd.css';
import translate from './translate';

class App extends React.Component {
  state = {
    lan: "vi"
  }

  componentWillMount() {
    const lan = localStorage.getItem("lan");
    if (!lan) {
      localStorage.setItem("lan", this.state.lan);
    } else {
      this.setState({lan})
    }
  }

  setLan = (lan) => {
    localStorage.setItem("lan", lan);
    this.setState({lan})
    window.location.reload()
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <div className={`${styles.header} ${styles.sticky}`}>
            <Link to="/">
              <img alt='logo' src={logoImg} className={styles.logo}></img>
            </Link>
            <div style={{ height: "100%", display: "flex", alignItems:"center"}}>
              <NavLink to="/" exact activeClassName={styles.activeLink} className={styles.navLink}>{translate(this.state.lan, "Trang chủ")}</NavLink>
              <NavLink to="/survey" exact activeClassName={styles.activeLink} className={styles.navLink}>{translate(this.state.lan, "Khảo sát")}</NavLink>
              <a href="https://www.facebook.com/Who-you-are-B%E1%BA%A1n-l%C3%A0-ai-102790391159794/?modal=admin_todo_tour" className={`${styles.navLink} ${styles.contact}`} target="blank">{translate(this.state.lan, "Liên hệ")}</a>
            </div>
          </div>
          <div className={styles.content}>
            <Switch>
              <Route path="/survey" exact>
                <Survey lan={this.state.lan}></Survey>
              </Route>
              <Route path="/" exact>
                <Home lan={this.state.lan}></Home>
              </Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div>
                <span className={`${styles.lan} ${this.state.lan === "vi" ? styles.activeLan : ""}`} onClick={() => this.setLan("vi")}>
                  Tiếng Việt
                </span> / <span className={`${styles.lan} ${this.state.lan === "en" ? styles.activeLan : ""}`} onClick={() => this.setLan("en")}>
                  English
                </span>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
