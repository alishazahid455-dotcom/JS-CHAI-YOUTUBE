/*
javascript is synchronous
singel threaded
execution useContext:execute one line at a time
each operation waits for the last to complete



1-blocking code
block the flow of program(mtlb ap yahi ruko ma pani pi k aya)
read file sync

2-non blocking code
        
does not block execution(ap mobile use kero ma pani pi k aya)
read file async
iss ma file bi read hu gai iss ma or baqi ka code bi execute hu gaya

operating system ma file read kerny k liya context dena perta kernal ko phr kernal usko file ko access
kerta 
browser ma kabi bi akeela jsengine ni chlta iss ma web api bi hutty
memory heap ma memory allocation hutti

asyns ma jab ma keho k ya wala kam ker k mujy bad ma yad kerwa dena tu phr web apis use kerty iss ma
settimeout setinterval wagera hutty
settimeout bolta k ok itny time bad ya yad kerwa du gi baqi code execute hutta rehta
iss ma task queue hutta ju fata fata call back hutta or stack ma a jata*/
setTimeOut(function(){
console.log("alisha")
}2000)//2sec ka time ha ya usky bad print kr dy ga