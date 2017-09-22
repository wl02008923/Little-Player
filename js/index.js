var music1 = document.getElementById('music1');
var music2 = document.getElementById('music2');
var music3 = document.getElementById('music3');
var music4 = document.getElementById('music4');
var music5 = document.getElementById('music5');

//b1
$("#b1").click(function(){
  //music1
  music1.currentTime = 0;
  music1.play();
  //music2
  music2.pause();
  music2.currentTime = 0;
  //music3
  music3.pause();
  music3.currentTime = 0;
  //music4
  music4.pause();
  music4.currentTime = 0;
  //music5
  music5.pause();
  music5.currentTime = 0;
  //animate
  $("#b1").css('z-index',1);
  $("#b2").css('z-index',3);
  $("#b3").css('z-index',3);
  $("#b4").css('z-index',3);
  $("#b5").css('z-index',3);
  $("#b2").animate({
    marginTop:'6em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b3").animate({
    marginTop:'10em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b4").animate({
    marginTop:'14em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b5").animate({
    marginTop:'18em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b1").animate({
    marginTop:'-2em',
    marginLeft:'-2em',
    height:'50em',
    width:'100em'
  });
})

//b2
$("#b2").click(function(){
  //music1
  music1.pause();
  music1.currentTime = 0;
  //music2
  music2.currentTime = 0;
  music2.play();
  //music3
  music3.pause();
  music3.currentTime = 0;
  //music4
  music4.pause();
  music4.currentTime = 0;
  //music5
  music5.pause();
  music5.currentTime = 0;
  //animate
  $("#b2").css('z-index',1);
  $("#b1").css('z-index',3);
  $("#b3").css('z-index',3);
  $("#b4").css('z-index',3);
  $("#b5").css('z-index',3);
  $("#b1").animate({
    marginTop:'2em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b3").animate({
    marginTop:'10em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b4").animate({
    marginTop:'14em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b5").animate({
    marginTop:'18em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b2").animate({
    marginTop:'-2em',
    marginLeft:'-2em',
    height:'50em',
    width:'100em'
  });
})

//b3
$("#b3").click(function(){
  //music1
  music1.pause();
  music1.currentTime = 0;
  //music2
  music2.pause();
  music2.currentTime = 0;
  //music3
  music3.currentTime = 0;
  music3.play();
  //music4
  music4.pause();
  music4.currentTime = 0;
  //music5
  music5.pause();
  music5.currentTime = 0;
  //animate
  $("#b3").css('z-index',1);
  $("#b1").css('z-index',3);
  $("#b2").css('z-index',3);
  $("#b4").css('z-index',3);
  $("#b5").css('z-index',3);
  $("#b1").animate({
    marginTop:'2em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b2").animate({
    marginTop:'6em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b4").animate({
    marginTop:'14em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b5").animate({
    marginTop:'18em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b3").animate({
    marginTop:'-2em',
    marginLeft:'-2em',
    height:'50em',
    width:'100em'
  });
})

//b4
$("#b4").click(function(){
  //music1
  music1.pause();
  music1.currentTime = 0;
  //music2
  music2.pause();
  music2.currentTime = 0;
  //music3
  music3.pause();
  music3.currentTime = 0;
  //music4
  music4.currentTime = 0;
  music4.play();
  //music5
  music5.pause();
  music5.currentTime = 0;
  //animate
  $("#b4").css('z-index',1);
  $("#b1").css('z-index',3);
  $("#b2").css('z-index',3);
  $("#b3").css('z-index',3);
  $("#b5").css('z-index',3);
  $("#b1").animate({
    marginTop:'2em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b2").animate({
    marginTop:'6em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b3").animate({
    marginTop:'10em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b5").animate({
    marginTop:'18em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b4").animate({
    marginTop:'-2em',
    marginLeft:'-2em',
    height:'50em',
    width:'100em'
  });
})

//b5
$("#b5").click(function(){
  //music1
  music1.pause();
  music1.currentTime = 0;
  //music2
  music2.pause();
  music2.currentTime = 0;
  //music3
  music3.pause();
  music3.currentTime = 0;
  //music4
  music4.pause();
  music4.currentTime = 0;
  //music5
  music5.currentTime = 0;
  music5.play();
  //animate
  $("#b5").css('z-index',1);
  $("#b1").css('z-index',3);
  $("#b2").css('z-index',3);
  $("#b3").css('z-index',3);
  $("#b4").css('z-index',3);
  $("#b1").animate({
    marginTop:'2em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b2").animate({
    marginTop:'6em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b3").animate({
    marginTop:'10em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b4").animate({
    marginTop:'14em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b5").animate({
    marginTop:'-2em',
    marginLeft:'-2em',
    height:'50em',
    width:'100em'
  });
})

//RELOAD
$("#reload").click(function(){
  //music1
  music1.pause();
  music1.currentTime = 0;
  //music2
  music2.pause();
  music2.currentTime = 0;
  //music3
  music3.pause();
  music3.currentTime = 0;
  //music4
  music4.pause();
  music4.currentTime = 0;
  //music5
  music5.pause();
  music5.currentTime = 0;
  //animate
  $("#b1").css('z-index',3);
  $("#b2").css('z-index',3);
  $("#b3").css('z-index',3);
  $("#b4").css('z-index',3);
  $("#b5").css('z-index',3);
  $("#reload").css('z-index',1);
  $("#b1").animate({
    marginTop:'2em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b2").animate({
    marginTop:'6em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b3").animate({
    marginTop:'10em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b4").animate({
    marginTop:'14em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#b5").animate({
    marginTop:'18em',
    marginLeft:'0',
    height:'2em',
    width:'2em'
  });
  $("#reload").animate({
    marginTop:'-2em',
    marginLeft:'-2em',
    height:'50em',
    width:'100em'
  });
})
