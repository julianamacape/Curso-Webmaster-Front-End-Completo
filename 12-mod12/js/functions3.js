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

    let picture = $('#div1 img')
    let indiceAtual = 0
    let indiceMaximo = picture.length;

    initSlider();

    function initSlider(){
        picture.eq(0).fadeIn(2000);
        setInterval(function(){
            alternarSlider();
        },5000);
    };

    
    function alternarSlider(){
        picture.eq(indiceAtual).fadeOut(2000);
        indiceAtual+=1
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0
        }
        picture.eq(indiceAtual).fadeIn(2000);
        
    }

    
})