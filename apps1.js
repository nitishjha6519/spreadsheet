// const getLink = document.querySelector('#getLink');
const allData= document.querySelector('#allData');
const btn = document.querySelector('button');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1b_J8FCA71g5wEeHBhfhMujSc2Ak31szoerMgvogGUS8';
const q1 = '/gviz/tq?&sheet=sheet1&tq=SELECT B,C where A contains "17-10-2021"';
//https://docs.google.com/spreadsheets/d/1b_J8FCA71g5wEeHBhfhMujSc2Ak31szoerMgvogGUS8/edit?usp=sharing
const endPoint=`${url}${ssid}${q1}`;
// getLink.textContent=endPoint;

fetch(endPoint)
.then(function(res)
{
    return res.text() ;
})

.then(function(data){
   const temp=data.substr(47).slice(0,-2);
   console.log(temp);
   const json=JSON.parse(temp);
     console.log(json);

     const rows=json.table.rows;
     console.log(rows);

     rows.forEach((row)=>{
        const div2=document.createElement('div');
        div2.classList.add('post');
        
        const temp1=row.c;
         
        
     temp1.forEach(cell=>{
        console.log(cell);

        const box=document.createElement('div');

        box.textContent=cell.v;
        box.classList.add("box");
        div2.append(box);
       
           })
           allData.append(div2);
           })

 
     



 })

//  12iGTU-GYXAX1DAMK_NWqL7GUlctnqpsLlpW1WVR0f3I
//  1b_J8FCA71g5wEeHBhfhMujSc2Ak31szoerMgvogGUS8
        //https://docs.google.com/spreadsheets/d/12iGTU-GYXAX1DAMK_NWqL7GUlctnqpsLlpW1WVR0f3I/gviz/tq?-in-script&callback=

