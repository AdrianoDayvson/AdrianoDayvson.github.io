function rotate_Card(btn) {
  var $card = $(btn).closest('.card-container');
  console.log($card);
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}

function refreshCalcDisplay(sender){
  var display = document.getElementById("calc-display");

  if(sender.innerHTML=="=")
  {
    display.innerHTML = eval(display.innerHTML.replace("%","/100"));
  }
  else if (sender.innerHTML=="C")
  {
    display.innerHTML = display.innerHTML.slice(0,-1);
  }
  else if (sender.innerHTML=="AC")
  {
    display.innerHTML = "";
  }
  else if (sender.innerHTML=="()")
  {//Need to be completed
    /*
    var lastChar = display.innerHTML[display.innerHTML.length-1];
    if(lastChar=="."){
      display.innerHTML = display.innerHTML + "0*(";
    }else if(lastChar=="("){
      display.innerHTML = display.innerHTML + "(";
    }else if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"){
      display.innerHTML = display.innerHTML + "(";
    }else {
      display.innerHTML = display.innerHTML + ")";
    }
    */
  }
  else
  {
    if(display.innerHTML.length>16)
    {
      if( $('#alertdiv').length==0)
      {
        $('#alert_placeholder')
        .append('<div id="alertdiv" class="alert alert-warning"><a class="close" data-dismiss="alert">×</a><span>You reach display\'s text limit! :(</span></div>');
        setTimeout(function(){$("#alertdiv").remove();}, 5000);
      }
    }
    else
    {
      display.innerHTML = display.innerHTML+sender.innerHTML;
    }
  }
}

function hiddenAllotherHome(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        console.log($(this));
        }
      else{
        console.log($(this));
      }

  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        console.log($(this));
        }
      else{
        $( this ).addClass( "flipped");
        console.log($(this));
      }
  });
}

function hiddenAllotherCourses(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        }
      else{
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
}

$(".entrada" ).change(function(){
  var sigx = $("#sigx").val();
  var sigy = $("#sigy").val();
  var tauxy = $("#tau").val();
  var theta = $("#teta").val();
  if(sigx && sigy && tauxy && theta){
    drawChart3(parseFloat(sigx),parseFloat(sigy),parseFloat(tauxy),parseFloat(theta));
  }
});

$(".entrada1" ).change(function(){
  var sigx1 = $("#sigx1").val();
  var sigy1 = $("#sigy1").val();
  var tauxy1 = $("#tau1").val();
  var sige1 = $("#sige1").val();
  if(sigx1 && sigy1 && tauxy1 && sige1){
    drawChart4(parseFloat(sigx1),parseFloat(sigy1),parseFloat(tauxy1),parseFloat(sige1));
  }
});

var $rows = $('#table tr');
$('#search').keyup(function() {

    var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;

    $rows.show().filter(function() {
        text = $(this).text().replace(/\s+/g, ' ');
        return !reg.test(text);
    }).hide();
});