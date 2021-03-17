$(document).ready(function(){
  function AbrirJanela(){
      $('.overlay').fadeIn(500);
  }

  let reloadpage = function(){
    location.reload();
  }

  function MsgEnviada () {
    let name = $('#name').val()
    let phone = $('#phone').val()
    let email = $('#email').val()
    if (name.length == 0 || phone.length == 0 || email.length == 0) {
      alert ('Preencha todos os campos!')
    } else {
      $('.inputcontainer').replaceWith('<p>Mensagem enviada com sucesso! <br> Entraremos em contato em breve =)</p>');
      $('.overlay form p').addClass('inputparag')
      setTimeout(reloadpage,3000)
    }
    
  }

  $('button').on('click',function(){
      AbrirJanela();
      $('.overlay, form img').on('click', function(){
        reloadpage();
      })
      $('form').on('click',function(e){
        e.stopPropagation();
      })
  })

  $('form input[type="submit"]').on('click',function(){
      MsgEnviada();
  })
});