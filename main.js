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




/* ========== MEDIA QUERIES (Maintaining slim design) ========== */

/* Mobile (Keep same slim width but adjust spacing) */
@media screen and (max-width: 500px) {
  nav {
    width: 18rem; /* Keeping original width */
    height: 32rem;
    margin: 3rem auto; /* Reduce top margin only */
  }
  
  nav input {
    width: 18rem;
    font-size: 2.2rem; /* Slightly reduce font */
    padding: 15px 20px; /* Adjust padding */
  
  }
  
  #calculator button {
    width: 55px; /* Slightly reduce button size */
    height: 55px;
    margin: 5px 3px; /* Tighter spacing */
  }
}

/* Tablet (Same design, just center it properly) */
@media screen and (min-width: 501px) and (max-width: 900px) {
  nav {
    margin: 5rem auto; /* Center with good spacing */
  }
}

/* Desktop (Original design with more surrounding space) */
@media screen and (min-width: 901px) {
  nav {
    margin: 7rem auto;
  }
}
