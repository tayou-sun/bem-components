var block_sel = $('.theme');
$(window).resize(function(){
    if($(window).width() < block_sel.width()){
          block_sel.css({
                'float' : 'right'
          })
    }
});