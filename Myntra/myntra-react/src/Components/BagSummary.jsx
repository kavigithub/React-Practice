import { useSelector } from "react-redux"

const BagSummary = () => {
   let bagItems = useSelector(state => state.Bag);
   console.log(bagItems, 'bagItems');
   
   let productItem = useSelector(state => state.products);
   console.log(productItem, 'sagale product');

   let finalSelectedProduct = productItem.filter((item) => bagItems.indexOf(item.id) !== -1);
   console.log(finalSelectedProduct);

   let totalMrpCalculation = finalSelectedProduct.reduce((accumalator, item) => item.original_price + accumalator, 0);
   
   let totalDiscountCalculation = finalSelectedProduct.reduce((acuumalator, item) => {
    let discountAmount = item.original_price *  item.discount_percentage / 100;
    return  (item.original_price - discountAmount)  + acuumalator;
   }, 0)

   let convenienceFee = 99;

   let bagFinalPayment = Math.ceil(totalMrpCalculation) - Math.ceil(totalDiscountCalculation.toFixed(2)) + convenienceFee;

    let BagSummary = {
        totalItem: bagItems.length,
        totalMRP:  Math.ceil(totalMrpCalculation),
        totalDiscount:  Math.ceil(totalDiscountCalculation),
        finalPayment: bagFinalPayment
    }

  return (
    <>
         <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({BagSummary.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{BagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{BagSummary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{convenienceFee}</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{BagSummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </>
  )
}

export default BagSummary