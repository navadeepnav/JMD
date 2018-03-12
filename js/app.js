$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
        $(".navbar").css("background" , "#333");
        document.querySelector(".brand-logo").setAttribute("src","images/logo2.png");

        // console.log("scrolled");
        }
  
        else{
            $(".navbar").css("background" , "unset");  
            document.querySelector(".brand-logo").setAttribute("src","images/logo.png");
	
        }
    })
    
  })
  document.getElementsByTagName("BODY")[0].onresize = function(){
    if(document.body.clientWidth <776){
        console.log(document.body.clientWidth );
      $(".navbar").css("background" , "#333"); 
      document.querySelector(".brand-logo").setAttribute("src","images/logo2.png");
      $(".navbar-toggle").css("color" , "#ffffff"); 
      document.querySelector(".contact-head").setAttribute("margin-top","unset");
      document.querySelector(".noo-div").setAttribute("height","unset");
  
    }
    else{
      console.log(document.body.clientWidth );
      $(".navbar").css("background" , "unset"); 
      document.querySelector(".brand-logo").setAttribute("src","images/logo.png");
      $(".navbar-toggle").css("color" , "#ffffff"); 
      document.querySelector(".contact-head").setAttribute("margin-top","15%");
      document.querySelector(".noo-div").setAttribute("height","70px");
    }
      
  }
  function initMap() {
    var jmd = {lat: 17.415425, lng:  78.575751};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: jmd
 });
var marker = new google.maps.Marker({
     position: jmd,
    map: map
    });
}