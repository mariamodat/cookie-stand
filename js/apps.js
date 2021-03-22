'use strict';
const seattle = {
  name : 'Seattle',
  hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
  AvgCookiesSale : 6.3 ,
  minCustomer : 23,
  maxCustomer : 65 ,
  customer : 0 ,
  getCustomer:function(min , max) {
    this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
    return this.customer;
  } ,

  render : function(){

    const title = document.createElement('div') ;
    // title.textContent=(title);
    document.body.appendChild(title);

    const hElem = document.createElement('h1');
    title.appendChild(hElem);
    hElem.textContent=(this.name);


    const ulElem = document.createElement('ul');
    title.appendChild(ulElem);
    this.hoursSales.forEach(hour => {
      const liElem =document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent=(` ${hour}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. ` );
    }) ;
    // for(let i =0 ;i< this.hoursSales.length ;i++)
    // {
    //   const liElem = document.createElement('li');
    //   ulElem.appendChild(liElem);
    //   liElem.textContent=(`${this.hoursSales[i]} : ${this.getCustomer}`);

    // }
  }



};



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


seattle.getCustomer(23,65);
seattle.render();






const tokyo = {
  name : 'Tokyo',
  hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
  AvgCookiesSale : 1.2,
  minCustomer : 3,
  maxCustomer : 24 ,
  customer : 0 ,
  getCustomer:function(min , max) {
    this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
    return this.customer;
  } ,
  totalCookies :0 ,
  totallyCustomers : function(){
    for (let i=0 ; i<this.hoursSales.length ;i++)
    {


      this.totalCookies += this.getCustomer(this.minCustomer,this.maxCustomer);

      return this.totalCookies;
    }

  } ,


  render : function(){

    const title = document.createElement('div') ;
    // title.textContent=(title);
    document.body.appendChild(title);

    const hElem = document.createElement('h1');
    title.appendChild(hElem);
    hElem.textContent=(this.name);


    const ulElem = document.createElement('ul');
    title.appendChild(ulElem);
    this.hoursSales.forEach(hour => {
      const liElem =document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent=(` ${hour}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. ` );
    }) ;

    const total = document.createElement('p');
    title.appendChild(total);
    total.textContent=(this.totallyCustomers());
  }



};






tokyo.getCustomer(3,24);
tokyo.render();






const dubai = {
  name : 'Dubai',
  hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
  AvgCookiesSale : 3.7,
  minCustomer : 11,
  maxCustomer : 38 ,
  customer : 0 ,
  getCustomer:function(min , max) {
    this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
    return this.customer;
  } ,

  render : function(){

    const title = document.createElement('div') ;
    // title.textContent=(title);
    document.body.appendChild(title);

    const hElem = document.createElement('h1');
    title.appendChild(hElem);
    hElem.textContent=(this.name);


    const ulElem = document.createElement('ul');
    title.appendChild(ulElem);
    this.hoursSales.forEach(hour => {
      const liElem =document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent=(` ${hour}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. ` );
    }) ;

  }



};






dubai.getCustomer(23,65);
dubai.render();






const paris = {
  name : 'Paris',
  hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
  AvgCookiesSale : 2.3,
  minCustomer : 20,
  maxCustomer : 38 ,
  customer : 0 ,
  getCustomer:function(min , max) {
    this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
    return this.customer;
  } ,

  render : function(){

    const title = document.createElement('div') ;
    // title.textContent=(title);
    document.body.appendChild(title);

    const hElem = document.createElement('h1');
    title.appendChild(hElem);
    hElem.textContent=(this.name);


    const ulElem = document.createElement('ul');
    title.appendChild(ulElem);
    this.hoursSales.forEach(hour => {
      const liElem =document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent=(` ${hour}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. ` );
    }) ;

  }



};






paris.getCustomer(23,65);
paris.render();









const lima = {
  name : 'Lima',
  hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
  AvgCookiesSale : 4.6,
  minCustomer : 2,
  maxCustomer : 16 ,
  customer : 0 ,
  getCustomer:function(min , max) {
    this.customer=Math.ceil( this.AvgCookiesSale * getRandomInt(min,max));
    return this.customer;
  } ,

  render : function(){

    const title = document.createElement('div') ;
    // title.textContent=(title);
    document.body.appendChild(title);

    const hElem = document.createElement('h1');
    title.appendChild(hElem);
    hElem.textContent=(this.name);


    const ulElem = document.createElement('ul');
    title.appendChild(ulElem);
    this.hoursSales.forEach(hour => {
      const liElem =document.createElement('li');
      ulElem.appendChild(liElem);
      liElem.textContent=(` ${hour}  :   ${this.getCustomer(this.minCustomer,this.maxCustomer)} customer. ` );
    }) ;

  }



};






lima.getCustomer(23,65);
limas.render();
