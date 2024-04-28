import React, { useState } from "react";
import "./Calculator.css";

function InsuranceCalculator() {
  const [sumInsured, setSumInsured] = useState("");
  const [rate, setRate] = useState("");
  const [vehicleType, setVehicleType] = useState("Motor Private");
  const [premium, setPremium] = useState(0);

  const calculatePremium = (e) => {
    e.preventDefault();

    // Basic calculation based on sum insured, rate, and vehicle type
    let basePremium = parseFloat(sumInsured) * parseFloat(rate / 100);

    if (vehicleType === "commercial") {
        setRate("5");
      basePremium *= 1.2; // Increase premium for commercial vehicles
    } else if (vehicleType === "psv") {
      basePremium *= 1.5; // Increase premium for PSVs
    }

    const roundedPremium = parseFloat(basePremium.toFixed(2));

    setPremium(roundedPremium);
  };

  return (
    <div className="container">
      <p>
        <strong>Please Enter the below fields to calcaulate premiums...</strong>
      </p>
      <div className="centered">
        <form onSubmit={calculatePremium}>
          <div>
            <label htmlFor="sumInsured">Sum Insured:</label>
            <input
              type="number"
              id="sumInsured"
              value={sumInsured}
              onChange={(e) => {
                setSumInsured(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="rate">Rate (%):</label>
            <input
              type="number"
              id="rate"
              value={rate}
              readOnly={true}
            //   onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="vehicleType">Vehicle Type:</label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="private">Motor Private</option>
              <option value="commercial">Motor Commercial (Own Goods)</option>
              <option value="commercial-own-goods-and-general-cartage">
                Motor Commercial (Own Goods & General Cartage)
              </option>
              <option value="commercial-institutional">
                Motor Commercial (Institutional)
              </option>
              <option value="psv-chauffer-driven">PSV Chauffer Driven</option>
              <option value="commercial-special-types-ambulance">
                Motor Commercial Special Types - Ambulance
              </option>
              <option value="commercial-special-types-fire-engines">
                Motor Commercial Special Types - Fire Engines
              </option>
              <option value="commercial-psv-asset">
                Motor Commercial - PSV Asset Only
              </option>
              <option value="commercial-petroleum-tankers">
                Motor Commercial - Petroleum Tankers
              </option>
              <option value="commercial-agriculatural-and-forestry">
                Motor Commercial - Agricultural & Forestry
              </option>
            </select>
          </div>
          <br />

          <button
            type="submit"
            className="bg-blue-400 hover:bg-orange-700 text-white font-bold py-1 px-1 rounded-md shadow-md transition duration-300 ease-in-out"
          >
            Calculate Premium
          </button>
          <br />
          <br />
        </form>
        {premium > 0 && (
          <p>
            <strong>Your insurance premium: Kes.</strong>{" "}
            {premium.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default InsuranceCalculator;
