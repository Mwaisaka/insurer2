import React, { useState } from 'react';

const Comparer= () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [carDetails, setCarDetails] = useState({});
  const [coverType, setCoverType] = useState('');
  const [coverValue, setCoverValue] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  const handleStepChange = () => {
    setStep(step + 1);
    // Perform necessary actions based on the current step
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit data to backend for further processing
    // You can send all the collected data to the backend here
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Button to send OTP */}
            <button onClick={handleStepChange}>Send OTP</button>
          </div>
        );
      case 2:
        return (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {/* Button to verify OTP */}
            <button onClick={handleStepChange}>Verify OTP</button>
          </div>
        );
      case 3:
        return (
          <div>
            {/* Form to capture car details */}
            <button onClick={handleStepChange}>Next Step</button>
          </div>
        );
      case 4:
        return (
          <div>
            <select
              value={coverType}
              onChange={(e) => setCoverType(e.target.value)}
            >
              <option value="">Choose Cover Type</option>
              <option value="comprehensive">Comprehensive</option>
              <option value="thirdParty">Third Party</option>
              <option value="thirdPartyFireTheft">Third Party Fire & Theft</option>
            </select>
            {coverType === 'comprehensive' && (
              <input
                type="text"
                placeholder="Enter Cover Value"
                value={coverValue}
                onChange={(e) => setCoverValue(e.target.value)}
              />
            )}
            {/* Button to proceed */}
            <button onClick={handleStepChange}>Next Step</button>
          </div>
        );
      case 5:
        return (
          <div>
            <select
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
            >
              <option value="">Choose Payment Option</option>
              <option value="mpesa">Mpesa</option>
              <option value="bankCard">Bank Card</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
            {/* Button to proceed to payment */}
            <button onClick={handleStepChange}>Next Step</button>
          </div>
        );
      case 6:
        return (
          <div>
            {/* Payment details form */}
            <button onClick={handleSubmit}>Confirm Payment</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>User Authentication and Profiles</h1>
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

export default Comparer;