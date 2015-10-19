$(document).ready(function(){
  $('.attending').change(function() {
    if (this.value == 'Yes') {
      $('.guest').addClass('show');
      $('.guest').removeClass('hidden');
    }
    else if (this.value == 'No') {
      $('.guest').removeClass('show');
      $('.guest').addClass('hidden');
    }
  });
  $('.bringguest').change(function() {
    if (this.value == 'Yes') {
      $('.guestname').addClass('show');
      $('.guestname').removeClass('hidden');
    }
    else if (this.value == 'No') {
      $('.guestname').removeClass('show');
      $('.guestname').addClass('hidden');
    }
  });

  $('.rsvp-button').on("click", function(){
    $('.rsvp').toggleClass("show-rsvp");
    $('.page-overlay').toggleClass("show-overlay");
  });

  $('.page-overlay').on("click", function(){
    $('.rsvp').toggleClass("show-rsvp");
    $('.page-overlay').toggleClass("show-overlay");
  });

  var nav = responsiveNav(".nav-collapse");

});