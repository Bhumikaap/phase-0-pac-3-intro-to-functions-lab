function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if(string==string.toLowerCase())
    {
        return `i cant hear you!`;
    } else if(string==string.toUpperCase())
    {
        return `YES INDEED!`;
    }else if(string===`i love you, Grandma.`)
    {
        return `i love you`;
    }
}