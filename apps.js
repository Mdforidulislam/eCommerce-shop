let productNumber = 1;

document.getElementById('buynow-btn1').addEventListener('click',function () {
    
   const getTotalPreviusBalence = getElementValue('total-balence');
   const getNewProductValue = getElementValue('product-price1');
   const updatePrice = getTotalPreviusBalence + getNewProductValue;
   upDateNewprice('total-balence',updatePrice)
    
   const updateProductNumber = productNumber ++ ;

   upDateNewprice('product-number',updateProductNumber);
   upDateNewprice('item-set',updateProductNumber);

   addproductInCard("carad-container",getNewProductValue,updateProductNumber);


})
document.getElementById('buynow-btn2').addEventListener('click',function () {
    
   const getTotalPreviusBalence = getElementValue('total-balence');
   const getNewProductValue = getElementValue('product-price1');
   const updatePrice = getTotalPreviusBalence + getNewProductValue;
   upDateNewprice('total-balence',updatePrice)
    
   const updateProductNumber = productNumber ++ ;
   addproductInCard("carad-container",getNewProductValue,updateProductNumber);
   upDateNewprice('product-number',updateProductNumber);
   upDateNewprice('item-set',updateProductNumber);

})
document.getElementById('buynow-btn3').addEventListener('click',function () {
    
   const getTotalPreviusBalence = getElementValue('total-balence');
   const getNewProductValue = getElementValue('product-price1');
   const updatePrice = getTotalPreviusBalence + getNewProductValue;
   upDateNewprice('total-balence',updatePrice)
    
   const updateProductNumber = productNumber ++ ;
   addproductInCard("carad-container",getNewProductValue,updateProductNumber);
   upDateNewprice('product-number',updateProductNumber);
   upDateNewprice('item-set',updateProductNumber);

})
document.getElementById('buynow-btn4').addEventListener('click',function () {
    
   const getTotalPreviusBalence = getElementValue('total-balence');
   const getNewProductValue = getElementValue('product-price1');
   const updatePrice = getTotalPreviusBalence + getNewProductValue;
   upDateNewprice('total-balence',updatePrice)
   const updateProductNumber = productNumber ++ ;
   addproductInCard("carad-container",getNewProductValue,updateProductNumber);

   upDateNewprice('product-number',updateProductNumber);
   upDateNewprice('item-set',updateProductNumber);

})
document.getElementById('buynow-btn5').addEventListener('click',function () {
    
   const getTotalPreviusBalence = getElementValue('total-balence');
   const getNewProductValue = getElementValue('product-price1');
   const updatePrice = getTotalPreviusBalence + getNewProductValue;
   upDateNewprice('total-balence',updatePrice)
    
   const updateProductNumber = productNumber ++ ;
   addproductInCard("carad-container",getNewProductValue,updateProductNumber);
   upDateNewprice('product-number',updateProductNumber);
   upDateNewprice('item-set',updateProductNumber);

})
document.getElementById('buynow-btn6').addEventListener('click',function () {
    
   const getTotalPreviusBalence = getElementValue('total-balence');
   const getNewProductValue = getElementValue('product-price1');
   const updatePrice = getTotalPreviusBalence + getNewProductValue;
   upDateNewprice('total-balence',updatePrice)
    
   const updateProductNumber = productNumber ++ ;
   addproductInCard("carad-container",getNewProductValue,updateProductNumber);
   upDateNewprice('product-number',updateProductNumber);
   upDateNewprice('item-set',updateProductNumber);

})

document.getElementById('disocunt-offer').addEventListener('click', function () {
   const updateProductNumber = productNumber++; // Assuming you have defined productNumber
   const getNewProductValue = getElementValue('product-price1'); // Assuming you have the getElementValue function
   const getTotalPreviusBalence = getElementValue('total-balence'); // Assuming you have the getElementValue function
   const setPriceDiscount = discountProduct('Discount-code', getNewProductValue, updateProductNumber,getTotalPreviusBalence);
});






