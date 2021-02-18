$('document').ready(function(){
    $('#submit').click(function(){
        var flag=1
        $("input[type=text]").each(function(){
            if($(this).val() ==''){
            flag=0;
            }
        
        });
        if(flag==0){
            alert('Please fill the form')
            return false
        }
    });
});