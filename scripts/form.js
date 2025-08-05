const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product options if on form page
function populateProductOptions() {
  const selectElement = document.getElementById('product');
  if (!selectElement) return;

  // Clear all options except the placeholder (assumed first option)
  selectElement.length = 1;

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

// Increment and display review count if on review.html page
function incrementReviewCount() {
  if (!window.localStorage) return;

  let count = localStorage.getItem('reviewCount');
  count = count ? parseInt(count, 10) : 0;
  count++;
  localStorage.setItem('reviewCount', count);

  const displayElement = document.getElementById('reviewCount');
  if (displayElement) {
    displayElement.textContent = `Reviews submitted: ${count}`;
  }
}

// Run appropriate functions depending on page content
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('product')) {
    populateProductOptions();
  }
  if (document.getElementById('reviewCount')) {
    incrementReviewCount();
  }
});
