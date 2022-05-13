
var table1orders = new Map();
var table2orders = new Map();
var table3orders = new Map();


let menuItems = [
{name : "Crusty Garlic Focaccia with Melted Cheese",amount:155.00,courseType:"main-course"},
{name : "French Fries",amount:155.00,courseType:"starter"},
{name : "Country Friess with Herbs",amount:200.00,courseType:"main-course"},
{name : "French Fries with Cheese",amount:350.00,courseType:"starter"},
{name : "Chicken and Cheese Burger",amount:120.00,courseType:"desert"},
{name : "Biryani",amount:155.55,courseType:"starter"},
{name : "Ice-cream",amount:344.00,courseType:"desert"},
{name : "Chicken Pizza",amount:159.56,courseType:"main-course"},
{name : "Appolo Fish",amount:160.19,courseType:"main-course"},
{name : "Chilly Chicken Wet",amount:130.34,courseType:"main-course"},
{name : "Kaju Panner",amount:345.00,courseType:"starter"}]


let searchItemsList = () =>{
                    
    console.log("called item");

    const input = document.getElementById("searchitem");
    const filter = input.value.toLowerCase();

    const resList = [];      
                        
        
    menuItems.forEach( element =>{
                            
    var amount = element.amount;
    var textval = element.name;                      
    var courseval = element.courseType;
                            
        
    if(textval.toLowerCase().indexOf(filter) > -1 || courseval.toLowerCase().indexOf(filter) > -1){
        b = {name : textval,amount:amount,courseType:courseval}
        resList.push(b)

    }                       
    });
    
    
    buildMenu(resList);
    
}

buildMenu(menuItems);

function buildMenu(menuItemsList) {
    const menu = document.querySelector(".Menu");

    menu.innerHTML = "";
    
    var id = 1;

    menuItemsList.forEach(element => {
        const items = document.createElement("div");
        items.className = "items";
        items.draggable = true;
        items.id = "item" + id;
        
        items.addEventListener("dragstart",drag);


        const itemName = document.createElement("h2");
        itemName.className = "itemName";
        const amt = document.createElement("h4");
        amt.className = "amount";
        const coursetype = document.createElement("h4");
        coursetype.className = "course";
            
        const line = document.createElement("hr");
            
        itemName.textContent = element.name;
        amt.textContent = element.amount;
        coursetype.textContent = element.courseType;


            
        items.appendChild(itemName);
        items.appendChild(amt);
        items.appendChild(coursetype);
        menu.appendChild(items);
        items.appendChild(line);
                            
        coursetype.style.display = "none";
        id = id + 1;
                    
    });

}


let searchTablesList = () =>{

    console.log("called");

    const input = document.getElementById("searchtable");
    const filter = input.value.toLowerCase();
    const tableslist = document.querySelectorAll(".tables-list");

    tableslist.forEach(element => {

        var a = element.getElementsByTagName("h2")[0];
        var textval = a.textContent || a.innerText;

        if(textval.toLowerCase().indexOf(filter) > -1){
            element.style.display = "";
        }
        else{
            element.style.display = "none"
        }

    })
}

function dragenter(event) {
    if ( event.target.className == "tables-list" ) {
      event.target.style.border = "3px dotted red";
    }
}

function dragleave(event) {
    if ( event.target.className == "tables-list" ) {
      event.target.style.border = "";
    }
}
    
function drag(event) {
    event.dataTransfer.setData("Text",event.target.id);
    
}


function allowDrop(ev) {
    ev.preventDefault();
}

dropedItems = [];

var t = 0;

drop = (event) => {
    
    event.preventDefault();
    var data = event.dataTransfer.getData("Text"); 
    
    

    var item = document.getElementById(data);
    var itemname = item.querySelector(".itemName");
    var amt = item.childNodes[1];

    
    
    var targetTable = document.getElementById(event.target.id);

    var tempamt = targetTable.querySelector(".amount");

    var noofItems = targetTable.querySelector(".no-of-items");

    
    t = parseInt(noofItems.innerText) +1;

    noofItems.innerText = t;

    tempamt.textContent =  parseFloat(tempamt.innerText) + parseFloat(amt.innerText);

    

    if(event.target.id == "1"){
        var key = itemname.textContent;
        if(table1orders.has(key)){
            table1orders.set(key,table1orders.get(key)+1);
        }
        else{
            table1orders.set(key,1);
        }
    }

    else if(event.target.id == "2"){
        var key = itemname.textContent;
        if(table2orders.has(key)){
            table2orders.set(key,table2orders.get(key)+1);
        }
        else{
            table2orders.set(key,1);
        }
    }

    else if(event.target.id == "3"){
        var key = itemname.textContent;
        if(table3orders.has(key)){
            table3orders.set(key,table3orders.get(key)+1);
        }
        else{
            table3orders.set(key,1);
        }
    }

}

function clicked(ev){

    var container = document.querySelector(".container");

    dropedItems.push(table1orders);
    dropedItems.push(table2orders);
    dropedItems.push(table3orders);
   

    if(ev.id == "1"){
        displayItems(table1orders,ev);
    }
    else if(ev.id == "2"){
        displayItems(table2orders,ev);
    }
    else
        displayItems(table3orders,ev);


    window.onclick = function(event) {
        if (event.target == container) {
            container.style.display = "none";
        }
    }
        

    

}

function displayItems(map,ev){

    var totalsum = 0;

    const tableBody = document.querySelector(".tablebody");

    tableBody.innerHTML = "";

    var container = document.querySelector(".container");
    
    var header = document.querySelector(".tableno");
    
    var sno = 1;

    container.style.display = "block";

    header.textContent = ev.childNodes[1].innerText + "| Order Details";

    

    const amount = ev.querySelector(".amount");
    const quantity = ev.querySelector(".no-of-items");

    for(let [key ,value] of map){        
        let val = 0;

        menuItems.forEach((element) => {
            if(element.name == key){
                val = element.amount;
                return;
            }
        })

        const tr = document.createElement("tr");
        const snoElement = document.createElement("td");
        const itemname = document.createElement("td");
        const price = document.createElement("td");
        const inputtd = document.createElement("td");
        const div = document.createElement("div");
        const input = document.createElement("input");
        const td = document.createElement("td");
        const delicon = document.createElement("img");

        div.textContent = "no of servings";

        
        input.setAttribute("type","Number");
        input.setAttribute("placeholder","no of servings");
        input.min = 1;
        input.addEventListener("change",(event) => {
            map.set(key,parseInt(input.value));

            displayItems(map,ev);
            
        });
        input.className = "qty";
        input.style.borderBottomStyle = "groove";
        
        delicon.src = "delete.png";
        delicon.addEventListener("click",() => {
            
            map.delete(key);
            displayItems(map,ev);
        })
      

        input.value = value;
        snoElement.textContent = sno;
        itemname.textContent = key;
        totalsum = totalsum + val * parseInt(input.value);
        price.innerText = val * parseInt(input.value);


        tableBody.appendChild(tr);
        tr.appendChild(snoElement);
        tr.appendChild(itemname);
        tr.appendChild(price);
        tr.appendChild(inputtd);
        td.appendChild(delicon);
        tr.appendChild(td);
        
        inputtd.appendChild(div);
        inputtd.appendChild(input);

        sno = sno + 1;
    }

    var totalsumElement = document.querySelector(".totalamount");
    totalsumElement.innerText = totalsum;
}

const debounce = (func, wait) => {
    let timeout;
  
    return function () {
      let context = this,args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context,args);
      },wait);
  };
}

const search = debounce(searchTablesList,1000);
const searchItem = debounce(searchItemsList,1000);