

const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //자스키
Kakao.login('',''); //아디•비번
var charging = {"unknown":"Not Charging", "ac":"Charging"};
const Jsoup = org.jsoup.Jsoup;

var per = "";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {

if (msg == ".봇상태") {
  
  if (Device.getBatteryLevel() > 84) {
    per = "https://i.ibb.co/1R3fpj1/bt100.png";
  }  else if (Device.getBatteryLevel() > 59) {
    per = "https://i.ibb.co/CVJzyKK/bt85.png";
  } else if (Device.getBatteryLevel() > 29) {
    per = "https://i.ibb.co/Jd2GxRR/bt60.png";
  } else if (Device.getBatteryLevel() > 14) {
    per = "https://i.ibb.co/brM3Ngc/bt30.png";
  } else if (Device.getBatteryLevel() > 0) {
    per = "https://i.ibb.co/Ybv8rCs/bt15.png";
  }

  try{
    Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 45756,
                  "template_args" : {
                    i1: Device.getBatteryLevel()+"%",
                    i2: charging[Device.getPlugType()],
                    i3: per
                  }
                 }, "custom");
                 } catch(e) {
                   replier.reply(e);
                 }
}



} 

