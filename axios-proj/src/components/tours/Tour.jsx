import React from 'react'

const Tour = ({item}) => {
  const {name,image, info, price} = item;  
  return (
     <article className="single-tour">
     <img src={image} alt={name} />
     <footer>
       <div className="tour-info">
         <h4>{name}</h4>
         <h4 className="tour-price">${price}</h4>
       </div>
       <p>{info}</p>
 {/*       <p>
         {readMore ? info : `${info.substring(0, 200)}...`}
         <button onClick={() => setReadMore(!readMore)}>
           {readMore ? 'show less' : '  read more'}
         </button>
       </p> */}
       <button className="delete-btn">
         not interested
       </button>
     </footer>
   </article>
  )
}

export default Tour