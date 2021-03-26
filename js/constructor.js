'use strict';

let footerArr = [];
let resultArr = [];

for (let i=0;i<14;i++)
{
  footerArr.push(0);

}
console.log(footerArr);

const hourSales = ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'];


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let allObjects =  [];


function Locations (name ,avgCookies,minCus,maxCus ){
  this.name = name ;
  this.avgCookies = avgCookies ;
  this.minCus = minCus ;
  this.maxCus = maxCus ;
  this.customer = 0 ;
  this.total= 0;
  this.ta = '';

  allObjects.push(this);



}




Locations.prototype.getCustomer = function (min , max)
{
  this.customer=Math.ceil(this.avgCookies*getRandomInt(min ,max));
  return this.customer ;

};



Locations.prototype.render= function (){


  let result =0;
  let arr= [];
  const trElem2= document.createElement('tr');
  x.appendChild(trElem2);
  const th4Elem = document.createElement('th');
  trElem2.appendChild(th4Elem);
  th4Elem.textContent=(this.name);



  for (let i=0 ;i<hourSales.length ;i++)
  {

    const td3El = document.createElement('td');
    trElem2.appendChild(td3El);
    let random = this.getCustomer(this.minCus,this.maxCus);
    td3El.textContent= random;
    footerArr[i]+=random;
    arr.push(Number( td3El.textContent));
    result=result+arr[i];
    resultArr.push(result);


  }
  const td4Elem =document.createElement('td');
  trElem2.appendChild(td4Elem);
  td4Elem.textContent= result ;



};



let x = document.createElement('table');
document.body.appendChild(x);


const captionEl = document.createElement('caption');
x.appendChild(captionEl);
captionEl.textContent=('Salmon Cookies Hourly Sales');



const tr1Elem = document.createElement('tr');
x.appendChild(tr1Elem);


const thElem = document.createElement('th');
tr1Elem.appendChild(thElem);
thElem.textContent=('  ');


hourSales.forEach(hour => {
  const td1El = document.createElement('td');
  tr1Elem.appendChild(td1El);
  td1El.textContent=(hour);});

const th2Elem = document.createElement('th');
tr1Elem.appendChild(th2Elem);
th2Elem.textContent=('daily location total');




const seattle = new Locations ('Sattele', 6.3,23,65 );
const tokyo = new Locations('Tokyo',1.2,3,34);
const dubai = new Locations('Dubai', 3.7,11,38);
const paris = new Locations('Paris',2.3,20,38);
const lima = new Locations( 'Lime' , 4.6,2,16);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
const trrElem =document.createElement('tr');
x.appendChild(trrElem);
trrElem.textContent=('totals');
// console.log(footerArr);
pushing();
function pushing (){
  for (let y=0;y<footerArr.length;y++)
  {
    const lastRow =document.createElement('th');
    trrElem.append(lastRow);
    lastRow.textContent=(footerArr[y]);


  }
  let lastCol = document.createElement('th');
  trrElem.append(lastCol);
  for (let z=0;z<allObjects.length;z++)
    lastCol.textContent=(resultArr[z] );
}

let salmonForm = document.getElementById('salmonForm');
salmonForm.addEventListener('submit' , addNewLocation);

function addNewLocation(event) {
  event.preventDefault();
  let name = event.target.name.value;
  console.log(name);
  let avg = event.target.avg.value;
  let min = event.target.min.value;
  let max = event.target.max.value;


  let login = new Locations (name,avg,min,max);
  login.getCustomer(min,max);
  login.render();
}

