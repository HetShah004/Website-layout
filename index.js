$(document).ready(function() {
   window.onscroll = function() {scrollFunction()};
   function scrollFunction() {
      var height = $(".-header").height();
      if (document.body.scrollTop > height - 50 || document.documentElement.scrollTop > height - 50) {
         $(".-header-items").css({"background-color" : "rgba(0,0,0,0.5)", "box-shadow": "0 1rem 3rem rgba(0,0,0,.175)", "padding": "10px"});
      } else {
         $(".-header-items").css({"background-color" : "transparent", "box-shadow": "none", "padding": "20px"});
      }
   }
   $(".-header-content-items-toggle-btn").click(function(){
      $(".-header-content-resp").slideDown(500);
   });
   $(".close-dropdown").click(function() {
      $(".-header-content-resp").slideUp(500);
   });
   $(".-header-content-resp-item").click(function() {
      $(".-header-content-resp").slideUp(500);
   });
   function chekWidth() {
      if (window.innerWidth > 991) {
         $(".-header-content-resp").css({"display": "none"});
      }
   }
   setInterval(chekWidth, 500);
   const imgData = ["images/img2.jpeg",
      "images/img7.jpeg",
      "images/img8.jpeg",
      "images/img9.jpeg",
      "images/img5.jpeg",
       "images/img1.jpeg"
   ];
   for (var i = imgData.length - 1; i >= 0; i--) {
      $(".-row-ourimages").append("<img src='" + imgData[i] + "' class='image col-xl-6' draggable='false' onclick='showImg(this.src)'" + ">");
   }
});