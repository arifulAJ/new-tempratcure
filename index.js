
// https://api.openweathermap.org/data/2.5/weather?q=Khulna&appid=909887c2fd6d9276c61214a0fb09d044
const getCity= async city=>{
  
  
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=909887c2fd6d9276c61214a0fb09d044`
// fetch(url)
// .then(res=>res.json())
// .then(data=>inputCity(data))
try{
    const res= await fetch(url) ;
const data= await res.json();
inputCity(data);
}
catch(error){
window.alert('please write your city name. for weather details');

}}

const inputCity =cityNames=>{
const addElement=document.getElementById('addElement')
const div=document.createElement('div');
addElement.innerText='';
const temp=cityNames.main.temp;
let agin=Math.floor(temp);


 div.innerHTML=`
 <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
 <h1>${cityNames.name}</h1>
 <h3><span>${agin-270}</span>&deg;C</h3>
 <h1 class="lead">${cityNames.weather[0].main}</h1>
 `;
 addElement.appendChild(div);
}


const searchButton=()=>{
  
   
    const inputValue=document.getElementById('input-text');
    const inputText=inputValue.value;
    inputValue.value='';
  
        getCity(inputText);
   
 
    }
  
  


