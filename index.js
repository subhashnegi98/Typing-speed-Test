const setOfWords = ["Success is going from failure to failure without losing enthusiasm.", 
"The mind is everything. What you think you become.", 
"Success is doing ordinary things extraordinarily well.", 
"The future is always beginning now.", 
"Paradise is not a place; it's a state of consciousness."];

const msg = document.getElementById('subhead');
const msgs = document.getElementById('subheads');
const typedWords = document.getElementById('maintext');
const btn = document.getElementById('mainbtn');
let startTime, endTime;

const playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText =  setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endGame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);

    let totalstr = typedWords.value;
    let wordCount = wordCounter(totalstr);

    let speed = Math.round((wordCount/totalTime)*60);
     let finalmsg = "you typed total at " +speed+ " words per minute ";
    finalmsg = finalmsg + compareWords(msg.innerText, totalstr);
    msgs.innerText = finalmsg;
}

const compareWords = (str1, str2) => {
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let count = 0;

        words1.forEach(function(item, index){
            if(item == words2[index])
            {
                count++;
            }
               
        })

        let errorWords = (words1.length - count);
        return("(" +count + " correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".)");
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}
btn.addEventListener('click', function(){
    if(this.innerText=='Start'){
       typedWords.disabled = false;
       playGame(); 
    }else{
        typedWords.disabled = true;
        btn.innerText = "Start";
        endGame();
    }
})

const myfun = () => {
    location.reload();
}
