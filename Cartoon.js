var noofpics=document.querySelectorAll(".btn").length;
for(var i=0;i<noofpics;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var buttoninnerHTML=this.id;
        switch(buttoninnerHTML){
            case "btn1":
                var shinchan=new Audio("./Audios/Shinchan.mp3");
                shinchan.play();
                setTimeout(()=> {
                    shinchan.pause();
                }, 4000)
                break;
            case "btn2":
                var doraemon=new Audio("./Audios/Doraemon.mp3");
                doraemon.play();
                setTimeout(()=> {
                    doraemon.pause();
                }, 5000)
                break;
            case "btn3":
                var nobita=new Audio("./Audios/nobita.mp3");
                nobita.play();
                setTimeout(()=> {
                    nobita.pause();
                }, 6000)
                break;
            case "btn4":
                var chotabheem=new Audio("./Audios/ChotaBheem.mp3");
                chotabheem.play();
                setTimeout(()=> {
                    chotabheem.pause();
                }, 4000)
                break;
            case "btn5":
                var ninja=new Audio("./Audios/Ninjahattori.mp3");
                ninja.play();
                setTimeout(()=> {
                    ninja.pause();
                }, 5000)
                break;
            case "btn6":
                var pockemon=new Audio("./Audios/pikachu.mp3");
                pockemon.play();
                setTimeout(()=> {
                    pockemon.pause();
                }, 4000)
                break;
            default: console.log(buttoninnerHTML);

            
        }
    });
}