var kadha=document.getElementById('Kadha');
kadha.innerHTML=92;
var tab=document.getElementById('Tab');
tab.innerHTML=120;
var Minerals=document.getElementById('Minerals');
Minerals.innerHTML=200;
var Respo=document.getElementById('Respo');
Respo.innerHTML=300;

var list=[
    {
        Name:'Kadha',
        Price:92
    },
    {
        Name:'Tablet',
        Price:120
    },
    {
        Name:'Minerals',
        Price:200
    },
    {
        Name:'Respo',
        Price:300
    }
];
var arr=JSON.parse(localStorage.getItem("cartData")) || [];
console.log(arr);
arr.map(function(elem) {
   
 var div=document.createElement('div');
 var divimage=document.createElement('div');

 var image=document.createElement('img');
 image.src=elem.image;
 var divname=document.createElement('div');
 var name=document.createElement('p');
 name.innerText=elem.name;
 name.className='ProductName';
 image.className='ProductImage';
 var price=document.createElement('p');
 price.className='Prices';
 price.innerText=elem.rs;
 var qty=document.createElement('p');
 qty.innerText=elem.qty;
 qty.className='Quantities'
 var qtys=document.createElement('p');
 qtys.innerText="qty :";
 var symbol=document.createElement('p');
 symbol.innerText=elem.mrp;
 symbol.className='Symbols';
 var symbol2=document.createElement('p');
 symbol2.className='RsSymbol';
 symbol2.innerText=elem.cost;
 var discount=document.createElement('strike');
 discount.innerText=elem.stickedOff;
 discount.className='Discounts';
 divimage.append(image);
 var divqty=document.createElement('div');
 divqty.append(qtys,qty);
 divname.append(name,divqty);
 divqty.className='qtycontainer';
 var divprice=document.createElement('div');
 var divstrike=document.createElement('div');
 divstrike.append(symbol,discount);
 divstrike.className='Strikes'
 var divcost=document.createElement('div');
 divcost.append(symbol2,price);
 divcost.className='PriceDiv';
 divprice.append(divstrike,divcost);
 div.append(divimage,divname,divprice);
 document.querySelector('.mycart').append(div);

}
)
var total=arr.reduce(function(acc,elem){
    return acc+elem.rs*elem.qty;
},0)
document.querySelector('#sum').innerText=total;
document.querySelector('#total').innerText=total+69;
document.querySelector('.buttons').addEventListener('click',function(){
var value=document.querySelector('#in').value;
if(value=='DISCOUNT30') {
    total=Math.floor(0.7*total);
    document.querySelector('#sum').innerText=total;
document.querySelector('#total').innerText=total+69;
} 
})








