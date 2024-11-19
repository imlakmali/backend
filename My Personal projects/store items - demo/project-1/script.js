document.getElementById('itemForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('itemName').value;
    const price = document.getElementById('itemPrice').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `${name} - $${price} <button class="delete">Delete</button>`;
    document.getElementById('items').appendChild(listItem);

    // Clear the input fields
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';

    // Add delete functionality
    listItem.querySelector('.delete').addEventListener('click', function () {
        listItem.remove();
    });
});
