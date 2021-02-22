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

    $('input#name').focus(function(){
        $('input#name').css('width','600px')
    }).blur(function(){
        $('input#name').css('width','400px')
    })

    $('input#name').change(function(){
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

    $('.divtest2').html('<textarea name="" id="" cols="30" rows="10"></textarea>')

    let msgbox = $('.divtest2 textarea')
    msgbox.css('width','600px').css('padding','10px').css('resize','none')
    msgbox.val('Teste da função .val()')

    $('#email').keydown(function(){
        $(this).css('background-color','black');
    });

    $('#email').keyup(function(){
        $(this).css('background-color','orange');
    });

    $('input#emailbutton').click(function(){
        let login = $('input#email').val().split('@')
        alert(`Seu nome de usuário é ${login[0]}`)
    })
    
    $('.divtest3 input').change(function(){
        let box = $(this).index() + 1
        alert(`Você escreveu na caixinha ${box}`)
    });

    $('#form2').submit(function(f){
        let input_value = $('#text2').val();
        $('#form2 div').append(input_value)
        f.preventDefault();
    });
});