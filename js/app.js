var show = false;
$('body').scroll(function () { 
    if ($('body').scrollTop()>500 && !show){
        $('nav').hide();
        $('nav').css({
            'position' : 'sticky',
            'top' : 0,
            'z-index':10,
            'box-shadow':'0 16px 35px 0 rgba(0,0,2,.08)'
        })
        $('nav').slideDown('slow').show();
        show = true;
    }
    if ($('body').scrollTop() <300 && show){
        $('nav').css({
            'position': 'relative',
            'box-shadow': 'none'
        })
        show = false;
    }
});