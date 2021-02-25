

$(document).ready(function(){

    $("#menu").toggle(function(){
    
      $("#nav").stop().animate(
      
       {
         left:"0px"
         
       },500, "easeInSine");
  
    },
    
    function(){
     
     $("#nav").stop().animate(
     
       {
         left:"-310px"
       },500);
       
   });
     
  
  });