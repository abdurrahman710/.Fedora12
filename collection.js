
var productcontainer = document.getElementById("cart-item");
        var search = document.getElementById("Search");
        var productlist = productcontainer.querySelectorAll("div");

        search.addEventListener("keyup", function (event) {
            var enteredvalue = event.target.value.toUpperCase();
            
            // Loop through all product items
            for (var Count = 0; Count < productlist.length; Count++) {
                // Use querySelector to select the <h2> element inside each product div
                var productname = productlist[Count].querySelector("h2").textContent;

                // Check if the entered value exists in the product name
                if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                    productlist[Count].style.display = "none"; // Hide product if it doesn't match
                } else {
                    productlist[Count].style.display = "block"; // Show product if it matches
                }
            }
        });


  
  document.getElementById('quantity0').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1800.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price0').innerText = total;
  });
  
  document.getElementById('quantity1').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 2000.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price1').innerText = total;
  });
  
  document.getElementById('quantity2').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1950.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price2').innerText = total;
  });
  
  document.getElementById('quantity3').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 2200.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price3').innerText = total;
  });
  
  document.getElementById('quantity4').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 800.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price4').innerText = total;
  });
  
  document.getElementById('quantity5').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1350.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price5').innerText = total;
  });
  
  document.getElementById('quantity6').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1170.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price6').innerText = total;
  });
  
  document.getElementById('quantity7').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1999.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price7').innerText = total;
  });
  
  document.getElementById('quantity8').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1150.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price8').innerText = total;
  });
  document.getElementById('quantity9').addEventListener('input', function() {
    const quantity = parseInt(this.value);
    const price = 1150.00;
    const total = (quantity * price).toFixed(2);
    document.getElementById('total-price9').innerText = total;
  });
  