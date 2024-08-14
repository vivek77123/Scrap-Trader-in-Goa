document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('scrollToDeals');
    var dropdownMenu = dropdown.nextElementSibling;

    dropdown.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        } else {
            dropdownMenu.classList.add('show');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });
});

