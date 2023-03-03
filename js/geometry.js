// first - if i click blog it will open a new page 

document.getElementById('btn-submit').addEventListener('click',function(){
    window.location.href = 'blog.html';
})


// now lets start calculating
// for first card
let serial=0
document.getElementById('first-card').addEventListener('click',function(){
    // get the data
    serial+=1;
    const firstName = document.getElementById('first-name').innerText;
    const fstCrdInput = getInputValue('fstCrdInput');
    const fstCrdInputTwo = getInputValue('fstCrdInput2');
    const totalTriangleCm =0.5 * parseInt(fstCrdInput) * parseInt(fstCrdInputTwo);
    const twoDecimalCm = totalTriangleCm.toFixed(2)
    if( fstCrdInput<=0||fstCrdInputTwo<=0){
        alert('please add number which is bigger than 0');
        return;
    }
   displayData(firstName,twoDecimalCm);

})
// for second card
document.getElementById('second-card').addEventListener('click',function(){
    // get the data
   serial=serial+1;
    const secondName = document.getElementById('second-name').innerText;
    const secondCrdInput = getInputValue('secondCrdInput');
    const secondCrdInputTwo = getInputValue('secondCrdInput2');
    const totalRectangleCm = parseInt(secondCrdInput) * parseInt(secondCrdInputTwo);
    const twoDecimalCm = totalRectangleCm.toFixed(2)
    if( secondCrdInput==""||secondCrdInputTwo==""){
        alert('please write a valid number dont leave the box empty');
        return;
    }
    displayData(secondName,twoDecimalCm);
})
// for 3rd card
document.getElementById('third-card').addEventListener('click',function(){
    // get the data
   serial=serial+1 ;
    const thirdName = document.getElementById('third-name').innerText;
    const thirdCrdInput = getInputValue('thirdCrdInput');
    const thirdCrdInputTwo = getInputValue('thirdCrdInput2');
    const totalParallelogramCm = parseInt(thirdCrdInput) * parseInt(thirdCrdInputTwo);
    const twoDecimalCm= totalParallelogramCm.toFixed(2)
    if( thirdCrdInput==''||thirdCrdInputTwo==''){
        alert('please dont use string you have to use numbers');
        return;
    }
    displayData(thirdName,twoDecimalCm);
})
// for 4th card
document.getElementById('forth-card').addEventListener('click',function(){
    // get the data
   serial=serial+1;
    const forthName = document.getElementById('forth-name').innerText;
    const forthCrdInput = getInputValue('forthCrdInput');
    const forthCrdInputTwo = getInputValue('forthCrdInput2');
    const totalRhombusCm = 0.5*parseInt(forthCrdInput) * parseInt(forthCrdInputTwo);
    const twoDecimalCm = totalRhombusCm.toFixed(2);
    if( forthCrdInput<=0){
        alert('please add number which is bigger than 0');
        return;
    }
    displayData(forthName,twoDecimalCm);
})
// for 5th card
document.getElementById('fifth-card').addEventListener('click',function(){
    // get the data
  serial= serial+1;
    const fifthName = document.getElementById('fifth-name').innerText;
    const fifthCrdInput = getInputValue('fifthCrdInput');
    const fifthCrdInputTwo = getInputValue('fifthCrdInput2');
    const totalPentagonCm =0.5 * parseInt(fifthCrdInput) * parseInt(fifthCrdInputTwo);
    const twoDecimalCm = totalPentagonCm.toFixed(2)
    if( fifthCrdInput<=0){
        alert('please add number which is bigger than 0');
        return;
    }
    displayData(fifthName,twoDecimalCm);
})
// for 6th card
document.getElementById('sixth-card').addEventListener('click',function(){
    // get the data
    serial =serial+1;
    const sixthName = document.getElementById('sixth-name').innerText;
    const sixthCrdInput = getInputValue('sixthCrdInput');
    const sixthCrdInputTwo = getInputValue('sixthCrdInput2');
    const totalEllipseCm = 3.14 * parseInt(sixthCrdInput)*parseInt(sixthCrdInputTwo);
    const twoDecimalCm = totalEllipseCm.toFixed(2)
    if( sixthCrdInput<=0){
        alert('please add number which is bigger than 0');
        return;
    }
    displayData(sixthName,twoDecimalCm);
})
// functions for all the cards
// show the data (1)
function getInputValue(id){
    const value = document.getElementById(id).value;
    return value
}
// show the data(2)
function displayData(names, totalCms){
    const container = document.getElementById('table-container');
    const tr = document.createElement ('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${names}</td>
    <td>${totalCms}cm<sup>2</sup></td>
    <td> <button class="convert-btn">convert to m<sub>2</sub></Button></td>
    `;
    container.appendChild(tr);
}
// changing card color 
let color = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg").style.background 
    = color[Math.floor(Math.random() * color.length)];
})
let color2 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg2").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg2").style.background 
    = color2[Math.floor(Math.random() * color.length)];
})
let color3 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg3").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg3").style.background 
    = color3[Math.floor(Math.random() * color.length)];
})
let color4 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg4").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg4").style.background 
    = color4[Math.floor(Math.random() * color.length)];
})
let color5 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg5").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg5").style.background 
    = color5[Math.floor(Math.random() * color.length)];
})
let color6 = [, "#3C9EE7", "#E7993C",
"#E73C99", "#3CE746", "#E7993C"];

document.querySelector(".random-bg6").addEventListener(
        "mouseover", function () {

document.querySelector(".random-bg6").style.background 
    = color6[Math.floor(Math.random() * color.length)];
})