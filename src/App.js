import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import { Header } from "./components/common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
  // Life cycle method to init the firebase
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBsaXqqEioMPhYrSdSrSd3mCwK0sUHUeAc",
      authDomain: "auth-e7ac5.firebaseapp.com",
      databaseURL: "https://auth-e7ac5.firebaseio.com",
      projectId: "auth-e7ac5",
      storageBucket: "auth-e7ac5.appspot.com",
      messagingSenderId: "846221714758"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
