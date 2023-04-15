const start = document.querySelector('.start')
const s1 = document.querySelector('.s1')
const instruction = document.querySelector('.instruction')
const timecount=document.querySelector('.timesec')
let counter;
s1.addEventListener('click', () => {
    instruction.classList.toggle("show")
    start.classList.toggle("show")
})
const exit = document.querySelector('.exit')
exit.addEventListener('click', () => {
    instruction.classList.toggle("show")
    start.classList.toggle("show")
})
const continue1 = document.querySelector('.continue')
const q1 = document.querySelector(".q1")
const result = document.querySelector(".result")
const next = document.querySelector(".next")
const akhu = document.querySelector('.akhu')

const replay = document.querySelector(".replay");
let count = 0;
let answercou = 0;
replay.addEventListener('click', () => {
    instruction.classList.toggle("show");
    result.classList.toggle("show");
    
    count = 0;
    answercou=0;
})
const exit1 = document.querySelector('.exit1')
exit1.addEventListener('click', () => {
    start.classList.toggle("show");
    result.classList.toggle("show");
    count = 0;
    answercou=0;
})



const que_text = document.querySelector('.que_text')
const q1buttons = document.querySelector('.q1buttons')

const ku = document.querySelector('.ku')
function showquestions(index) {
    let tag = '<h1>' + questions[index].number + '.' + questions[index].question + '</h1>'
    let option = 
        '<div class="option">' + questions[index].options[0]   +'</div>'+
        '<div class="option">' + questions[index].options[1]   +'</div>'+
        '<div class="option">' + questions[index].options[2]   +'</div>'+
        '<div class="option">' + questions[index].options[3]   +'</div>'
        
    let ku_in = '<h3>' + '<strong>' + ' ' + questions[index].number + ' ' + '</strong>' + ' ' + 'of' + ' ' + '<strong>' + ' ' + '5' + '</strong>' + ' ' + 'Questions' + '</h3>'

    que_text.innerHTML = tag;
    q1buttons.innerHTML = option;

    ku.innerHTML = ku_in;
    const button1 = q1buttons.querySelectorAll('.option');

    for (let i = 0; i < button1.length; i++) { 
        button1[i].setAttribute('onclick', 'todo(this)')
    }
    // for (let i = 0; i < button1.length; i++) { 
    //     button1[i].setAttribute('onclick','')
    // }

}
continue1.addEventListener('click', () => {
    instruction.classList.toggle("show")
    q1.classList.toggle("show")
    starttimer(15);
    showquestions(count); count++;

})
function todo(inp){
    buttonselected(inp)
    clear1();
}
next.addEventListener('click', () => {
   time=15;
    if (count < 5 && count > 0) {
        showquestions(count);
        count++;
    }
    else {
        q1.classList.toggle("show")
        result.classList.toggle("show")
        if(answercou>=4){
            akhu.innerHTML = '<h3 class="akhu">' + 'You have completed the quiz! and nice ' + '<i class="fa-regular fa-face-smile"></i>' + ',' + ' you got' +' '+`${answercou}`+' out of 5' + '</h3>'
        }
        if(answercou<=3){
            akhu.innerHTML = '<h3 class="akhu">' + 'You have completed the quiz! and it was not upto mark' + '<i class="fa-light fa-face-sad-sweat"></i>' + ',' + ' you got' +' '+`${answercou}`+' out of 5' + '</h3>'
        }
        
    }
    clearInterval(counter);
    starttimer(15);

})
function clear1(){
    clearInterval(counter)
}
function buttonselected(data) {
    let userans = data.textContent;
    let correctans = questions[count - 1].answer;
    let alloption=q1buttons.children.length;
    console.log(userans)
    console.log(correctans)
    if (userans == correctans){
        data.classList.add("correct")
        answercou++;
    }
    else{
        for(let i=0;i<alloption.length;i++){
            if(q1buttons.children[i].textContent == correctans){
                let to=q1buttons.children[i];
                wrongright(to)
            }
        }
        data.classList.add("wrong")
        
    }

    for(let i=0;i<alloption;i++){
        q1buttons.children[i].classList.add("disabled");
    }

}
function wrongright(data){
    data.setAttribute("class","option correct")
}
function starttimer(time){
    counter=setInterval(timer,1000);
    function timer(){
        timecount.textContent=time;
        
        if(time<=0){
            let alloption1=q1buttons.children.length;
            for(let i=0;i<alloption1;i++){
                q1buttons.children[i].classList.add("disabled");
            }
            time=1;
        }
        time--;
        
    }
}

