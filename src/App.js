import React from 'react';
// import logo from './logo.svg';
import { Switch,Route,Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({checkUserSession,currentUser}) =>{

  React.useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

  return(
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)
      } />
    </Switch>
  </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  // collectionsArray : selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
