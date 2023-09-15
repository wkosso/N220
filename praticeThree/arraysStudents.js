var aText = document.getElementById('answers');

let grades = [78,86,92,77];

aText.innerHTML= "Array: "+ grades;
aText.innerHTML+="<br/>Second Value: "+grades[1];
grades[1]=83;
aText.innerHTML += "<br/>Array: "+ grades;
aText.innerHTML += "<br/>Array Length: "+ grades.length;
let lastgrade = grades.length-1; //3
let lgValue = ++grades[lastgrade];
aText.innerHTML += "<br/>Last Grade Change: "+ lgValue;

aText.innerHTML += "<br/>Array: "+ grades;
aText.innerHTML+="<br/>Third Value: "+grades[2];

let gradesTotal = grades[0]+grades[1]+grades[2]+grades[3];

aText.innerHTML += "<br/>Array Average: "+ (gradesTotal/grades.length);


aText.innerHTML += "<br/>Above Average : "+ ((gradesTotal/grades.length)>80);

//lab Extras

let tops=['tshirts','sweater','sweatshirt','blouse','button-down','hoodie'];
// Add value to the end
let exText = document.getElementById('extraAnswers');

tops.push('tank');
exText.innerHTML = "Array Push: "+ tops;

//Remvoes the last value
tops.pop();
exText.innerHTML+="<br/> Array Pop: " +tops;


//Removes first value
tops.shift();
exText.innerHTML +="<br/>Array Shift: "+tops;



//add value at begining 
tops.unshift("T-shirt");
exText.innerHTML +="<br/>Array unShift: "+tops;

//Add/Delete the middle
tops.splice(2,1); //Delete SweatShirt
exText.innerHTML +="<br/>Array Delete SweatShirt: "+tops;

tops.splice(3,0,"sweatshirt","tank");
exText.innerHTML +="<br/>Add SweatShirt and Tank: "+tops; 


let bottoms=['jeans','shorts','skirts','slacks','sweatpants'];
let outfits=[tops,bottoms];

document.write(outfits[0][1]+ " "+ outfits[1][3]);

//OBJECTS

const friend={
    fName:"William",
    lName:"Stevens",
    age:"27",
    student: false,
    fullName: function(){
        return this.fName + " "+ this.lName;
    }
}

console.log(friend.fullName()+ " is "+friend.age + "years old.");


const car={
    year:2020,
    make:"Hyandai",
    model: "Sonata",
    automatic:true,
    mpg:28,
    efficiency: function(){
        return(this.mpg>40);
    }


}


document.getElementById('car').innerHTML = "I own a " + car.year + " " + car.make + " " + car.model + " .";

document.getElementById('carEff').innerHTML = car.make + " " + car.model + " Efficiency: " + car.efficiency();
