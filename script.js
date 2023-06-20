function toggleMenu() {
    var menuContent = document.getElementById('menu-content');
    menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';
  }

  // Function to show the corresponding content when a menu item is clicked
  function showContent(contentId) {
    var content = document.getElementById(contentId);
    var paragraphs = document.getElementsByClassName('menu-content');
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.display = 'none';
    }
    content.style.display = 'block';
  }

  var hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.addEventListener('click', toggleMenu);