import React from 'react'
import { dataType } from '../utils/interface';

/* const RestaruentCard = (props: {id:string, title: string, cardText:string}) => {
  console.log(props);  
  const {id, title, cardText} = props;
  return (
    <div>
        <div className="card" id={props.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6></h6>
                <p className="card-text">{props.cardText}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
} */


const RestaruentCard = (props: { restData: any}) => {
  const {restData} = props;

  return (
        <div className="card" id={restData?.id}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{restData?.name}</h5>
                <h6>{restData?.address}</h6>
                <p className="card-text">{restData?.avgRating}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  )
}

export default RestaruentCard