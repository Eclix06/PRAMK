function selectProduct(clickedItem) {
    // Get the radio input inside the clicked item
    const radioInput = clickedItem.querySelector('input[type="radio"]');
  
    // Remove active class from all items in the same group
    clickedItem.parentNode.querySelectorAll('.list-group-item').forEach(item => {
      item.classList.remove('active');
    });
  
    // Add active class to the clicked item
    clickedItem.classList.add('active');
  
    // Check the radio button
    radioInput.click();
  }