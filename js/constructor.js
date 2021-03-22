'use strict';








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
  // this.getCustomer = function (min , max)
  // {
  //   this.customer=Math.ceil(this.avgCookies*getRandomInt(min ,max));
  //   return this.customer ;

  // };



  allObjects.push(this);



}





Locations.prototype.getCustomer = function (min , max)
{
  this.customer=Math.ceil(this.avgCookies*getRandomInt(min ,max));
  return this.customer ;

};





Locations.prototype.totalCus = function (){ for (let i=0 ; i<hourSales.length;i++)
{
  this.total += this.getCustomer(this.minCus,this.maxCus);
  return this.total ;

}
};




// Locations.prototype.tableUpload = function()
// {
//   for( let i=0 ; i<7;i++)
//   {
//     this.ta += '<tr>';

//     for(let c= 0 ; c <this.hourSales.length;c++)
//     {

//       this.ta += '<td>' + this.hourSales[c] + '</td>';


//     }
//     this.ta += '</tr>';





//   }
//   document.write( `</table> ${this.ta} </table>`);




// };









Locations.prototype.render= function (){
  //   const table = document.createElement('div');
  //   document.body.appendChild(table);


  //   // const h1El = document.createElement('h1');
  //   // title.appendChild(h1El);
  //   // h1El.textContent=(this.name);


  //   const captionEl = document.createElement('caption');
  //   table.appendChild(captionEl);
  //   captionEl.textContent=('Salmon Cookies Hourly Sales');


  //   const trEl = document.createElement('tr');
  //   captionEl.appendChild(trEl);

  //   const td1El = document.createElement('td');
  //   trEl.appendChild(td1El);
  //   td1El.textContent=('hour');

  //   this.hourSales.forEach(hour => {
  //     const tdEl = document.createElement('td');
  //     trEl.appendChild(tdEl);
  //     trEl.textContent=(this.hourSales[hour]);

  //   });

  //   const tr2El = document.createElement('tr');
  //   captionEl.appendChild(tr2El);


  //   const td2El = document.createElement('td');
  //   trEl.appendChild(td2El);
  //   td1El.textContent=(this.name);


  const trElem2= document.createElement('tr');
  x.appendChild(trElem2);
  trElem2.textContent=(this.name);

  // const n = document.createElement('tr');
  // x.appendChild(n);
  // n.textContent=(this.name);

  for (let i=0 ;i<hourSales.length ;i++)
  {

    const td3El = document.createElement('td');
    trElem2.appendChild(td3El);
    td3El.textContent=(seattle.getCustomer(23,65));



  }

  const totalElem = document.createElement('tr');
  trElem2.appendChild(totalElem);
  totalElem.textContent=('Total' );

  const totalCustomers = document.createElement('td');
  totalElem.appendChild(totalCustomers);
  totalCustomers.textContent=(this.totalCus());


};



let x = document.createElement('table');
document.body.appendChild(x);


const captionEl = document.createElement('caption');
x.appendChild(captionEl);
captionEl.textContent=('Salmon Cookies Hourly Sales');



const tr1Elem = document.createElement('tr');
x.appendChild(tr1Elem);
tr1Elem.textContent=('  ');


const trElem = document.createElement('tr');
x.appendChild(trElem);



hourSales.forEach(hour => {
  const td1El = document.createElement('td');
  trElem.appendChild(td1El);
  td1El.textContent=(hour);});



const seattle = new Locations ('Sattele', 6.3,23,65 );
seattle.getCustomer(2,25);
const tokyo = new Locations('tokyo',3,24,1.2);


seattle.render();
tokyo.render();
