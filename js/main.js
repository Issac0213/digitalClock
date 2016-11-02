var timeDiv= document.getElementById('time')

function startTime(){
	var currentTime = new Date()

	var h=currentTime.getHours()
	    m=currentTime.getMinutes()
	    s=currentTime.getSeconds()
	    
	if(h>12){
	   h=h-12;
	}
    function checkTime(i){
        if(i<10){
        	i="0"+i
        }
        return i
    }
        m=checkTime(m)
        s=checkTime(s)

        timeDiv.innerHTML=h+":"+m+":"+s

    setTimeout(function(){
        	startTime();
    },1000);
    

}

timeDiv.addEventListener('loud', startTime(),false) 




 




