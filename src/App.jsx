import React from "react";
import DataView from "./components/DataView/DataView"; 
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1 className="header">Earn More, Pay Less? </h1>
      <h2 className="subheader">Average Housing Costs and Incomes by NYC Borough</h2>

      {/* DataView component for Staten Island */}
      <DataView borough="Staten Island" renterCost={14292} ownerCost={28752} renterIncome={37882} ownerIncome={94177} />

      {/* DataView component for Queens */}
      <DataView borough="Queens" renterCost={16812} ownerCost={29256} renterIncome={46459} ownerIncome={80144} />

      {/* DataView component for Brooklyn */}
      <DataView borough="Brooklyn" renterCost={15144} ownerCost={31908} renterIncome={40128} ownerIncome={83737} />

      {/* DataView component for Manhattan */}
      <DataView borough="Manhattan" renterCost={18900} ownerCost={36252} renterIncome={62173} ownerIncome={142046} />

      {/* DataView component for Bronx */}
      <DataView borough="Bronx" renterCost={13176} ownerCost={28548} renterIncome={29302} ownerIncome={76485} />
    </div>
  );
};

export default App;
