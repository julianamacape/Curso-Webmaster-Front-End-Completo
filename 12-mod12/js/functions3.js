$(document).ready(function(){
    
    let scrollLink = $('.scroll')
    
    scrollLink.on('click',function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        },700)
    })

    $(window).scroll(function(){
        let scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function(){
            let sectionOffset = $(this.hash).offset().top - 10;
            if (sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
})