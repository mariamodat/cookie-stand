'use strict';

let arr= [];


const hourSales = ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'];
let result =0 ;

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




  const trElem2= document.createElement('tr');
  x.appendChild(trElem2);
  const th4Elem = document.createElement('th');
  trElem2.appendChild(th4Elem);
  th4Elem.textContent=(this.name);


  for (let i=0 ;i<hourSales.length ;i++)
  {

    const td3El = document.createElement('td');
    trElem2.appendChild(td3El);
    td3El.textContent=(seattle.getCustomer(23,65));
    arr.push(Number( td3El.textContent));
    result=result+arr[i];


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
seattle.getCustomer(2,25);
const tokyo = new Locations('Tokyo',3,24,1.2);
const dubai = new Locations('Dubai', 11,38,3.7);
const paris = new Locations('Paris', 20,38,2.3);
const lima = new Locations( 'lime' , 2,16,4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
