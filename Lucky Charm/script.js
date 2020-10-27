//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

var faces = ["/images/face/face_1.png", "/images/face/face_2.png"];

$(document).ready(function () {
  /*WHEEL SPIN FUNCTION*/
  $("#start").click(function () {
    //add 1 every click
    clicks++;

    /*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
    var newDegree = degree * clicks;
    var extraDegree = Math.floor(Math.random() * 60) * 60;
    totalDegree = newDegree + extraDegree;

    /*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
    $("#wheel .university").each(function () {
      var t = $(this);
      var noY = 0;

      var c = 0;
      var n = 550;
      var interval = setInterval(function () {
        c++;
        if (c === n) {
          clearInterval(interval);
        }
        //1.2、生成随机角标0~6
        index = Math.floor(Math.random() * 2);
        //1.3、设置小相框src属性
        $("#face").prop("src", faces[index]);
      }, 10);

      $("#wheel").css({
        transform: "rotate(" + totalDegree + "deg)",
      });
    });
  });
}); //DOCUMENT READY
