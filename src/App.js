import React from 'react';
// import logo from './logo.svg';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
    );
  }
}

// function App() {
//   const [currentUser,setcurrentUser] = React.useState(null);
//   let unsubscribeFromAuth = null;
//   const unsubscribeFromAuthData = React.useRef();

//   React.useEffect(()=>{
//     unsubscribeFromAuth = auth.onAuthStateChanged( user => {
//       setcurrentUser({user});

//       console.log(user);
//     })
//     // unsubscribeFromAuthData.current = unsubscribeFromAuth();
//   },[]);

//   React.useEffect(() => {
//     return () => unsubscribeFromAuth();
//   },[unsubscribeFromAuth]);

//   console.log(unsubscribeFromAuth);

//   return (
//     <div>
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/shop' component={ShopPage} />
//         <Route path='/signin' component={SignInAndSignUpPage} />
//       </Switch>
//     </div>
//   );
// }

export default App;
