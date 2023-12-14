import React, { useState } from 'react';  
import styles from './SingleItem.module.css';
import Button from './Button';

const SingleItem = ({singleItem, todoItem, handleDoneAction, handleDeleteAction, handelEditAction}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(singleItem.name);


  let editHtml;

  const handleEdit = () => {
    //alert(currentVal);
    setIsEditing((currentVal) => !currentVal);
  }

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSave = () => {
    handelEditAction({ ...singleItem, name: editedName });
    setIsEditing(false);
  };

  if(isEditing){
    editHtml = (
      <>
        <h2><input value={editedName} onChange={handleInputChange}/></h2>
        <p>{singleItem.dueDate}</p>
        <Button type='submit' actionClass={styles['edit-btn']} handleAction={handleSave}>Save</Button>
      </>
    );
  } else {
    editHtml = (
      <>
        <h2>{singleItem.name}</h2>
        <p>{singleItem.dueDate}</p>
        <Button type='submit' actionClass={styles['edit-btn']} handleAction={handleEdit}>Edit</Button>
      </>
    )
  }



  return (
    <li className={`${styles['style-single-list']} ${todoItem && styles['style-done']}`}>
        {editHtml}
        <Button type='submit' actionClass={styles['done-btn']} handleAction={handleDoneAction}>Done</Button>
        {/* <button type='delete' className={styles['delete-btn']}>Delete</button> */}
        <Button type='submit' actionClass={styles['delete-btn']} handleAction={handleDeleteAction}>Delete</Button>
    </li>
  )
}

export default SingleItem