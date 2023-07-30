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
      <DataView borough="Queens" renterCost={13560} ownerCost={26052} renterIncome={37875} ownerIncome={83397} />

      {/* DataView component for Brooklyn */}
      <DataView borough="Brooklyn" renterCost={16092} ownerCost={27684} renterIncome={45166} ownerIncome={101997} />

      {/* DataView component for Manhattan */}
      <DataView borough="Manhattan" renterCost={23472} ownerCost={49104} renterIncome={55354} ownerIncome={132025} />

      {/* DataView component for Bronx */}
      <DataView borough="Bronx" renterCost={12300} ownerCost={24540} renterIncome={29280} ownerIncome={59974} />
    </div>
  );
};

export default App;
