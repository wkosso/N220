// Quesiton 1
document.getElementById('title').innerHTML="DOM Manipulation";

// Question 2
document.getElementById('container').style.backgroundColor="lightblue";

// Question 3
let newItem = "item 7";
   let newLiItem = document.createElement('li');
   let newLiText = document.createTextNode(newItem);
   newLiItem.appendChild(newLiText)

   let allLists = document.getElementsByTagName('ul');
   let list = allLists[allLists.length - 1];

   list.appendChild(newLiItem);


// Question 4
document.getElementsByTagName('li')[0].style.color="crimson";

// Question 5
document.getElementsByTagName('li')[2].style.backgroundColor="pink";

// Question 6
document.getElementsByTagName('li')[4].style.backgroundColor="yellow";

// Question 7

let item7=document.getElementsByTagName('li')[6];
if(item7){
    item7.style.backgroundColor = "lightGray";
   item7.style.color = "royalBlue";
}

// Question 8
let item8= "William";
let newitem8li= document.createElement('li');
let item8liText=document.createTextNode(item8);
newitem8li.appendChild(item8liText)

 var allgroup = document.getElementsByTagName('ul');
   var group = allgroup[allgroup.length - 1];

   group.appendChild(newitem8li);


   // Question 9
   var allgroup = document.getElementsByTagName('ul');
    var group = allgroup[allgroup.length - 1];
    let fourthitem= group.children[3];
    group.removeChild(fourthitem);


   //  Question 10
 document.getElementById('btn').style.backgroundColor="rebeccapurple";
  document.getElementById('btn').style.color="white";
   document.getElementById('btn').style.border="white";



