import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Service from "./components/Service";
import TipFrmFriend from "./components/TipFrmFriend";
import BillWithTip from "./components/BillWithTip";
import Reset from "./components/Reset";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [percentage1, setPercentage1] =  useState(0);
  const [percentage2, setPercentage2] =  useState(0);

  const [yourTipAmout, setYourTipAmout] = useState(0);
  const [friendTipAmout, setFriendTipAmout] = useState(0);

  const tip = billAmount * (percentage1 + percentage2) / 2 / 100;

  return (
    <div className="App">
      <Bill billAmount={billAmount} billAmountFunc={setBillAmount}></Bill>
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}> How did you like the service?</SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}> How did your friend like the service?</SelectPercentage>
      <Output billAmount={billAmount} tip={tip}></Output>

      <Service
        yourTipAmout={yourTipAmout}
        setYourTipAmout={setYourTipAmout}
      ></Service>
      <TipFrmFriend
        friendTipAmout={friendTipAmout}
        setFriendTipAmout={setFriendTipAmout}
      ></TipFrmFriend>
     {billAmount > 0 &&
      <>
       <BillWithTip
        billAmount={billAmount}
        yourTipAmout={yourTipAmout}
        friendTipAmout={friendTipAmout}
      ></BillWithTip>
      <Reset
        setFriendTipAmout={setFriendTipAmout}
        setYourTipAmout={setYourTipAmout}
        setBillAmount={setBillAmount}
      ></Reset>
      </>
     }
    </div>
  );
}

export default App;
