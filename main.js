let display= document.getElementById('display')

function press(value){
  display.value +=value
}
function Clear(){
  display.value = "";
}

function Delete(){
display.value= display.value.slice(0,-1)
}

function result(){
  try{
        let expression = display.value.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    display.value = eval(expression);
    display.value= eval(display.value)
  }
  catch{
    display.value="erorr"
  }
}

display.onkeydown = function(e){
  if(e.key==="Enter"){
    result();
  }
};