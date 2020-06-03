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

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser:null
  //   }
  // }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    // collectionsArray
    // const {setCurrentUser} = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    //   if(userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot =>{
    //       // console.log(snapShot.id);
    //       // console.log(snapShot.data());
          
    //       setCurrentUser({
    //         id: snapShot.id,
    //           ...snapShot.data()
    //       });
    //       // console.log(this.state);
    //     });
        
    //   }
      
    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocument('collections',collectionsArray.map(({title,items}) => ({title,items}) ));
    // });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage/>)
        } />
      </Switch>
    </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  // collectionsArray : selectCollectionsForPreview
});

export default connect(mapStateToProps)(App);
