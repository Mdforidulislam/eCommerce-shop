let productNumber = 1;

function buyProduct(btnId, productPriceElementId, cardContainerId, discountCodeElementId) {
   const button = document.getElementById(btnId);
   const limit = 15;
   let purchasedQuantity = 1;
   let balenceLimitation = 4000;
   button.addEventListener('click', function() {

        const getTotalPreviusBalence = getElementValue('total-balence');
        const getNewProductValue = getElementValue(productPriceElementId);
        const updatePrice = getTotalPreviusBalence + getNewProductValue;

      if (purchasedQuantity <= limit && updatePrice <= balenceLimitation ) {
         // Proceed with purchase
           const getTotalPreviusBalence = getElementValue('total-balence');
           const getNewProductValue = getElementValue(productPriceElementId);
           const updatePrice = getTotalPreviusBalence + getNewProductValue;
           upDateNewprice('total-balence', updatePrice);

           const updateProductNumber = productNumber++;
           addproductInCard(cardContainerId, getNewProductValue, updateProductNumber, productPriceElementId);
           upDateNewprice('product-number', updateProductNumber);
           upDateNewprice('item-set', updateProductNumber);

           if (discountCodeElementId) {
               const getTotalPreviusBalence = getElementValue('total-balence');
               const getNewProductValue = getElementValue(productPriceElementId);
               const setPriceDiscount = discountProduct(discountCodeElementId, getNewProductValue, updateProductNumber, getTotalPreviusBalence);
           }

           purchasedQuantity++;

           // Display a message if the purchase limit is reached
           if (purchasedQuantity === limit) {
               alert(`You have reached the purchase limit of ${limit} for this product.`);
           }
       } else {
           alert(`You have reached the purchase limit of ${limit} for this product.`);
       }
   });
}

buyProduct('buynow-btn1', 'product-price1', 'carad-container', 'Discount-code');
buyProduct('buynow-btn2', 'product-price2', 'carad-container');
buyProduct('buynow-btn3', 'product-price3', 'carad-container');
buyProduct('buynow-btn4', 'product-price4', 'carad-container');
buyProduct('buynow-btn5', 'product-price5', 'carad-container');
buyProduct('buynow-btn6', 'product-price6', 'carad-container');

document.getElementById('disocunt-offer').addEventListener('click', function () {
   const updateProductNumber = productNumber++; // Assuming you have defined productNumber
   const getNewProductValue = getElementValue('product-price1'); // Assuming you have the getElementValue function
   const getTotalPreviusBalence = getElementValue('total-balence'); // Assuming you have the getElementValue function
   const setPriceDiscount = discountProduct('Discount-code', getNewProductValue, updateProductNumber, getTotalPreviusBalence);
});





// old code =====================================================================================

// document.getElementById('buynow-btn1').addEventListener('click',function () {
    
//    const getTotalPreviusBalence = getElementValue('total-balence');
//    const getNewProductValue = getElementValue('product-price1');
//    const updatePrice = getTotalPreviusBalence + getNewProductValue;
//    upDateNewprice('total-balence',updatePrice)
    
//    const updateProductNumber = productNumber ++ ;

//    upDateNewprice('product-number',updateProductNumber);
//    upDateNewprice('item-set',updateProductNumber);

//    addproductInCard("carad-container",getNewProductValue,updateProductNumber,"product-price1");


// })
// document.getElementById('buynow-btn2').addEventListener('click',function () {
    
//    const getTotalPreviusBalence = getElementValue('total-balence');
//    const getNewProductValue = getElementValue('product-price2');
//    const updatePrice = getTotalPreviusBalence + getNewProductValue;
//    upDateNewprice('total-balence',updatePrice)
    
//    const updateProductNumber = productNumber ++ ;
//    addproductInCard("carad-container",getNewProductValue,updateProductNumber,'product-price2');
//    upDateNewprice('product-number',updateProductNumber);
//    upDateNewprice('item-set',updateProductNumber);

// })
// document.getElementById('buynow-btn3').addEventListener('click',function () {
    
//    const getTotalPreviusBalence = getElementValue('total-balence');
//    const getNewProductValue = getElementValue('product-price3');
//    const updatePrice = getTotalPreviusBalence + getNewProductValue;
//    upDateNewprice('total-balence',updatePrice)
    
//    const updateProductNumber = productNumber ++ ;
//    addproductInCard("carad-container",getNewProductValue,updateProductNumber,'product-price3');
//    upDateNewprice('product-number',updateProductNumber);
//    upDateNewprice('item-set',updateProductNumber);

// })
// document.getElementById('buynow-btn4').addEventListener('click',function () {
    
//    const getTotalPreviusBalence = getElementValue('total-balence');
//    const getNewProductValue = getElementValue('product-price4');
//    const updatePrice = getTotalPreviusBalence + getNewProductValue;
//    upDateNewprice('total-balence',updatePrice)
//    const updateProductNumber = productNumber ++ ;
//    addproductInCard("carad-container",getNewProductValue,updateProductNumber,'product-price4');

//    upDateNewprice('product-number',updateProductNumber);
//    upDateNewprice('item-set',updateProductNumber);

// })
// document.getElementById('buynow-btn5').addEventListener('click',function () {
    
//    const getTotalPreviusBalence = getElementValue('total-balence');
//    const getNewProductValue = getElementValue('product-price5');
//    const updatePrice = getTotalPreviusBalence + getNewProductValue;
//    upDateNewprice('total-balence',updatePrice)
    
//    const updateProductNumber = productNumber ++ ;
//    addproductInCard("carad-container",getNewProductValue,updateProductNumber,'product-price5');
//    upDateNewprice('product-number',updateProductNumber);
//    upDateNewprice('item-set',updateProductNumber);

// })
// document.getElementById('buynow-btn6').addEventListener('click',function () {
    
//    const getTotalPreviusBalence = getElementValue('total-balence');
//    const getNewProductValue = getElementValue('product-price6');
//    const updatePrice = getTotalPreviusBalence + getNewProductValue;
//    upDateNewprice('total-balence',updatePrice)
    
//    const updateProductNumber = productNumber ++ ;
//    addproductInCard("carad-container",getNewProductValue,updateProductNumber,'product-price6');
//    upDateNewprice('product-number',updateProductNumber);
//    upDateNewprice('item-set',updateProductNumber);

// })

// document.getElementById('disocunt-offer').addEventListener('click', function () {
//    const updateProductNumber = productNumber++; // Assuming you have defined productNumber
//    const getNewProductValue = getElementValue('product-price1'); // Assuming you have the getElementValue function
//    const getTotalPreviusBalence = getElementValue('total-balence'); // Assuming you have the getElementValue function
//    const setPriceDiscount = discountProduct('Discount-code', getNewProductValue, updateProductNumber,getTotalPreviusBalence);
// });