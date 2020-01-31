/* eslint-disable no-undef */
import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Blurry from "./components/atoms/Blurry";
import Header from "./components/Header";
import Box from "./components/atoms/Box";
import Image from "./components/Image";
import Card from "./components/organisms/Card";
import { Helmet } from "react-helmet";
import { TypographyStyle, GoogleFont } from "react-typography";
// Best practice is to have a typography module
// where you define your theme.
import typography from "./utils/typography";
import PromoOffers from "./components/organisms/PromoOffers";

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
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Header />
      <header className="App-header">
        <Blurry>
          <h2>some text</h2>
        </Blurry>
        <PromoOffers />
        <Box wrap>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
          <Blurry>
            <Card
              title="Business card"
              description="THe common business cards that you met the whole your life. We can use whatever paper you prefer"
            />
          </Blurry>
        </Box>
        <Blurry>
          <h2>some text</h2>
        </Blurry>
        <Blurry>
          <h2>some text</h2>
        </Blurry>
        <Blurry>
          <h2>some text</h2>
        </Blurry>
        <Blurry>
          <h2>some text</h2>
        </Blurry>
        <Blurry>
          <h2>some text</h2>
        </Blurry>
        <Box>
          <Blurry>
            <Image src="//placeimg.com/200/200/nature" />
          </Blurry>
          <Blurry>
            <Image src="//placekitten.com/200/202" />
          </Blurry>
          <Blurry>
            <Image src="//placekitten.com/200/203" />
          </Blurry>
        </Box>
        <Box>
          <Blurry>
            <Image src="//placekitten.com/200/200" />
          </Blurry>
          <Blurry>
            <Image src="//placekitten.com/200/203" />
          </Blurry>
        </Box>
        <div style={{ height: 2000 }}></div>
      </header>
    </div>
  );
}

export default App;
