import React from "react";
import Header from "./components/Header/Header";
import Prices from "./components/Prices/Prices";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main-bg'></div>
      <div className='main-container'>
        <Prices />
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default App;
