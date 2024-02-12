import React, { useContext, useState } from "react";
import { ItemContextRef } from "../../store/Context-BuyItem";

const SingleBuyingItem = ({ product }) => {
  const { onHandleDelete, onHandleEdit } = useContext(ItemContextRef);
  const [isEdit, setIsEdit] = useState(false);
  let editItem;

  if (isEdit) {
    editItem = (
      <>
        <input
          type="text"
          className="form-control"
          placeholder="add items"
          aria-label="add items"
          value={product.title}
          onChange={(e) => onHandleEdit({ ...product, title: e.target.value })}
        />
        <input
          type="date"
          className="form-control"
          placeholder="date"
          aria-label="add date"
          value={product.date}
          onChange={(e) => onHandleEdit({ ...product, date: e.target.value })}
        />
        <button
          className="btn btn-sm btn-info m-0 mx-1"
          value={product.date}
          onClick={() => setIsEdit(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    editItem = (
      <>
        <span>{product.title} </span>
        <span>{product.date}</span>
        <button
          type="button"
          className="btn btn-sm btn-info m-0 mx-1"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <li className=" pb-2">
        <span className="mx-1">
          <input
            type="checkbox"
            checked={product.isDone}
            onChange={(e) =>
              onHandleEdit({
                ...product,
                isDone: e.target.checked,
              })
            }
          />
        </span>
        {editItem}
        <button
          type="button"
          className="btn btn-sm btn-danger m-0 mx-1"
          onClick={() => onHandleDelete(product.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default SingleBuyingItem;
