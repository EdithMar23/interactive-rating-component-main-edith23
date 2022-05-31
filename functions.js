
const radioInputs = document.querySelectorAll('input');
const form = document.querySelector("#rate");

let ratingValue;

radioInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    ratingValue = e.target.value;
    var result = '\xa0' + ratingValue + '\xa0';
    document.getElementById('rating-result').textContent = result;
  })
} );
 
form.addEventListener('submit', e => {
  e.preventDefault();
  if(!ratingValue) return;
});
document.getElementById('submit').addEventListener('click', showResult);
function showResult(){
  var len = 5;
  for (i = 0; i <len; i++) {
    if (document.querySelectorAll('input')[i].checked) {
        chosen = document.querySelectorAll('input')[i].value
        document.getElementById('Question').style.display = "none";
        document.getElementById('result').style.display = "flex";
      }
}
try{
if (chosen == "") {
}}
catch(er){
  alert("Please select an option");
}
  

}



