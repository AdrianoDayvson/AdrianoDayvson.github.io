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
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Home');
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
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Courses');
}

function hiddenAllotherSocial(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        }
      else{
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Social');
}

function hiddenAllotherAcadProj(sender){
  $( ".cardshome" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardscourses" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardsocial" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        }
      else{
        $( this ).addClass( "flipped");
      }
  });
  $( ".cardacadproj" ).each(function() {
      if ($( this ).hasClass('flipped')) {
        $( this ).removeClass( "flipped");
        }
      else{
      }
  });
  $(".demo-drawer").attr('aria-hidden', 'true');
  $(".demo-drawer").removeClass('is-visible');
  $(".mainspan").text('Academic Projects');
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
  var dima = parseFloat($("#dima").val());
  var dimb = parseFloat($("#dimb").val());
  var tf = parseFloat($("#tf").val());
  var ta = parseFloat($("#ta").val());
  var lf = parseFloat($("#lf").val());
  var la = parseFloat($("#la").val());
  var tchcol= parseFloat($("#tchcol").val());
  var ME = parseFloat($("#ME").val());
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
  if (dima && dimb && tf && ta && lf && la && tchcol && ME) {
    while (converg>0.001){
        A3 = be*tchcol;
        LN = (A1*(tchcol+la+tf/2)+A2*(tchcol+la/2)+A3*(tchcol/2))/(A1+A2+A3);
        console.log(LN);
        I = lf*Math.pow(tf,3)/12+A1*Math.pow(LN-tchcol-la-tf/2,2)+la*Math.pow(ta,3)/12+A2*Math.pow(LN-tchcol-la/2,2)+lf*Math.pow(tf,3)/12+A3*Math.pow(LN-tchcol/2,2);
        console.log(I);
        sigef=Math.pow(Math.PI,2)*ME*I/((A1+A2+A3)*dima);
        bec=1.9*tchcol*Math.sqrt(ME/sigef);
        converg=Math.abs(be-bec);
        be = bec;
    }
    siga=((be*tchcol+(A1+A2))/(dimb*tchcol+(A1+A2)))*sigef;
    document.getElementById("flamboutput").innerHTML = "&#963<sub>a</sub> = "
        +siga.toExponential(2).toString()+" Pa, b<sub>e</sub> = "+be.toExponential(2).toString()+" m";
  }
});


$(".estrutural1").click(function() {
    if (document.getElementById("chkbox1").checked==true){
        document.getElementById("cb1").click();
    }
    if (document.getElementById("chkbox2").checked==true){
        document.getElementById("cb2").click();
    }
    if (document.getElementById("chkbox3").checked==true){
        document.getElementById("cb3").click();
    }
    if (document.getElementById("chkbox4").checked==true){
        document.getElementById("cb4").click();
    }
});

$(".estrutural2").click(function() {
    if (document.getElementById("chkbox5").checked==true){
        document.getElementById("cb5").click();
    }
    if (document.getElementById("chkbox6").checked==true){
        document.getElementById("cb6").click();
    }
    if (document.getElementById("chkbox7").checked==true){
        document.getElementById("cb7").click();
    }
    if (document.getElementById("chkbox8").checked==true){
        document.getElementById("cb8").click();
    }
});

(function() {

  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#toast-message');
  var showToastButton = document.querySelector('#show-toast');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {
      message: 'Copyright 2016 - Adriano Dayvson Marques Ferreira. Todas as ferramentas presentes na página são para fins acadêmicos. O autor não se responsabiliza pelo uso de qualquer ferramenta ou informação contida no site.',
      timeout: 8000,
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());