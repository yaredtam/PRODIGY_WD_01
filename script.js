$(document).ready(function() {
    // Dark mode toggle functionality
    $('#darkModeToggle').click(function() {
      $('body').toggleClass('dark-mode');
    });
  
    // Scrolling navbar color change
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('navbar-scrolled');
      } else {
        $('.navbar').removeClass('navbar-scrolled');
      }
    });
  });
  