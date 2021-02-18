$('document').ready(function(){
    $('#top').click(function(){
        $('.header').first().css({"background-color":"blue"});
    });
    $('.sidebar').click(function(){
        $('.sidebar span').text('Leftbar');
    });
    $('.extra').click(function(){
        $('.right.column').fadeOut('slow')
    });
    
});