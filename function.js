function getElementValue(elementId) {
   const getelemnetValueById =  document.getElementById(elementId);
   const convertElement = parseFloat(getelemnetValueById.textContent);
   return convertElement;
}

function upDateNewprice (elementId,price){
     const getSetPriceValue = document.getElementById(elementId);
     getSetPriceValue.innerText = price;
}

function addproductInCard(cardId, ProductPrice, QuantityProduct,imgTitleshow) {
   const getProdcuPrice = document.getElementById(imgTitleshow);
   const getprodcutParent = getProdcuPrice.parentNode.parentNode.parentNode.parentNode;
   const getProductFastChild = getprodcutParent.childNodes[1].firstChild;
   const getProductFastChildContent = getProductFastChild.outerHTML;
   const getProductTitle = getprodcutParent.children[1].firstElementChild.innerText;
   const getCardSection = document.getElementById(cardId);
   const createPriceTitle = document.createElement('h2');
   const createProductQuantity = document.createElement('h2');
   const creatSum = document.createElement('h1');
   const multipulation = ProductPrice * QuantityProduct;

   createProductQuantity.innerHTML = getProductFastChildContent + getProductTitle + QuantityProduct;
   createPriceTitle.innerText = "Product Price $: " + ProductPrice;
   creatSum.innerText = "Total Price: $" + multipulation;

   const createDivP = document.createElement('div');
   createDivP.style.cssText = 'display: flex; justify-content: space-between; background-color: #0b2942; padding: 12px; border-radius:12px; margin-top:5px;';
   createProductQuantity.style.width = '100%';

   const createDivC1 = document.createElement('div');
   const createDivC2 = document.createElement('div');
   const createDivC3 = document.createElement('div');

   createDivC1.appendChild(createProductQuantity);
   createDivC2.appendChild(createPriceTitle);
   createDivC3.appendChild(creatSum);

   createDivC1.style.width = '100px';

   createDivP.appendChild(createDivC1);
   createDivP.appendChild(createDivC2);
   createDivP.appendChild(createDivC3);

   getCardSection.appendChild(createDivP);
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
       console.log(getValue)
       const discount = (60 / 100) * productPrice;
       const discountPrice = productPrice - discount;
       const totalQuantityPrice = quantity * discountPrice;
       const remainBalce =totalPrice - totalQuantityPrice;

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
