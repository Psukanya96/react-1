import React from "react";
import "./DataView.css";

const DataView = (props) => {
  const { borough, renterCost, ownerCost, renterIncome, ownerIncome } = props;

  //  Cost-To-Income ratio for renters and owners
  const renterRatio = (renterCost / renterIncome)*100;
  const ownerRatio = (ownerCost / ownerIncome)*100;

  return (
    <div className="view">
      {/* left side of card */}
      <div className="view-column">
        <div className="borough">
          <h1 className="borough-text">{borough}</h1>
        </div>
      </div>
      <div className="view-column">
        <table className="data-view">
          <tr className="data-view-row">
            <th className="text">
              <h3 className="text-header">Renters</h3>
            </th>
            <th className="text">
              <h3 className="text-header">Homeowners</h3>
            </th>
          </tr>
          <tr className="data-view-row">
            <td className="text">
              <h2 className="text-data">{renterCost}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </td>
            <td className="text">
              <h2 className="text-data">{ownerCost}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </td>
          </tr>
          <tr className="data-view-row">
            <td className="text">
              <h2 className="text-data">{renterIncome}</h2>
              <h3 className="text-label">Annual Income</h3>
            </td>
            <td className="text">
              <h2 className="text-data">{ownerIncome}</h2>
              <h3 className="text-label">Annual Income</h3>
            </td>
          </tr>
          <tr className="data-view-row">
            <td className="text">
              <h2 className="text-data"> {renterRatio}%</h2>
              <h3 className="text-label">Cost-To-Income Ratio</h3>
            </td>
            <td className="text">
              <h2 className="text-data">{ownerRatio}%</h2>
              <h3 className="text-label">Cost-To-Income Ratio</h3>
            </td>
          </tr>
        </table> 
        <p className="cost-of-living">
          Cost of living vastly differs for renters and buyers.
        </p>
      </div>
    </div>
  );
};

export default DataView;
