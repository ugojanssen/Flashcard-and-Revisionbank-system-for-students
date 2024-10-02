document.getElementById('menu-btn').addEventListener('click', function() { // Click on menu button
    var sidebar = document.getElementById('sidebar'); // Get the sidebar 
    var menuBtn = document.getElementById('menu-btn'); // Get the menu button

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        menuBtn.classList.remove('shift');
    } else {
        sidebar.classList.add('open');
        menuBtn.classList.add('shift');
    }
});