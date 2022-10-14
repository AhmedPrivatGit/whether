var countryChange='Cairo';
var Url=`http://api.weatherapi.com/v1/search.json?key=e58cad5576534d738d3194505221110&q=${countryChange}`;
var SearchInput=document.getElementById('SearchText');
var dataBody=document.getElementById('dataBody');
var btn=document.querySelector('.btn');

var List=[];
async function getData(){

    var MyRespon=await fetch(Url);
    var data=await MyRespon.json();
    if(MyRespon.ok){
     List=data;
console.log(List);
    }
    else{
        List=[];
    }
    showdata();
}

var div='';
 function showdata(){
 
    for(var x=0;x<List.length;x++){
        div+=`<div class="col">
        <div class="p-3 border bg-dark Cold">${List[x].name+List[x].id}</div>
       </div>`;
    }
    dataBody.innerHTML=div;
}
getData();
SearchInput.addEventListener('keyup', async function(){
    //if(countryChange!='')
    countryChange='';
    countryChange=SearchInput.value;
   var x= List.includes(SearchInput.value);
   List=x;
   await getData();
});