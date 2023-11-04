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
      console.log('Response from Firebase Realtime Database:', snapshot.val());
  
      if (snapshot.exists()) {
        const data = snapshot.val();
        
        console.log(comingProductContainer);
  
        for (const shoeId in data) {
          const { name, currentPrice, pastPrice } = data[shoeId];
  
          // Get a random image filename from the shoeIds array
          const randomImageFilename = shoeIds.pop();
  
          const productDiv = document.createElement('div');
          productDiv.className = 'col-lg-3 col-md-6';
          productDiv.innerHTML = `
            <div class="single-product">
              <img class="img-fluid" src="img/product/${randomImageFilename}" alt="">
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
                  <a href="" class="social-info">
                    <span class="lnr lnr-heart"></span>
                    <p class="hover-text">Wishlist</p>
                  </a>
                  <a href="" class="social-info">
                    <span class="lnr lnr-move"></span>
                    <p class="hover-text">view more</p>
                  </a>
                </div>
              </div>
            </div>
          `;
  
          // Append the product div to both "latest-product" and "coming-products" containers
          latestProductContainer.appendChild(productDiv.cloneNode(true));
          comingProductContainer.appendChild(productDiv.cloneNode(true));

        //     // console.log(comingProductContainer);
        //   // Log the name, image path, and current price to the console
        //   console.log('Product Name:', name);
        //   console.log('Image Path:', `img/product/${randomImageFilename}`);
        //   console.log('Current Price:', currentPrice);
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