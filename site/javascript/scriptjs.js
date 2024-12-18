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

// Function to handle the bundle quick select
function quickSelectBundle() {
  const selects = document.querySelectorAll('.selection-quantite');

    selects.forEach((select) => {
        const parentText = select.closest('.list-group-item').querySelector('h5').textContent;

        // Set quantities for bundle items
        if (parentText.includes('USB-C (Aluminum)')) {
            select.value = "2"; // 2x USB-C Aluminum
        } else if (parentText.includes('USB-A') || parentText.includes('HDMI (3rd Gen)')) {
            select.value = "1"; // 1x USB-A and 1x HDMI
        }

        // Update the active state for the item
        updateActiveState(select);
    });
}

// Function to update the active class based on the select value
function updateActiveState(select) {
    const listItem = select.closest('.list-group-item');
    // Add or remove the 'active' class based on the value
    if (select.value > "0") {
        listItem.classList.add('active');
    } else {
        listItem.classList.remove('active');
    }
}

// Get the radio input inside the clicked item
function handleItemClick(clickedItem) {
  const radioInput = clickedItem.querySelector('input[type="radio"]');

  // Remove active class from all items in the same group
  clickedItem.parentNode.querySelectorAll('.list-group-item').forEach(item => {
      item.classList.remove('active');
  });

  // Add active class to the clicked item
  clickedItem.classList.add('active');

  // Check the radio button
  if (radioInput) {
      radioInput.click();
  }
}

// Function to handle the bundle quick select
function quickSelectBundle() {
  const selects = document.querySelectorAll('.selection-quantite');

  selects.forEach((select) => {
      const parentText = select.closest('.list-group-item').querySelector('h5').textContent;

      // Set quantities for bundle items
      if (parentText.includes('USB-C (Aluminum)')) {
          select.value = "2"; // 2x USB-C Aluminum
      } else if (parentText.includes('USB-A') || parentText.includes('HDMI (3rd Gen)')) {
          select.value = "1"; // 1x USB-A and 1x HDMI
      }

      // Update the active state for the item
      updateActiveState(select);
  });
}

// Initialisation du prix total
let totalPrice = 0;

// Fonction pour mettre à jour le total
function updateCart(selectedOption) {
  // Récupérer le prix de l'option sélectionnée
  const optionPrice = parseFloat(selectedOption.getAttribute('data-price'));

  // Mettre à jour le prix total
  totalPrice = optionPrice;

  // Afficher le prix total dans l'élément avec l'ID prixTotal
  document.getElementById('prixTotal').innerText = 'Total: ${totalPrice.toFixed(2)}€';
}