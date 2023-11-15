 function getTarget(e) {
                        if (!e) {
                            e = window.event;
                        }
                        return e.target || e.srcElement;
                    }

                    var viewInfo = document.querySelector('main');
                    viewInfo.addEventListener('click', displayInfo, false);

                    function displayInfo(e) {
                        var target = getTarget(e);
                        if (target.tagName == "H2") {
                            var tParent = target.parentNode;
                            var parentDiv = tParent.children;
                            console.log(parentDiv[1]);
                            if (parentDiv[1].style.display == "none") {
                                parentDiv[1].style.display = "block";
                            } else {
                                parentDiv[1].style.display = "none";
                            }
                        }
                    }

                    var myList = document.querySelector("#codeBox ul");
                    var addBtn = document.getElementsByTagName('input')[0];

                    addBtn.addEventListener('click', addItem, false);

                    function addItem() {
                        var newItem = prompt("New Item:");
                        var newLI = document.createElement('li');
                        var newLIText = document.createTextNode(newItem);
                        newLI.appendChild(newLIText);
                         myList.appendChild(newLI);

 // Add icons to new Items
let image= document.createElement('img');
                          image.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png";
image.classList.add('listIcon');
                        newLI.appendChild(image);
                       
                       

                    }

let loopItems=document.querySelectorAll('#codeBox ul li');
let totalItems = loopItems.length;

for(var i=0; i<totalItems; i++){
 let image= document.createElement('img');
    image.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png";
image.classList.add('listIcon');



loopItems[i].appendChild(image);



 
 
}
// console.log(loopItems);



// Trash or Gray out items
// let colorChange=document.getElementById('codeBox')

 let image= document.createElement('img');
    image.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png";
image.classList.add('listIcon');



function changeProp(e) {
     
    let target=getTarget(e);
   let tParent= target.parentNode;
// console.log(tParent);

    if(tParent.tagName=='LI'){
        tParent.parentNode.removeChild(tParent);

        // tParent.remove(target);
        // console.log('here');
          
    }else if(tParent.tagName=='UL'){
        target.classList.add('selected');
//  console.log('here');
    }
    





}

//     function getTarget(e){
//     return e.target || e.srcElement;
// }


// // let colorChange=document.querySelectorAll('#codeBox ul li')[0]
let colorChange=document.getElementById('codeBox')
colorChange.addEventListener('click',changeProp,false);
console.log('here6')



// Reinstate Item

function Reinstate(e){
    
     let target=getTarget(e);
     let tParent= target.parentNode;

    if(tParent.tagName=='UL'){
    if(target.className=='selected'){
target.classList.remove('selected');

    }else {
     target.classList.add('selected');
     console.log('here2');
}}
    
    // }else if(tParent.tagName=='UL' && !target.classList.contains('selected')){
    //     target.classList.add('selected');
    //     console.log('here')
    // }

  



}
let greyChange=document.querySelectorAll('#codeBox ul')[0]

greyChange.addEventListener('click',Reinstate,false);
console.log('here0')






            
