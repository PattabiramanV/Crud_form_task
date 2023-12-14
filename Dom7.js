"use strict"
let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","maincontainer")

let container=document.createElement("div");
container.setAttribute("class","container");

let label_1=document.createElement( "p");
label_1.innerText="Product Code";
label_1.setAttribute("for","input_1")

let input_1=document.createElement("input");
input_1.setAttribute("id","input_1");
input_1.setAttribute("type","number");

let label_2=document.createElement("p");
label_2.innerText="Product Name";
label_2.setAttribute("for","input_2");

let input_2=document.createElement("input");
input_2.setAttribute("id","input_2");

let label_3=document.createElement( "p");
label_3.innerText="Qty";


let input_3=document.createElement("input");
input_3.setAttribute("id","input_3");
input_3.setAttribute("type","number");

let label_4=document.createElement( "p");
label_4.innerText="Price";


let input_4=document.createElement("input");
input_4.setAttribute("id","input_4");
input_4.setAttribute("type","number");

let Two_Btn=document.createElement("div");
Two_Btn.setAttribute("class","Two_btn");

let Sub_Btn=document.createElement("button");
Sub_Btn.setAttribute("id","Sub_Btn")
Sub_Btn.innerText="Submit";

let Reset_btn=document.createElement("button");
Reset_btn.setAttribute("id","Reset_Byn")
Reset_btn.innerHTML="Reset"

document.body.append(maincontainer)
container.append(label_1,input_1,label_2,input_2,label_3,input_3,label_4,input_4,Two_Btn)
Two_Btn.append(Sub_Btn,Reset_btn)

let Tabel=document.createElement("table");
let tr=document.createElement("tr");
let th_1=document.createElement("th");
th_1.innerHTML="Product Code"


let th_2=document.createElement("th");
th_2.innerHTML="Product Name"

let th_3=document.createElement("th");
th_3.innerHTML="Qty"

let th_4=document.createElement("th");
th_4.innerHTML="Price"

tr.append(th_1,th_2,th_3,th_4);
Tabel.append(tr)
maincontainer.append(container,Tabel)

Sub_Btn.addEventListener("click",Sub_Fun);

let Total_input=document.querySelectorAll("input")
console.log(Total_input[0]);
let valid=null;

function Sub_Fun(){

    if (valid == null && Total_input[0].value!="") {
    let tr_Data = document.createElement("tr");

    let td_1 = document.createElement("td");
    td_1.innerText = input_1.value;
    input_1.value = "";

    let td_2 = document.createElement("td");
    td_2.innerText = input_2.value;
    input_2.value = ""

    let td_3 = document.createElement("td");
    td_3.innerText = input_3.value;
    input_3.value = ""

    let td_4 = document.createElement("td");
    td_4.innerText = input_4.value;
    input_4.value = "";

    var td_5 = document.createElement("td");

    var Edit_btn = document.createElement("button");
    Edit_btn.setAttribute("id","Edit_btn")
    Edit_btn.innerHTML = "Edit";

    var Del_btn = document.createElement("button");
    Del_btn.setAttribute("id","Del_btn")
    Del_btn.innerHTML = "Delete";

    td_5.append(Edit_btn, Del_btn);
    tr_Data.append(td_1, td_2, td_3, td_4, td_5);
    Tabel.append(tr_Data);

    Del_btn.addEventListener("click", Delete_Fun)

    function Delete_Fun() {
      if (confirm("Do you remove")) {
       
        td_1.parentElement.remove();
      
      }
    }

    Edit_btn.addEventListener("click", Edit_Fun)

    function Edit_Fun() {
      valid = td_1.parentElement;

      input_1.value = td_1.innerText;
      input_2.value = td_2.innerText;
      input_3.value = td_3.innerText;
      input_4.value = td_4.innerText;
   }
    Reset_btn.addEventListener("click", Reset_Fun)

    function Reset_Fun() {

    Total_input[0].value="";
    Total_input[1].value="";
    Total_input[2].value="";
    Total_input[3].value="";


    }
  }

  else {
    if(valid!=null){
      uptate()
    }
    else{
      alert("Please Enter a input")
    }
  }

  function uptate() {
    console.log(valid);

    valid.getElementsByTagName("td")[0].innerHTML = input_1.value;
    valid.getElementsByTagName("td")[1].innerHTML = input_2.value;
    valid.getElementsByTagName("td")[2].innerHTML = input_3.value;
    valid.getElementsByTagName("td")[3].innerHTML = input_4.value;

    input_1.value = "";
    input_2.value = "";
    input_3.value = "";
    input_4.value = "";
    
    valid = null;
  }

}



















