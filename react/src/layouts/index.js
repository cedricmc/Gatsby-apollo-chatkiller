import React, { Component } from "react";
import { Router, Location } from "@reach/router";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loading from "../components/error/Loading";
import NotAuth from "../components/error/NotAuth";
import "./index.scss";
import "../index.css";
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'*/
import EmailValidated from "../components/nav/EmailValidated";
import Header from "../components/nav/layout/Header";
import NotFound from "../components/error/NotFound";
import SideBar from "../components/nav/layout/SideBar";
import { SideBarContext } from "../components/SideBarContext";

class App extends Component {
  state = {
    isSideBarOpen: true,
    variant: "permanent",
    isMobile: false
  };
  componentDidMount() {
    console.log("mountLayout")
    console.log("Materialize Ready?", global.M);
    var elems = document.querySelectorAll(".collapsible");
    this.instances = global.M.Collapsible.init(elems, {});
  }

  componentWillUnmount() {
    console.log("unmountLayout")
    if (this.instance) {
      this.instance.destroy();
    }
  }

  /*
  toggleDrawer = isSideBarOpen => () => {
    if (!isSideBarOpen && !this.isMobile()) {
      return;
    }
    this.setState({
      isSideBarOpen: isSideBarOpen
    });
  };*/
  /*
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.setState({
      isMobile: this.isMobile(),
      variant: this.isMobile() ? "persistent" : "permanent"
      //   isSideBarOpen: this.isMobile() ? false : true
    });
  }

  resize = () => {
    this.setState({
      isMobile: this.isMobile(),
      variant: this.isMobile() ? "persistent" : "permanent"
      //    isSideBarOpen: this.isMobile() ? false : true
    });
  };*/

  isMobile = () => (window.innerWidth < 600 ? true : false);

  render() {
    const child = this.props.children;
    const Page = props => {
      return (
        <div
          className="page"
          default={!!props.default}
          path={props.path}
          style={{ background: `hsl(${props.page * 75}, 60%, 60%)` }}
        >
          {child}
        </div>
      );
    };
    const propstoshare = this.props.children ? this.props.children.props : {};
    const { me: Me, validation } = this.props;

    return (
      <SideBarContext.Provider
        value={{
          state: this.state,
          Me: !Me.loading && !Me.error && Me.me
        }}
      >
        <div>
          <div
            style={{
              width: 600,
              position: "absolute",
              right: 0,
              bottom: 0
            }}
          >
            <ul className="collapsible popout">
              <li>
                <div className="collapsible-body">
                <div className="md-grid">

          <SideBar />
                  <div className="md-cell md-cell--10">
                  {Me.loading && <Loading />}
                  {!global.isSSR || (Me.error && <NotAuth />)}
                  <Header location={propstoshare.location} />
                  {!Me.loading &&
                    !Me.error &&
                    validation && (
                      <EmailValidated emailvalidated={Me.me.emailvalidated} />
                    )}

                  <FadeTransitionRouter propstoshare={propstoshare}>
                    <Page path="/z/car/create" />
                    <Page path="/z/car/:id" />
                    <Page path="/z/cars" />
                    <Page path="/z/drafts" />
                    <Page path="/z/users" />
                    <Page path="/z/user/create" />
                    <Page path="/z/user/:id" />
                    <Page path="/z/api" />
                    <Page path="/z/create" />
                    <Page path="/z/post/:id" />
                    <Page path="/z/login" />
                    <Page path="/z/signup" />
                    <Page path="/z/forgetPassword" />
                    <Page path="/z/resetPassword" />
                    <Page path="/z/updatePassword" />
                    <Page path="/z/validateEmail" />
                    <Page path="/" default/>
                  </FadeTransitionRouter>
                </div>
                </div>
                </div>
                <div className="collapsible-header">
                  <i className="material-icons">whatshot</i>
                  OPENCHAT
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SideBarContext.Provider>
    );
  }
}

const FadeTransitionRouter = ({ propstoshare, children }) => {
  // const childrenpass = React.cloneElement(children, propstoshare);
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={propstoshare.location.key}
        classNames="fade"
        timeout={{ enter: 500, exit: 300 }}
      >
        <Router location={propstoshare.location}>{children}</Router>
      </CSSTransition>
    </TransitionGroup>
  );
};

const USER_QUERY = gql`
  query Me {
    me {
      id
      role
      emailvalidated
    }
  }
`;

App.defaultProps = {
  validation: false
};
export default compose(
  graphql(USER_QUERY, {
    name: "me",
    options: props => {
      return {
        fetchPolicy: "cache-and-network",
        ssr: false
      };
    }
  })
)(App);

/*
              <Switch>
                <Route exact path='/' component={FeedPage} />
                <Route path='/car/create' component={CreateCar} />
                <Route path='/car/:id' component={DetailCar} />
                <Route path='/drafts' component={DraftsPage} />
                <Route path='/cars' component={CarsPage} />
                <Route path='/chats' component={ChatsPage} />
                <Route path='/users' component={UsersPage} />
                <Route path='/user/create' component={UserPageCreate} />
                <Route path='/user/:id' component={UserPage} />
                <Route path='/api' component={Api} />
                <Route path='/create' component={CreatePage} />
                <Route path='/post/:id' component={DetailPage} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/forgetPassword' component={ForgetPassword} />
                <Route path='/resetPassword' component={ResetPassword} />
                <Route path='/updatePassword' component={UpdatePassword} />
                <Route path='/validateEmail' component={ValidateEmail} />
                <Route component={NotFound} />
              </Switch>*/
