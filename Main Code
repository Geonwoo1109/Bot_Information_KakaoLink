

const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //카카오링크 자스키
Kakao.login('',''); //아디•비번
var charging = {"unknown":"Not Charging", "ac":"Charging"};

var per = "";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {

if (msg == ".봇상태") {
  
  if (Device.getBatteryLevel() > 84) {
    per = "http://makejoy.co.kr/mjbot/info/bt100.png";
  }  else if (Device.getBatteryLevel() > 59) {
    per = "http://makejoy.co.kr/mjbot/info/bt85.png";
  } else if (Device.getBatteryLevel() > 29) {
    per = "http://makejoy.co.kr/mjbot/info/bt60.png";
  } else if (Device.getBatteryLevel() > 14) {
    per = "http://makejoy.co.kr/mjbot/info/bt30.png";
  } else if (Device.getBatteryLevel() > 0) {
    per = "http://makejoy.co.kr/mjbot/info/bt15.png";
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

