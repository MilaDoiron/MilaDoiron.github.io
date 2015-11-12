$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 700) {

            $('#tomas').addClass('animated');
            $('#tomas').addClass('rollIn');
            
        }
        
       

    });
}); 