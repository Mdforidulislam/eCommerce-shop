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

function discountProduct(discountcode, productPrice, quantity,totalPrice) {
   const discountValue = document.getElementById(discountcode).value;
   const convertValue = discountValue.trim();

   if (convertValue === 'Discount12') {
       const getTotalPrice = document.getElementById('carad-container');
       const getChild = getTotalPrice.lastChild;
       const getTrim = getChild.textContent.trim();
       const getNumber = getTrim.split(' ');
       const getValue = parseFloat(getNumber[4]);
       
       const discount = (60 / 100) * productPrice;
       const discountPrice = productPrice - discount;
       const totalQuantityPrice = quantity * discountPrice;
       const remainBalce = totalPrice - totalQuantityPrice;

       const createElement = document.createElement('h1');
       createElement.innerText ="Discount Price : " + totalQuantityPrice;
       const createElement2 = document.createElement('h2');
       createElement2.innerText = " Need to Payment Total Price : " + remainBalce;

       const getBalenceElement = document.getElementById("total-balence");
       const discountBalce = getValue - totalQuantityPrice;
       getBalenceElement.textContent = discountBalce;
       


       getChild.appendChild(createElement);
       getChild.appendChild(createElement2);

       document.getElementById(discountcode).value = '';
   }
}
