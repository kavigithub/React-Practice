import { type } from 'os'
import React from 'react'

type GreetProps ={
    name: string;
    messageCount : number;
    isLogged: boolean;
}

const Greet = (props: GreetProps) => {
  return (
    <div>{props.isLogged && `Greet ${props.name} You hav ${props.messageCount} unread`}</div>
  )
}

export default Greet