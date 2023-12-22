import React, { useRef } from "react";

const ItemPlaceholder = ({ onHandleChangeForm }) => {
  const inputBuyingItem = useRef('');
  const inputBuyingDate = useRef('');

  return (
    <form
      action=""
      onSubmit={(e) => {
        onHandleChangeForm(e, inputBuyingItem.current.value, inputBuyingDate.current.value);
        inputBuyingItem.current.value = '';
        inputBuyingDate.current.value = '';
      }}
    >
      <h2>Add Your Item</h2>
      <div className="row mb-4">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="add items"
            aria-label="add items"
            ref={inputBuyingItem}
          />
        </div>
        <div className="col">
          <input
            type="date"
            className="form-control"
            placeholder="date"
            aria-label="add date"
            ref={inputBuyingDate}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary m-0">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ItemPlaceholder;
