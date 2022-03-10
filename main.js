//creating Variables
let button = document.getElementById('btn');

//Add event function
button.addEventListener('click', ()=>{
  

let gram = parseInt(document.getElementById('grams').value);
const type = document.getElementById('type').value;

if(gram === '' || isNaN(gram)){
    document.getElementById('grams').focus();
    document.getElementById('error').innerHTML = 'Please Fill the input field';
    setTimeout(()=>{
        document.getElementById('error').innerHTML = '';
    }, 3000);
    document.getElementById('output').innerHTML = '';
}
else{
  document.getElementById('error').innerHTML = '';

  //switch statement 
    switch(type){
        case 'pounds':
            convertPounds(gram);
            break;

            case 'kilograms':
            convertKilo(gram);
            break;

            case 'ounce':
            convertOunce(gram);
            break;

            case 'stones':
            convertStones(gram);
            break;

            default:
            alert('error');
    }
    //cfreating function 
    function convertPounds(gram){
      let pounds = 0.0022 * gram;
        document.getElementById('output').innerHTML =
         `${gram} grams = ${pounds.toFixed(3)} 
          pounds`;
    }
    function convertKilo(gram){
        let kiloG = gram/1000;
        document.getElementById('output').innerHTML =
         `${gram} grams = ${kiloG.toFixed(3)} kg`; 
    }
    
    function convertOunce(gram){
        let ounce = gram/28.35;
        document.getElementById('output').innerHTML =
         `${gram} grams = ${ounce.toFixed(3)} Ounces`; 
    }
    function convertStones(gram){
        let stone = gram/ 6350.29;
        document.getElementById('output').innerHTML =
         `${gram} grams = ${stone.toFixed(3)} Stones`; 
    }
   
}
document.getElementById('grams').value = '';

        
});   
