function getElementValue(elementId) {
   const getelemnetValueById =  document.getElementById(elementId);
   const convertElement = parseFloat(getelemnetValueById.textContent);
   return convertElement;
}

function upDateNewprice (elementId,price){
     const getSetPriceValue = document.getElementById(elementId);
     getSetPriceValue.innerText = price;
}

function addproductInCard(cardId,ProductPrice,QuantityProduct) {
   const getCardSection = document.getElementById(cardId);
   const createPriceTitle = document.createElement('h2');
   const createProductQuantity = document.createElement('h2');
   const creatSum = document.createElement('h1');
   const multipulation = ProductPrice *QuantityProduct ;
   createProductQuantity.innerText = "Product Quantity : " + QuantityProduct;
   createPriceTitle.innerText ="Product Price $ : " + ProductPrice;
   creatSum.innerText = "Total Price : $ " + multipulation ;

   getCardSection.appendChild(createPriceTitle);
   getCardSection.appendChild(createProductQuantity);
   getCardSection.appendChild(creatSum);
}

function discountProcut(discountcode ,remainBalence) {
   const discountValue = document.getElementById(discountcode).value;
   const convertValue = parseInt(discountValue);

   if (convertValue === 'Discount12') {
      
   }
}