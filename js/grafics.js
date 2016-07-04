
      google.charts.load('current', {'packages':['line', 'corechart']});
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart2);
      google.charts.setOnLoadCallback(function() {
        drawChart3(30,50,10,30);
        });
      google.charts.setOnLoadCallback(function() {
        drawChart4(100,60,40,235);
        });
    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Posição Longitudinal');
      data.addColumn('number', "Massa");
      data.addColumn('number', "Empuxo");
      data.addColumn('number', "Carga Líquida");

      data.addRows([
          [0,0,0,0],
          [0,0,-88.352,0],
          [3.057,158.012,-100.078,28],
          [6.057,168.071,-107.143,57.927],
          [12.081,182.818,-123.748,59.070],
          [18.105,198.419,-137.444,60.975],
          [24.129,212.708,-151.031,61.677],
          [30.153,228.205,-164.280,63.925],
          [36.177,241.106,-176.971,64.135],
          [42.202,253.227,-189.029,64.198],
          [48.226,184.661,-200.435,-15.774],
          [54.250,192.884,-211.239,-18.355],
          [60.274,202.414,-221.525,-19.111],
          [66.298,211.492,-231.300,-19.809],
          [72.322,220.146,-240.606,-20.460],
          [78.346,228.386,-249.457,-21.071],
          [84.370,236.239,-257.776,-21.536],
          [90.394,220.576,-265.474,-44.898],
          [96.418,226.819,-272.274,-45.455],
          [102.443,231.993,-277.684,-45.691],
          [103.045,232.451,-278.206,-45.755],
          [108.467,235.788,-281.591,-45.803],
          [114.491,237.876,-283.752,-45.876],
          [120.515,237.735,-283.663,-45.929],
          [126.539,246.023,-280.172,-34.150],
          [132.563,240.633,-273.973,-33.340],
          [138.587,232.628,-265.036,-32.408],
          [144.611,222.128,-253.155,-31.028],
          [145.214,220.967,-251.798,-30.831],
          [150.635,209.325,-238.291,-28.966],
          [156.659,194.820,-221.342,-26.523],
          [162.683,179.310,-203.386,-24.076],
          [168.708,212.197,-184.639,27.558],
          [174.732,192.463,-165.606,26.857],
          [180.756,172.766,-146.804,25.962],
          [186.780,153.396,-128.466,24.931],
          [192.804,134.573,-110.793,23.780,],
          [198.828,116.458,-93.963,22.495],
          [204.852,99.302,-78.113,21.188],
          [210.876,84.242,-63.316,20.925],
          [216.298,70.430,-50.869,19.561],
          [216.900,68.959,-49.549,19.410],
          [222.924,54.593,-36.697,17.895],
          [228.949,40.968,-24.595,16.373],
          [234.973,27.860,-13.056,14.805],
          [240.997,14.196,-1.112,13.084],
          [245,0,0,0]
      ]);

      var classicOptions = {
        title: 'Cargas Atuantes em um Navio [t/m]',
        vAxis: {
          viewWindow: {
            max: 300,
            min: -300,
          },
          title: 'Cargas [t/m]',
        },
          hAxis: {
            title: 'Posição Longitudinal [m]'
            },
      };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart.draw(data, classicOptions);
      }

    function drawChart2() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Posição Longitudinal');
      data.addColumn('number', "Cortante");
      data.addColumn('number', "Momento");
      data.addRows([
      [0,0,0],
      [0.257037,-0.009483,-0.001193],
      [1.026129,-0.075941,-0.033967],
      [2.304455,-0.189273,-0.203356],
      [4.086735,-0.353307,-0.686696],
      [4.999999,-0.440093,-1.048897],
      [5.000001,-0.440093,-1.048898],
      [5.681488,-0.400721,-1.335333],
      [6.365661,-0.361093,-1.595872],
      [7.679489,-0.284730,-2.019994],
      [9.131864,-0.199917,-2.371795],
      [10.857864,-0.098603,-2.629248],
      [12.373975,-0.009169,-2.710796],
      [12.499999,-0.001717,-2.711470],
      [12.500001,-0.001717,-2.711470],
      [15.000000,0.149105,-2.526990],
      [16.078674,0.214485,-2.330787],
      [19.823624,0.442750,-1.099764],
      [20.230747,0.467681,-0.914396],
      [24.813105,0.749508,1.874852],
      [24.999999,0.761052,2.016028],
      [25.000000,0.761052,2.016029],
      [25.000001,0.761052,2.016030],
      [29.806963,1.067294,6.410898],
      [30.176376,1.090900,6.809567],
      [35.000000,1.399721,12.816951],
      [35.191752,1.412014,13.086547],
      [39.142136,1.665498,19.165613],
      [40.945377,1.781231,22.273433],
      [42.320511,1.869470,24.783669],
      [44.318512,1.997739,28.647209],
      [44.999999,2.041477,30.023612],
      [45.000001,2.041477,30.023616],
      [47.043762,2.009959,34.163901],
      [47.044171,2.009953,34.164723],
      [49.999999,1.963208,40.037003],
      [50.000001,1.963208,40.037007],
      [53.462662,1.900819,46.727254],
      [53.463095,1.900811,46.728077],
      [60.175293,1.775443,59.066610],
      [60.175749,1.775434,59.067421],
      [62.284882,1.734887,62.769493],
      [62.284958,1.734885,62.769626],
      [62.284959,1.734885,62.769627],
      [62.285422,1.734876,62.770430],
      [62.534775,1.730048,63.202450],
      [62.534851,1.730046,63.202582],
      [62.534852,1.730046,63.202583],
      [62.535316,1.730037,63.203385],
      [62.784668,1.725201,63.634196],
      [62.784744,1.725200,63.634328],
      [62.784745,1.725200,63.634329],
      [62.785210,1.725191,63.635130],
      [67.154099,1.639311,70.985128],
      [67.154578,1.639302,70.985915],
      [74.370377,1.492873,82.287195],
      [74.370879,1.492863,82.287945],
      [81.794479,1.336634,92.791203],
      [81.795004,1.336623,92.791904],
      [84.999999,1.267752,96.965725],
      [85.000001,1.267752,96.965728],
      [85.681480,1.238182,97.819666],
      [87.499999,1.159029,99.999531],
      [87.500001,1.159029,99.999533],
      [87.679489,1.151020,100.206864],
      [89.396457,1.074152,102.117307],
      [90.857864,1.008532,103.639275],
      [95.000000,0.821988,107.430814],
      [97.143988,0.724677,109.089040],
      [99.823616,0.602744,110.867801],
      [105.000000,0.366248,113.376247],
      [105.005773,0.365983,113.378361],
      [110.176384,0.128942,114.658400],
      [112.949491,0.001321,114.839289],
      [115.000000,-0.093053,114.745441],
      [119.142136,-0.282282,113.968505],
      [120.942495,-0.364789,113.386202],
      [122.320511,-0.427829,112.840218],
      [124.318520,-0.518245,111.895283],
      [124.999999,-0.548904,111.531730],
      [125.000001,-0.548904,111.531729],
      [125.681480,-0.572168,111.149802],
      [127.679489,-0.640410,109.938627],
      [128.951952,-0.684106,109.096053],
      [130.857864,-0.749020,107.730535],
      [135.000000,-0.886860,104.342923],
      [136.944943,-0.951203,102.555650],
      [139.823616,-1.044790,99.683028],
      [144.888621,-1.203740,93.989120],
      [145.000000,-1.207186,93.854867],
      [150.176380,-1.362303,87.205050],
      [151.395892,-1.397604,85.522300],
      [151.645784,-1.404808,85.172175],
      [151.895676,-1.411991,84.820252],
      [152.750346,-1.436390,83.603122],
      [155.000000,-1.498884,80.301669],
      [159.142136,-1.608083,73.867337],
      [160.497813,-1.642455,71.664130],
      [162.320507,-1.687469,68.629592],
      [164.318516,-1.734992,65.210736],
      [164.999999,-1.750788,64.023053],
      [165.681484,-1.731716,62.836482],
      [165.000001,-1.750788,64.023049],
      [167.679493,-1.676135,59.432221],
      [168.099197,-1.664528,58.731217],
      [170.857864,-1.588728,54.244162],
      [175.000000,-1.476567,47.896137],
      [175.523257,-1.462547,47.127232],
      [179.823620,-1.348936,41.082456],
      [182.739491,-1.273420,37.259516],
      [185.000000,-1.215854,34.446224],
      [189.718245,-1.098653,28.986481],
      [190.176381,-1.087474,28.485754],
      [195.000000,-0.972549,23.517845],
      [196.430844,-0.939294,22.150211],
      [199.142136,-0.877515,19.687528],
      [202.320508,-0.807233,17.010461],
      [202.849704,-0.795704,16.586380],
      [204.318517,-0.764065,15.441020],
      [204.999999,-0.749592,14.925322],
      [205.000001,-0.749592,14.925321],
      [208.948308,-0.663349,12.136347],
      [208.948448,-0.663346,12.136254],
      [214.701903,-0.544328,8.662672],
      [214.702015,-0.544325,8.662611],
      [220.086676,-0.440479,6.011723],
      [220.086763,-0.440477,6.011684],
      [225.080496,-0.350685,4.036749],
      [225.080562,-0.350684,4.036726],
      [229.662846,-0.273828,2.606330],
      [229.662893,-0.273827,2.606317],
      [233.814894,-0.208828,1.604733],
      [233.814925,-0.208827,1.604726],
      [237.519577,-0.154676,0.931763],
      [237.519594,-0.154676,0.931760],
      [240.505928,-0.113830,0.531129],
      [240.505933,-0.113830,0.531128],
      [240.755821,-0.110531,0.503120],
      [240.755825,-0.110531,0.503120],
      [240.761677,-0.110454,0.502474],
      [240.761680,-0.110454,0.502473],
      [241.005714,-0.107252,0.475934],
      [241.005717,-0.107252,0.475933],
      [243.527866,-0.075953,0.245147],
      [244.999999,-0.058675,0.146196],
      [245.000001,-0.058675,0.146196],
      [245.806782,-0.049207,0.102757],
      [247.589054,-0.028292,0.033869],
      [248.867367,-0.013291,0.007416],
      [249.636459,-0.004266,0.000740],
      [249.893173,-0.001254,0.000056],
      [249.893174,-0.001254,0.000056],
      [250.00000,0.000000,0.000000]
      ]);

      var classicOptions = {
        title: 'Cargas Atuantes em um Navio [t/m]',
        vAxis: {
          title: 'Cargas [t/m]',
        },
          hAxis: {
            title: 'Posição Longitudinal [m]'
            },
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: {targetAxisIndex: 0},
          1: {targetAxisIndex: 1}
          },
        // Adds labels to each axis; they don't have to match the axis names.
          vAxes: {
            0: {title: 'Esforço Cortante [tf]'},
            1: {title: 'Momento [tf.m]'}
          },
      };
        var materialChart = new google.visualization.LineChart(document.getElementById('curve_chart2'));
        materialChart.draw(data, classicOptions);
      }
  function drawChart3(sigx,sigy,tauxy,theta){
    var circle1y = [];
    var circle1x = [];
    var sigma2 = (sigx+sigy)/2+Math.sqrt(Math.pow((sigx-sigy)/2,2)+Math.pow(tauxy,2));
    var sigma1 = (sigx+sigy)/2-Math.sqrt(Math.pow((sigx-sigy)/2,2)+Math.pow(tauxy,2));
    if (sigx==sigy) {
      thetap=45;
    }else{
      var thetap=0.5*Math.atan(2*tauxy/(sigx-sigy))*180/Math.PI;
    }
    var taumax=(sigma2-sigma1)/2;
    var raio=Math.abs((sigma1-sigma2)/2);
    var np = 360;
    var data = new google.visualization.DataTable();
    data.addColumn('number', '');
    data.addColumn('number', '');
    data.addColumn('number', '2\u03B8');
    data.addColumn('number', '\u03C3\u03B8, \u03C4\u03B8');
    data.addColumn('number', '\u03C3x, -\u03C4xy');
    data.addColumn('number', '\u03C3y, \u03C4xy');
    data.addColumn('number', '\u03C31');
    data.addColumn('number', '\u03C32');
    data.addColumn('number', '');
    data.addColumn('number', '');
    data.addColumn('number', '');
    data.addColumn('number', '');
    var sigxt=(sigx+sigy)/2+(sigx-sigy)*Math.cos(2*theta*Math.PI/180)/2+tauxy*Math.sin(2*theta*Math.PI/180);
    var sigyt=(sigx+sigy)/2-(sigx-sigy)*Math.cos(2*theta*Math.PI/180)/2-tauxy*Math.sin(2*theta*Math.PI/180);
    var tauxyt=(sigx-sigy)*Math.sin(2*theta*Math.PI/180)/2-tauxy*Math.cos(2*theta*Math.PI/180);
    for (i=0;i<np+1;i++){
      circle1y[i]=raio*Math.cos(2*Math.PI*i/np);
      circle1x[i]=sigma1+raio*(1+Math.sin(2*Math.PI*i/np));
      data.addRows([
      [circle1x[i],circle1y[i],{},{},{},{},{},{},{},{},{},{}],
      ]);
    }
    data.addRows([
        [sigma1+raio,{},0,{},{},{},{},{},{},{},{},{}],
        [sigxt,{},tauxyt,tauxyt,{},{},{},{},{},{},{},{}],
        [sigx,{},{},{},-tauxy,{},{},{},{},{},{},{}],
        [sigy,{},{},{},{},+tauxy,{},{},{},{},{},{}],
        [sigma1,{},{},{},{},{},0,{},{},{},{},{}],
        [sigma2,{},{},{},{},{},{},0,{},{},{},{}],
        [sigx,{},{},{},{},{},{},{},-tauxy,{},{},{}],
        [sigy,{},{},{},{},{},{},{},-tauxy,{},{},{}],
        [sigy,{},{},{},{},{},{},{},{},-tauxy,{},{}],
        [sigy,{},{},{},{},{},{},{},{},+tauxy,{},{}],
        [sigma1,{},{},{},{},{},{},{},{},{},0,{}],
        [sigy,{},{},{},{},{},{},{},{},{},-tauxy,{}],
        [sigy,{},{},{},{},{},{},{},{},{},{},-tauxy],
        [sigma2,{},{},{},{},{},{},{},{},{},{},0],
        ]);
     var classicOptions = {
        title: 'Círculo de Mohr para um estado plano de tensões',
        curveType: 'function',
        vAxis: {
          viewWindow: {
            max: raio,
            min: -raio,
          },
          title: '\u03C4',
        },
        hAxis:{
          title:'\u03C3',
        },
        series:{
          0: { pointShape: '', color:'black',visibleInLegend: false},
          1: {visibleInLegend: false},
          2:{ pointShape: 'diamond',pointSize: 10, color:'red'},
          3:{ pointShape: 'square',pointSize: 10, color:'blue'},
          4:{ pointShape: 'square',pointSize: 10, color:'blue'},
          5:{ pointShape: 'circle',pointSize: 10, color:'green'},
          6:{ pointShape: 'circle',pointSize: 10, color:'green'},
          7:{lineDashStyle: [10, 2], color:'blue',visibleInLegend: false},
          8:{lineDashStyle: [10, 2], color:'blue',visibleInLegend: false},
          9:{lineDashStyle: [10, 2], color:'green',visibleInLegend: false},
          10:{lineDashStyle: [10, 2], color:'green',visibleInLegend: false},

        }
      };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart3'));
        chart.draw(data, classicOptions);
        document.getElementById("mohroutput").innerHTML = "&#963<sub>&#952</sub> = "
        +sigxt.toFixed(2).toString()+", &#964<sub>&#952</sub> = "
        +tauxyt.toFixed(2).toString()+", &#963<sub>1</sub> = "
        +sigma1.toFixed(2).toString()+", &#963<sub>2</sub> = "
        +sigma2.toFixed(2).toString()+", &#952<sub>p</sub> = "
        +thetap.toFixed(2).toString()+", &#964<sub>max</sub> = "
        +taumax.toFixed(2).toString();
      }

  function drawChart4(sigx,sigy,tauxy,sige){
    var circle1y = [];
    var circle1x = [];
    var theta=30;
    var sigma2 = (sigx+sigy)/2+Math.sqrt(Math.pow((sigx-sigy)/2,2)+Math.pow(tauxy,2));
    var sigma1 = (sigx+sigy)/2-Math.sqrt(Math.pow((sigx-sigy)/2,2)+Math.pow(tauxy,2));
    if (sigx==sigy) {
      thetap=45;
    }else{
      var thetap=0.5*Math.atan(2*tauxy/(sigx-sigy))*180/Math.PI;
    }
    var taumax=(sigma2-sigma1)/2;
    var raio=Math.abs((sigma1-sigma2)/2);
    var np = 50;
    var data = new google.visualization.DataTable();
    var roots;
    var a;
    var b;
    var c;
    data.addColumn('number', '');
    data.addColumn('number', '');
    data.addColumn('number', '\u03C31');
    a=1;
    for (i=0;i<np+1;i++){
      circle1x[i]=i*sige/np;
      b=-circle1x[i];
      c=Math.pow(circle1x[i],2)-Math.pow(sige,2);
      roots =-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
      circle1y[i]=roots;
      data.addRows([
      [circle1x[i],circle1y[i],{}],
      ]);
    }
    for (i=1;i<np+1;i++){
      circle1y[i]=sige-i*sige/np;
      b=-circle1y[i];
      c=Math.pow(circle1y[i],2)-Math.pow(sige,2);
      roots =-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
      circle1x[i]=roots;
      data.addRows([
      [circle1x[i],circle1y[i],{}],
      ]);
    }
    for (i=1;i<2*np+1;i++){
      circle1x[i]=sige-i*sige/np;
      b=-circle1x[i];
      c=Math.pow(circle1x[i],2)-Math.pow(sige,2);
      roots =-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
      circle1y[i]=roots;
      data.addRows([
      [circle1x[i],circle1y[i],{}],
      ]);
    }
    for (i=1;i<np+1;i++){
      circle1y[i]=-sige+i*sige/np;
      b=-circle1y[i];
      c=Math.pow(circle1y[i],2)-Math.pow(sige,2);
      roots =-b/2/a-Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
      circle1x[i]=roots;
      data.addRows([
      [circle1x[i],circle1y[i],{}],
      ]);
    }
    for (i=1;i<2*np+1;i++){
      circle1x[i]=-sige+i*sige/np;
      b=-circle1x[i];
      c=Math.pow(circle1x[i],2)-Math.pow(sige,2);
      roots =-b/2/a+Math.pow(Math.pow(b,2)-4*a*c,0.5)/2/a;
      circle1y[i]=roots;
      data.addRows([
      [circle1x[i],circle1y[i],{}],
      ]);
    };
    data.addRows([
      [sigma2,{},sigma1],
      ]);
        var strength;
        if (sige>(Math.sqrt(Math.pow(sigma1,2)+Math.pow(sigma2,2)+sigma1*sigma2))){
          strength = 'As tensões atuantes são menores que a tensão de escoamento do material! <i class="material-icons">sentiment_very_satisfied</i>';
        }
        else{
          strength = strength = 'As tensões atuantes ultrapassaram a tensão de escoamento do material! <i class="material-icons">sentiment_very_dissatisfied</i>';
        };
     var classicOptions = {
        title: 'Tensões de von Mises para um estado plano de tensões',
        curveType: 'function',
        vAxis: {
          viewWindow: {
            max: 1.5*sige,
            min: -1.5*sige,
          },
          title: '\u03C31',
        },
        hAxis:{
          title:'\u03C32',
        },
        series:{
          0: { pointShape: '', color:'black',visibleInLegend: false},
          1: {pointShape: 'diamond',pointSize: 10, color:'red',visibleInLegend: false},
        }
      };
        var chart = new google.visualization.LineChart(document.getElementById('curve_chart4'));
        chart.draw(data, classicOptions);
        document.getElementById("critfalha").innerHTML = "&#963<sub>1</sub> = "
        +sigma1.toFixed(2).toString()+", &#963<sub>2</sub> = "
        +sigma2.toFixed(2).toString()+", &#963<sub>p</sub> = "
        +thetap.toFixed(2).toString()+", &#964<sub>max</sub> = "
        +taumax.toFixed(2).toString()+"<br />"+strength;
      }


      window.onresize = (function(){
        drawChart();
        drawChart2();
        document.getElementById("mohrinp");
        var sigx = $("#sigx").val();
        var sigy = $("#sigy").val();
        var tauxy = $("#tau").val();
        var theta = $("#teta").val();
        if(sigx && sigy && tauxy && theta){
          drawChart3(parseFloat(sigx),parseFloat(sigy),parseFloat(tauxy),parseFloat(theta));
        }else{
          drawChart3(30,50,10,30);
        }
        document.getElementById("critinp");
        var sigx1 = $("#sigx1").val();
        var sigy1 = $("#sigy1").val();
        var tauxy1 = $("#tau1").val();
        var sige1 = $("#sige1").val();
        if(sigx1 && sigy1 && tauxy1 && sige1){
          drawChart3(parseFloat(sigx1),parseFloat(sigy1),parseFloat(tauxy1),parseFloat(sige1));
        }else{
          drawChart3(100,60,40,235);
        }
      });

  function rotateCard(bt) {
    var $card =  $(bt).closest('.card');
    if ($card.hasClass('flipped')) {
        $card.removeClass('flipped');
    }
    else {
    $card.addClass('flipped');
    }
    console.log($card);
    }

    function show(nr) {
    document.getElementById("dicio").style.display="block";
}