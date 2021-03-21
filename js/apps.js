'use strict';
const seattle = {
  name : 'Seattle',
  hoursSales : ['6am', '7am' , '8am','9am', '10am', '11 am', '12 pm ' , '1 pm ', '2 pm ' , '3pm ','4pm', '5pm', '6pm','7pm'],
  AvgCookiesSale : 6.3 ,
  minCustomer : 23,
  maxCustomer : 65 ,
  customer : 0 ,
  getCustomer:function(min , max) {
    this.customer= this.AvgCookiesSale* getRandomInt(min,max);
    console.log(this);
  } ,

  render : function(){
    const container =document.getElementById('sales');

    const title = document.createElement('title') ;
    container.appendChild(title);

    const hElem = document.createElement('h1');
    title.appendChild(hElem);
    hElem.textContent=(this.name);


    const ulElem = document.createElement('ul');
    title.appendChild(ulElem);
    for(let i =0 ;i <this.hoursSales.length ;i++)
    {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      ulElem.textContent=(`${this.hoursSales[i]} : ${this.cookiesSales}`);

    }
  }



};



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


seattle.getCustomer(23,65);
seattle.render();
