let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('button');
let LastClick=2;
let screenValue = '';
for(item of buttons)
{
     item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText=='X')
        {
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if(buttonText=='AC')
        {
            screenValue='';
            screen.value=screenValue;

        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
            LastClick='=';
            
        }
        else if(buttonText=='DEL')
        {
            screen.value=screenValue.slice(0,-1);
            screenValue=screen.value;
        }
        else{
            if(LastClick=='='){
            screenValue=buttonText;
                LastClick=buttonText;
        }
            else screenValue+=buttonText;
            
            screen.value=screenValue;

        }
     })
}