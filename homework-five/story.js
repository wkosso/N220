

let tool;
let cabin;



function story() {
  let player = prompt("Welcome to my choose-your-own adventure game enter name: ");
   alert("Welcome, " + player + "! We are out on a mystery search excursion today!.  click");
 tool=prompt("To begin your adventure you need to pick one of these three essentials: Fire Crackers, Shotgun, or Baseball bat");

 let room = prompt("On Halloween night, you chose to go on a journey to the haunted house, where it is said that there is a person living in the place, the place  has no phone signal because you were feeling adventurous you decided to drive to the area to confirm the rumors. While strolling through the forest, you glimpsed the silhouette of an enigmatic man brandishing an axe. Do you INVESTIGATE or LEAVE?");


 if(room.toUpperCase()=="INVESTIGATE"){
        enterRoom();
    }else if(room.toUpperCase()=="LEAVE"){
        leaveRoom();
    }else{
      alert("Invalid");
    }
}




function leaveRoom(){
    alert("Oh no, you lost the opportunity to become a well-known Dectective!");
}

function enterRoom(){
// fire crackers starts here
if(tool.toUpperCase()=="FIRE CRACKERS"){
alert("You investigate the shadow that you saw which lead you into a strange cabin.");
let cabin= prompt("Do you ENTER or KEEP GOING?");
if(cabin.toUpperCase()=="ENTER"){
  cabinHouse();
}else if(cabin.toUpperCase()=="KEEP GOING"){
  going();
}else{
   alert("Invalid");
}
}



// Shotgun starts here
if(tool.toUpperCase()=="SHOTGUN"){
  alert("You investigate the shadow that you saw which lead you into a strange cabin.");
let cabin= prompt("Do you ENTER or KEEP GOING?");
if(cabin.toUpperCase()=="ENTER"){
  cabinHouse2();
}else if(cabin.toUpperCase()=="KEEP GOING"){
  going2();
}else{
  alert("Invalid");
}
}

// Baseball starts here
if(tool.toUpperCase()=="BASEBALL BAT"){
  alert("You investigate the shadow that you saw which lead you into a strange cabin.");
let cabin= prompt("Do you ENTER or KEEP GOING?");
if(cabin.toUpperCase()=="ENTER"){
  cabinHouse3();
}else if(cabin.toUpperCase()=="KEEP GOING"){
  going3();
}else{
   alert("Invalid");
}
}

}




// Fire cracker choices
function going(){
  alert("The man sees you, you fire the firecracker it hits him but he wasn't stunned he swings the axe at you and you died!")
}





function cabinHouse(){
  alert("You see the man outside but since you were in the cabin you are looking for a hiding spot");
  let inside= prompt("where do you hide CLOSET or BED");

  if(inside.toUpperCase()=="CLOSET"){
    closet();
  }else if(inside.toUpperCase()=="BED"){
   Bed(); 
  }else{
    alert("Invalid");
  }
}



function closet(){
  alert("The man enters the house with the axe and swings at the closet and you die!");
}

function Bed(){
  alert("The man didn't see you so you go back outside and see a cell tower.");
let outside= prompt("Do you go back to your CAR or CELLTOWER for service");
if(outside.toUpperCase()=="CAR"){
  car();
}else if(outside.toUpperCase()=="CELLTOWER"){
  celltower();
}else{
  alert("Invalid");
}
}

function car(){
  alert("The man cut the tires so the tires are flat the man sees you and you shoot firecracker due to panic you miss your shot and die by an axe");
}


function celltower(){
  alert("You go to the celltower but you are afraid of heights the man sees you and throws and axe before you could react and you died.")
}










// Shotgun choices

function going2(){
  alert("When the axe guy spots you on the way, you try to shoot with your shotgun but miss. Since there is just one bullet in the gun, the axe man takes advantage of this and kills you.");
}

function cabinHouse2(){
   alert("You see the man outside but since you were in the cabin you are looking for a hiding spot");
  let inside= prompt("where do you hide CLOSET or BED");

  if(inside.toUpperCase()=="CLOSET"){
    closet();
  }else if(inside.toUpperCase()=="BED"){
   Bed2(); 
  }else{
    alert("Invalid");
  }
}






function Bed2(){
  alert("The man didn't see you so you go back outside and see a cell tower.");
let outside= prompt("Do you go back to your CAR or CELLTOWER for service");
if(outside.toUpperCase()=="CAR"){
  car2();
}else if(outside.toUpperCase()=="CELLTOWER"){
  celltower2();
}else{
  alert("invalid");
}
}

function car2(){
  alert("You sprint to your car, the man follows, and you aim your shotgun at him, only to accidentally shoot your car's gas tank, blowing both of you up.");
}

function celltower2(){
  alert("Normally, you are frightened of heights, but since you have a shotgun, you feel more confident and climb the tower to gain phone coverage so you can call the police for help. When the axe man sees you climbing the tower, your anxiety and panic cause you to lose your balance and fall to your death.");
}



// Baseball bat section 


 function going3(){
  alert("You keep going the axe man sees you you try to swing you bat at him but he dodges and swing his axe at you due to blood loss you died.");
 }
function cabinHouse3(){
  alert("You see the axe man so you hide under the bed.The axe man didn't see you so you step outiside and you see a cell tower ");
 let outside= prompt("Do you go back to your CAR or CELLTOWER for service");
if(outside.toUpperCase()=="CAR"){
  car3();
}else if(outside.toUpperCase()=="CELLTOWER"){
  celltower3();
}else{
  alert("Invalid");
}
}

function celltower3(){
  alert("You climb the tower gain some reception and you call for help explaning what happen. You hide at the cell tower till the police arrive at the scene the axe man tries to run away due to seeing the cops car, you chase after him and swing the bat as hard as you can to knock him out. The cops thanks you for the sevice. Days later you are in the newspaper for solving a long ongoing investigation.");
}

function car3(){
  alert("You run to your car the axe man sees you, you smaacked him in the head he passes out due to blood loss and there is blood all over you.You rush to your car to drive away from the vicinity. While on the way a cop sees you Do you PULL OVER or RUN AWAY due to the blood on your body.");

  let cop = prompt("PULL OVER or RUN AWAY")
  if(cop.toUpperCase()=="PULL OVER"){
    pullover();
  }else if(cop.toUpperCase()=="RUN AWAY"){
    runaway();
  }else{
    alert("invalid");
  }
}

function pullover(){
  alert("You explain to the police what happened, why you have blood on your face and bat, and everything. After insisting and telling the story of what happen policeman believes you, they apprehend the axe man. A few days later, you received money in the mail as payment for your bravery.");
}

function runaway(){
  alert("You're panicking because you think the cops won't believe you and because you think you might have killed a man. You accelerate your vehicle, the cops close in on you, and you end up hitting a cliff and getting into an accident.");
}



