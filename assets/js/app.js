$(function() {
    $("#contactForm").submit(function(e) {
      e.preventDefault();
      $.ajax({
        url: "//formspree.io/chrz.konrad@email.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function(data){
          // Success message
          $('#success').html("<strong>Your message has been sent. Thanks! </strong>");
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function(){
          // Fail message
          $('#success').html("<strong>Oops! Something went wrong...</strong>");
          //clear all fields
          $('#contactForm').trigger("reset");
        }
      });
    });
});
