$(document).ready(function(){
    $('.artigo01  #aumenta').hover(function(){
        $('.artigo02 p').css('font-size','30px');
    },function(){
        $('.artigo02 p').css('font-size','initial');
    })

    $('.artigo01  #diminui').hover(function(){
        $('.artigo02 p').css('font-size','6px');
    },function(){
        $('.artigo02 p').css('font-size','initial');
    });

    $('.artigo01 #some').hover(function(){
        $('.artigo02 p').css('display','none');
    },function(){
        $('.artigo02 p').css('display','block');
    })

    $('a').click(function(e){
        e.preventDefault();
    })

    $('input').focus(function(){
        $('input').css('width','600px')
    }).blur(function(){
        $('input').css('width','400px')
    })

    $('input').change(function(){
        let info = window.document.getElementById('name').value
        alert(`Prazer em te conhecer, ${info}`)
    })

    
    $('#div1').click(function(){
        alert('Você clicou na DIV1')
    })
    

    $('#div2').click(function(e){
        alert('Você clicou na DIV2')
        e.stopPropagation();
    })

    let divtest = $('.divtest')

    divtest.click(function(){
        divtest.css('background-color', 'green');
        divtest.html(divtest.html() + '<p id="parag02">Esse parágrafo foi adicionado dinamicamente em JavaScript</p>')
    });
    
});