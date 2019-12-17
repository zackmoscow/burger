$(function() {
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
    
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(
        function() {
          location.reload();
        }
      );
    });
  });