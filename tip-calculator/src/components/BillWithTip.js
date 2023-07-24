import React from 'react'

const BillWithTip = ({billAmount, yourTipAmout, friendTipAmout}) => {
    let myTip = billAmount * yourTipAmout / 100;
    let myfrienTip = billAmount * friendTipAmout / 100;
    let averageTip = (Number(myTip) + Number(myfrienTip)) / 2;

  return (
    <div>
        <p>You pay {Number(billAmount) + Number(averageTip)} : bill amount ({billAmount}), tip amount ({averageTip})</p>
    </div>
  )
}

export default BillWithTip