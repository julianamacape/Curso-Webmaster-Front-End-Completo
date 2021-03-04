$(document).ready(function(){
  function AbrirJanela(){
      $('.overlay').fadeIn(500);
  }

  let reloadpage = function(){
    location.reload();
  }

  function MsgEnviada () {
    $('.inputcontainer').replaceWith('<p>Mensagem enviada com sucesso! <br> Entraremos em contato em breve =)</p>');
    $('.overlay form p').addClass('inputparag')
    setTimeout(reloadpage,3000)
  }

  $('button').on('click',function(){
      AbrirJanela();
  })

  $('form input[type="submit"]').on('click',function(){
      MsgEnviada();
  })
});