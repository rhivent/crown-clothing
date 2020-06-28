import React from 'react';
// import logo from './logo.svg';
import { Switch,Route,Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = React.lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = React.lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = React.lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = React.lazy(() => import('./pages/checkout/checkout.component.jsx'));

const App = ({checkUserSession,currentUser}) =>{

  React.useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

  return(
  <div>
    <GlobalStyle />
    <Header />
    <Switch>
      <ErrorBoundary>
        <React.Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)
          } />
        </React.Suspense>
      </ErrorBoundary>
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
