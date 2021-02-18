$('document').ready(function(){
    
    $('#bottom').click(function(){
        $('div').eq(1).show();
    });
    $('#cross').click(function(){
        $('div.popup').hide();
    });
});