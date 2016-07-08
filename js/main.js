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


$('#flambchapas').change(function() {
  var tipo = $("#tipo").val();
  var dima = $("#dima").val();
  var dimb = $("#dimb").val();
  var tf = $("#tf").val();
  var ta = $("#ta").val();
  var lf = $("#lf").val();
  var la = $("#la").val();
  var tchcol= $("#tchcol").val();
  var ME = $("#ME").val();
  var be=0.8*dimb;
  var LN;
  var I;
  var sigef;
  var bec;
  var A1 = tf*lf;
  var A2 = ta*la;
  var A3;
  var converg=1;
  var siga;
  if (dima && dimb && tf && ta && lf && la && tchcol) {
    while (converg>0.001){
        A3 = be*tchcol;
        LN = (A1*(tchcol+la+tf/2)+A2*(tchcol+la/2)+A3*(tchcol/2))/(A1+A2+A3);
        I = lf*Math.pow(tf,3)/12+A1*Math.pow(LN-tchcol-la-tf/2,2)+la*Math.pow(ta,3)/12
        +A2*Math.pow(LN-tchcol-la/2,2)+lf*Math.pow(tf,3)/12+A3*Math.pow(LN-tchcol/2,2);
        sigef=Math.pow(Math.PI,2)*ME*I/((A1+A2+A3)*dima);
        bec=1.9*tchcol*Math.sqrt(ME/sigef);
        converg=Math.abs(be-bec);
        be = bec;
    }
    siga=((be*tchcol+(A1+A2))/(dimb*tchcol+(A1+A2)))*sigef;
    console.log(siga);
    document.getElementById("flamboutput").innerHTML = "&#963<sub>a</sub> = "
        +be.toFixed(2).toString()+", b<sub>e</sub> = ";
  }
});