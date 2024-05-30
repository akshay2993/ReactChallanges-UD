const UserInput = ({userInput, onChange}) => {
  
  return (
    <div id="user-input">
      <div className="input-group">
        <label>Initial Investment</label>
        <input
          value={userInput.initialInvestment}
          onChange={(e) => {onChange('initialInvestment', e.target.value)}}
          type="number"
        />
      </div>
      <div className="input-group">
        <label>Annual Investment</label>
        <input
          value={userInput.annualInvestment}
          onChange={(e) => onChange('annualInvestment', e.target.value)}
          type="number"
        />
      </div>
      <div className="input-group">
        <label>Expected Return</label>
        <input
          value={userInput.expectedReturn}
          onChange={(e) => onChange('expectedReturn', e.target.value)}
          type="number"
        />
      </div>
      <div className="input-group">
        <label>Duration</label>
        <input
          value={userInput.duration}
          onChange={(e) => onChange('duration', e.target.value)}
          type="number"
        />
      </div>
    </div>
  );
};

export default UserInput;
