var sounds=window.webkitSpeechRecognition;
var voice=new sounds();
function start(){
    document.getElementById("textbox").innerHTML="" ;
    voice.start() ; }
    voice.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    }
