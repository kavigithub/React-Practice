import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({selectedPeople, onSpitBillSubmit}) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? (bill - paidByUser) : 0; //derived state
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!bill ||!paidByUser) return;

    onSpitBillSubmit(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleFormSubmit}>
      <h2>Split a bill with {selectedPeople.name}</h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

      <label>🧍‍♀️ Your expense</label>
      <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

      <label>👫 {selectedPeople.name} expense</label>
      <input type="text" disabled value={paidByFriend}/>

      <label>🤑 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedPeople.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
