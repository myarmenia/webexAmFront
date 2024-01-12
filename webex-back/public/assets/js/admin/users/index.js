$(function () {
  $('.present').on("click", function () {
    $.ajax({
      type: "get",
      url: "user-present",
      cache: false,
      success: function (data) {

        

      }
    });

  })

})
