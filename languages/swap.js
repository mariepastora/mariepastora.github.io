$('#swapping p:gt(0)').hide();
setInterval(function(){
    $('#swapping p:first-child').fadeOut('slow')
     .next('p').fadeIn('slow')
     .end().appendTo('#swapping');}, 
     1800);