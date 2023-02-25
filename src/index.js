// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const priceValue = Number(price.textContent);
  const quantityValue = Number(quantity.value)
  const subtotal = priceValue * quantityValue;
  const subtotalElement = product.querySelector ('.subtotal span')
  subtotalElement.textContent = subtotal 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

}

  // ITERATION 2
  const quantitiesXPrices = []

  function calculateAll() {
    // const allProducts = document.querySelectorAll(".product")
    const allPrices = document.querySelectorAll(".price span")
    const allPricesValues = [...allPrices].map(element => element.innerHTML)
    const allQuantities = document.querySelectorAll(".quantity input")
    const allQuantitiesValues = [...allQuantities].map(element => element.value)
    for (let i = 0; i < allPricesValues.length; i++){
      quantitiesXPrices[i] = allPricesValues[i] * allQuantitiesValues[i]
    }

  const subtotalElements = document.querySelectorAll(".subtotal span");
  for (let i = 0; i < subtotalElements.length; i++) {
    subtotalElements[i].textContent = quantitiesXPrices[i];
  }
  
}



  // ITERATION 3
  function calculateAllTotal() {
let total = 0;
for ( let i = 0; i < quantitiesXPrices.length; i++){
  total += quantitiesXPrices[i]
}
  const totalElement = document.querySelector("#total-value span");
  totalElement.textContent = total
  }
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  calculatePricesBtn.addEventListener('click', calculateAllTotal);
});
