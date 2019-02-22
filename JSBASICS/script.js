function calcBill(bill)
{
    if(bill<50)
    {
         tip=0.2*bill;
    }
    if(bill>=50 && bill<200)
    {
        tip=0.15*bill;
    }
    if(bill>200)
    {
         tip=0.1*bill;
    }
    return tip;
}
var restaurantBill=[124,48,268];
var tipp=[];
var totBill=[];

for(i=0;i<restaurantBill.length;i++){
   var v=calcBill(restaurantBill[i]);  
   tipp.push(v);
   totBill[i]=tipp[i]+restaurantBill[i];
}

console.log('tips given:'+tipp);
console.log('total bill in each restaurant:'+totBill);


