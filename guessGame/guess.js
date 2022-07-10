let btn = document.getElementById('btn');
let output = document.getElementById('output')

let num = [Math.floor(Math.random()*100)]

btn.addEventListener('click',function(){
    let inp = document.getElementById('user').value;
    if(inp == num){
        output.innerHTML=`You guessed right , numbr was ${num}`
    }
    else if(num<inp)
    {
        output.innerHTML="You guessed too high!"

    }
    else {
        output.innerHTML="You guessed too low!"
    }

})