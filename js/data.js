const firebaseConfig = {
    apiKey: "AIzaSyC4EZmE9IDWwXYp5Fiw7UifheocaJM_c_Q",
    authDomain: "webapptestapi.firebaseapp.com",
    projectId: "webapptestapi",
    storageBucket: "webapptestapi.appspot.com",
    messagingSenderId: "983501289638",
    appId: "1:983501289638:web:bec9312b43d8e3225d1c67"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Array of shoe IDs
const shoeIds = ["shoe_one.jpg", "shoe_two.jpg", "shoe_three.jpg", "shoe_four.jpg", "shoe_five.jpg", "shoe_six.jpg", "shoe_seven.jpg", "shoe_eight.jpg"];
const latestProductContainer = document.getElementById('latest-product');
const comingProductContainer = document.getElementById('coming-products');

// Function to fetch and display the data from Firebase Realtime Database
async function fetchDataAndDisplay() {
  try {
      // Assuming you have a "shoes" path in your Realtime Database
      const shoesRef = database.ref('shoes');
      const snapshot = await shoesRef.once('value');

      // Log the response to the console
      //console.log('Response from Firebase Realtime Database:', snapshot.val());

      if (snapshot.exists()) {
          const data = snapshot.val();

          //console.log(comingProductContainer);

          for (const shoeId in data) {
              const { name, currentPrice, pastPrice, image } = data[shoeId];

              const productDiv = document.createElement('div');
              productDiv.className = 'col-lg-3 col-md-6';
              productDiv.innerHTML = `
                  <div class="single-product" onclick = "showOrderPlacementAlert('${image}', '${name}', '${currentPrice}')">
                      <img class="img-fluid" src="${image}" alt="${name} Image">
                      <div class="product-details">
                          <h6>${name}</h6>
                          <div class="price">
                              <h6>ksh ${parseFloat(currentPrice).toFixed(2)}</h6>
                              <h6 class="l-through">ksh ${parseFloat(pastPrice).toFixed(2)}</h6>
                          </div>
                          <div class="prd-bottom">
                              <a href="" class="social-info">
                                  <span class="ti-bag"></span>
                                  <p class="hover-text">add to bag</p>
                              </a>
                          </div>
                      </div>
                  </div>
              `;

              // Append the product div to both "latest-product" and "coming-products" containers
              latestProductContainer.appendChild(productDiv.cloneNode(true));
              comingProductContainer.appendChild(productDiv.cloneNode(true));
          }
      } else {
          // console.log('No data available in Firebase Realtime Database');
      }
  } catch (error) {
      //   console.error('Error fetching data from Firebase Realtime Database:', error);
  }
}

// Call the function to fetch and display data when the page loads
fetchDataAndDisplay();


// Updated showOrderPlacementAlert function
function showOrderPlacementAlert(imageUrl, imageName, itemPrice) {
    Swal.fire({
        title: "Order Placement",
        html: `
        <div style="max-width: 100%; overflow-x: hidden;">
            <p>No payment needed now, wait for admin call to confirm order</p>
            <form id="orderForm">
                <label for="name">Name:</label>
                <input type="text" id="name" class="swal2-input" required>
    
                <label for="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" class="swal2-input" required>
            </form>
        </div>`,
        showCancelButton: true,
        confirmButtonText: "Submit Order",
        cancelButtonText: "Cancel",
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Handle the form submission here
            const name = document.getElementById("name").value;
            const phoneNumber = document.getElementById("phoneNumber").value;

            // Check if inputs are not empty
            if (!name || !phoneNumber) {
                Swal.showValidationMessage("Name and Phone Number are required");
                return false;
            }

            // Return the values as an object
            return { name, phoneNumber };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            // Access the submitted values
            const { name, phoneNumber } = result.value;

            // Log the details including image URL, image name, and item price
            console.log("Name:", name);
            console.log("Phone Number:", phoneNumber);
            console.log("Image URL:", imageUrl);
            console.log("Image Name:", imageName);
            console.log("Item Price:", itemPrice);

            // Save order details to Firebase Realtime Database
            const orderDetailsRef = firebase.database().ref('orderdetails');
            const currentDate = new Date().toISOString();
            const orderData = {
                name: name,
                phoneNumber: phoneNumber,
                itemName: imageName,
                itemPrice: itemPrice,
                // imageUrl: imageUrl,
                orderDate: currentDate,
                orderStatus: "open"
            };

            orderDetailsRef.push(orderData);

            // Display success message
            Swal.fire({
                title: "Order Submitted!",
                text: "Admin will call to confirm your order.",
                icon: "success",
            });
        }
    });
}

  
  

