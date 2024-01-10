import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [friendPercentage, setFriendpercentage] = useState(0);
  const tip = bill * ((percentage + friendPercentage) / 2 / 100);
  function handleReset() {
    setBill("");
    setPercentage(0);
    setFriendpercentage(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <Percentage percentage={percentage} onSelect={setPercentage}>
        How much you liked it?
      </Percentage>
      <Percentage percentage={friendPercentage} onSelect={setFriendpercentage}>
        How much your friend liked it?
      </Percentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function Percentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was Amazing (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ${tip + bill} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
export default App;
