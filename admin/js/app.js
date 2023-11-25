// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC4EZmE9IDWwXYp5Fiw7UifheocaJM_c_Q",
    authDomain: "webapptestapi.firebaseapp.com",
    projectId: "webapptestapi",
    storageBucket: "webapptestapi.appspot.com",
    messagingSenderId: "983501289638",
    appId: "1:983501289638:web:bec9312b43d8e3225d1c67"
};
  


firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
var database = firebase.database();

// Reference to Firebase Storage
var storageRef = firebase.storage().ref();

// Reference to Firebase Realtime Database
var databaseRef = firebase.database().ref("shoes");

// Function to update an item
function updateItem() {
    var itemId = document.getElementById('itemId').value;
    var itemName = document.getElementById('itemName').value;

    // Update item in Firebase
    database.ref('shoes/' + itemId).update({
        name: itemName
    });
}

// Function to remove an item
function removeItem() {
    var itemId = document.getElementById('itemId').value;

    // Remove item from Firebase
    database.ref('shoes/' + itemId).remove();
}

// Function to display items from Firebase
function displayItems() {
    var itemList = document.getElementById('item-list');

    // Clear previous items
    itemList.innerHTML = "";

    // Retrieve items from Firebase
    databaseRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var shoeKey = childSnapshot.key;
            var shoeData = childSnapshot.val();

            // Display item
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            // Create a row
            var row = document.createElement('div');
            row.className = 'row';

            // Image column
            var imageCol = document.createElement('div');
            imageCol.className = 'col-md-3';
            var shoeImage = document.createElement('img');
            shoeImage.src = shoeData.image; // Use the image URL from the database
            shoeImage.alt = 'Shoe Image';
            shoeImage.className = 'img-fluid rounded';
            shoeImage.style.height = '100%';
            shoeImage.style.width = '120%';
            imageCol.appendChild(shoeImage);
            row.appendChild(imageCol);

            // Details column
            var detailsCol = document.createElement('div');
            detailsCol.className = 'col-md-9';
            var details = document.createElement('div');
            details.innerHTML = `
                <h4>${shoeData.name}</h4>
                <p><small>Current Price: </small><strong>$${parseFloat(shoeData.currentPrice).toFixed(2)}</strong></p>
                <p><small>Past Price:</small> <del> $${parseFloat(shoeData.pastPrice).toFixed(2)}</del></p>
            `;
            detailsCol.appendChild(details);
            row.appendChild(detailsCol);

            // Append the row to the list item
            listItem.appendChild(row);

            // Append the list item to the list
            itemList.appendChild(listItem);
        });
    });
}

// Display items on page load
displayItems();


// Function to display items in the Update Item tab
function displayUpdateItems() {
    var updateItemList = document.getElementById('update-item-list');

    // Clear previous items
    updateItemList.innerHTML = "";

    // Retrieve items from Firebase
    databaseRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var shoeKey = childSnapshot.key;
            var shoeData = childSnapshot.val();

            // Display item
            var listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            // Create a row
            var row = document.createElement('div');
            row.className = 'row align-items-center'; // Center align items vertically

            // Image column
            var imageCol = document.createElement('div');
            imageCol.className = 'col-md-3';
            var shoeImage = document.createElement('img');
            shoeImage.src = shoeData.image; // Use the image URL from the database
            shoeImage.alt = 'Shoe Image';
            shoeImage.className = 'img-fluid rounded';
            shoeImage.style.height = '100%';
            shoeImage.style.width = '120%';
            imageCol.appendChild(shoeImage);
            row.appendChild(imageCol);

            // Details column
            var detailsCol = document.createElement('div');
            detailsCol.className = 'col-md-6'; // Adjust the column width as needed
            var details = document.createElement('div');
            details.innerHTML = `
                <h4>${shoeData.name}</h4>
                <p>Current Price: <strong>$${parseFloat(shoeData.currentPrice).toFixed(2)}</strong></p>
                <p>Past Price: <del>$${parseFloat(shoeData.pastPrice).toFixed(2)}</del></p>
            `;
            detailsCol.appendChild(details);
            row.appendChild(detailsCol);

            // Buttons column
            var buttonsCol = document.createElement('div');
            buttonsCol.className = 'col-md-3 text-right d-flex flex-column justify-content-between';
            var deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.onclick = function () { deleteItemWithConfirmation(shoeKey); };
            deleteButton.className = 'btn btn-danger mb-2'; // Add margin-bottom for spacing between buttons
            deleteButton.innerHTML = '<i class="bi bi-trash"></i> Delete';
            var editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.onclick = function () { openEditModal(shoeKey, shoeData.name); };
            editButton.className = 'btn btn-primary';
            //editButton.innerHTML = '<i class="bi bi-pencil"></i> Edit';
            buttonsCol.appendChild(deleteButton);
            //buttonsCol.appendChild(editButton);
            row.appendChild(buttonsCol);

            // Append the row to the list item
            listItem.appendChild(row);

            // Append the list item to the list
            updateItemList.appendChild(listItem);
        });
    });
}

// Display items on page load
displayUpdateItems();


// Function to delete an item with SweetAlert confirmation
function deleteItemWithConfirmation(itemId) {
    // Display SweetAlert confirmation dialog
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            // User confirmed, delete the item
            deleteItem(itemId);
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

// Function to delete an item
function deleteItem(itemId) {
    // Retrieve item details from Firebase
    database.ref('shoes/' + itemId).once('value')
        .then(function(snapshot) {
            var itemData = snapshot.val();
            
            // Check if the item exists
            if (itemData) {
                // Remove item from Firebase
                database.ref('shoes/' + itemId).remove();

                // Get the image URL from the item data
                var imageUrl = itemData.image;

                // Extract the path from the image URL
                var path = imageUrl.split("images%2F")[1].split("?")[0];

                // Delete associated image from Firebase Storage
                var storageRef = firebase.storage().ref().child('images/' + path);
                storageRef.delete().then(function () {
                    console.log("Image deleted successfully");
                }).catch(function (error) {
                    console.error("Error deleting image:", error);
                });

                // Refresh the displayed items
                displayUpdateItems();
                displayItems();
            } else {
                console.log("Item not found");
            }
        })
        .catch(function(error) {
            console.error("Error fetching item details:", error);
        });
}





// Function to preview the selected image
function previewImage() {
    var input = document.getElementById('itemImage');
    var preview = document.getElementById('preview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// Function to add an item
function addItem() {
    // Get input values
    var itemName = document.getElementById("itemName").value;
    var itemCurrentPrice = document.getElementById("itemCurrentPrice").value;
    var itemPastPrice = document.getElementById("itemPastPrice").value;
    var itemImage = document.getElementById("itemImage").files[0];

    // Validate input
    if (!itemName || !itemCurrentPrice) {
        alert("Please fill in all required fields.");
        return;
    }

    // Upload image to Firebase Storage
    var imageRef = storageRef.child("images/" + itemImage.name);
    imageRef.put(itemImage).then(function (snapshot) {
        // Get the image download URL
        return snapshot.ref.getDownloadURL();
    }).then(function (imageUrl) {
        // Add item details to Firebase Realtime Database
        var newItemRef = databaseRef.push();
        newItemRef.set({
            name: itemName,
            currentPrice: itemCurrentPrice,
            pastPrice: itemPastPrice,
            image: imageUrl,
        });

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${itemName} added successfully`,
            showConfirmButton: false,
            timer: 1500
          });

        // Refresh the displayed items
        displayUpdateItems();
        displayItems();

        // Clear the form
        document.getElementById("add-item-form").reset();
        // Reset the image preview
        document.getElementById('preview').src = '';
        document.getElementById('preview').style.display = 'none';
    }).catch(function (error) {
        console.error("Error uploading image: ", error);
    });
}



// Function to fetch and display order details from Firebase
async function fetchAndDisplayOrders() {
    try {
        const ordersRef = database.ref('orderdetails');
        const snapshot = await ordersRef.once('value');
        const orderList = document.getElementById('order-list');

        if (snapshot.exists()) {
            const ordersData = snapshot.val();

            // Convert ordersData into an array of objects
            const ordersArray = Object.entries(ordersData).map(([orderId, order]) => ({ ...order, orderId }));

            // Sort ordersArray based on orderDate in descending order (newest first)
            ordersArray.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

            for (const { orderId, name, orderDate, phoneNumber, orderStatus } of ordersArray) {
                const orderCard = document.createElement('div');
                orderCard.className = 'card';

                const cardHeader = document.createElement('div');
                cardHeader.className = 'card-header';
                cardHeader.textContent = `Order Status: ${orderStatus}`;
                // Set background and text color based on order status
                cardHeader.style.backgroundColor = orderStatus === 'open' ? 'green' : 'red';
                cardHeader.style.color = 'black';
                orderCard.appendChild(cardHeader);

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                cardBody.innerHTML = `
                    <p>Name: <strong>${name}</strong></p>
                    <p>Phone Number: <strong>${phoneNumber}</strong></p>
                    <p>Order Date: <strong>${new Date(orderDate).toLocaleString()}</strong></p>
                    <button class="btn btn-success btn-change-status" onclick="changeOrderStatus('${orderId}', '${orderStatus}')">
                        Change Order Status
                    </button>
                `;
                // cardBody.appendChild(orderInfo);
                orderCard.appendChild(cardBody);

                orderList.appendChild(orderCard);
            }
        } else {
            orderList.innerHTML = '<p>No orders available.</p>';
        }
    } catch (error) {
        console.error('Error fetching order details:', error);
    }
}




// Function to change order status
function changeOrderStatus(orderId, currentStatus) {
    const newStatus = currentStatus === 'open' ? 'closed' : 'open';

    // Update order status in Firebase
    database.ref(`orderdetails/${orderId}/orderStatus`).set(newStatus);

    // Refresh the entire page
    window.location.reload();
}


fetchAndDisplayOrders();