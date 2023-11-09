import React from 'react';
import {sculptureList} from './data';

const ListItem = ({item, index}) => {
  return (
    <>
        <h4>{item.name} : {item.artist}</h4>
        <p>{index + 1} of {sculptureList.length}</p>
        
    </>
  )
}

export default ListItem