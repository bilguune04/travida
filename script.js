function search() {
  alert("Search button clicked!");
}

function goExplore() {
  window.location.href = "explore.html";
}

function goDetail() {
  window.location.href = "detail.html";
}



const input = document.getElementById('tripTypeInput');
const dropdown = document.getElementById('tripDropdown');
const items = dropdown.querySelectorAll('.dropdown-item');

// Input дээр click хийхэд dropdown гаргах
input.addEventListener('focus', () => {
  dropdown.style.display = 'block';
});

// Dropdown item дээр click хийхэд input-д оруулах
items.forEach(item => {
  item.addEventListener('click', () => {
    input.value = item.textContent;
    dropdown.style.display = 'none';
  });
});

// Input focus алдагдвал dropdown хаагдах
input.addEventListener('blur', () => {
  setTimeout(() => { // click хийх боломж олгох
    dropdown.style.display = 'none';
  }, 100);
});
