let dropdownContent = document.querySelector('.dropdownContent')
let filtrerbtn = document.querySelector('.filtrerbtn')

filtrerbtn.addEventListener('click', function () {
    toggleDropdownContent()
  })

function toggleDropdownContent() {
    dropdownContent.classList.toggle('show');
  
    console.log("Toggle DropdownContent");
  }