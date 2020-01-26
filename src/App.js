/* eslint-disable no-undef */
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Box from "./components/atoms/Box";

function App() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
      // // The Firebase SDK is initialized and available here!
      //
      // firebase.auth().onAuthStateChanged(user => { });
      // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
      // firebase.messaging().requestPermission().then(() => { });
      // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
      //
      // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

      try {
        let app = firebase.app();
        let features = ["auth", "database", "messaging", "storage"].filter(
          feature => typeof app[feature] === "function"
        );
        document.getElementById(
          "load"
        ).innerHTML = `Firebase SDK loaded with ${features.join(", ")}`;
      } catch (e) {
        console.error(e);
        document.getElementById("load").innerHTML =
          "Error loading the Firebase SDK, check the console.";
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Card>
          <h2>some text</h2>
        </Card>
        <Card>
          <h2>some text</h2>
        </Card>
        <Card>
          <h2>some text</h2>
        </Card>
        <Card>
          <h2>some text</h2>
        </Card>
        <Card>
          <h2>some text</h2>
        </Card>
        <Card>
          <h2>some text</h2>
        </Card>
        <Box>
          <Card>
            <img src="//placekitten.com/200/200" />
          </Card>
          <Card>
            <img src="//placekitten.com/200/202" />
          </Card>
          <Card>
            <img src="//placekitten.com/200/203" />
          </Card>
        </Box>
        <Box>
          <Card>
            <img src="//placekitten.com/200/200" />
          </Card>
          <Card>
            <img src="//placekitten.com/200/203" />
          </Card>
        </Box>
        <div style={{ height: 2000 }}></div>
      </header>
    </div>
  );
}

export default App;
