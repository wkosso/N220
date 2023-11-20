let stringText= document.getElementById('string');
let zipText= document.getElementById('zip');
let ccText= document.getElementById('ccard');
let phoneText= document.getElementById('phone');


// Regular Expression  / /

// string
function validateString(){
    let vs1= /ralph/i;
    // i=case insentive it doesn't matter upper or lower case

    let vs2= /^(cat)/;  // parentesis cat as a whole need to be at the begning


     let vs3= /(dog$)/; //dog has to bt at the end


    document.getElementById('stringAns').innerText = vs3.test(stringText.value)

}

stringText.addEventListener('blur',validateString);



function validateZip(){
let vz1= /^[0-9]{5}$/; //{5} 

let vz2= /^\d{5}$/; //same as above

let vz3= /^([0-9]{5})([- ]?)([0-9]{4})?$/;

   document.getElementById('zipAns').innerText = vz3.test(zipText.value) 
}

zipText.addEventListener('blur',validateZip);


// credit Card


function validateCC(){

    // let vc1=/^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4}([- ]?)(\d{4}))$/;

   let vc1= /^(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})([- ]?)(\d{4})$/;
       document.getElementById('ccAns').innerText = vc1.test(ccText.value) 
}


ccText.addEventListener('blur',validateCC);


function validatePH(){

    let ph1=/^(\(\d{3})\)|(\d{3})([- ]?)(\.?)(\d{3})([-]?)(\.?)(\d{4})$/;

    document.getElementById('phoneAns').innerText= ph1.test(phoneText.value);
}

phoneText.addEventListener('blur',validatePH);






// Months 01 -12
let monthRegEx=/0[1-9]|1[0-2]/;

// Date 1-31

let dateRegEx= /[1-9]|[12][0-9]|3[0l]/;


// Year 20th 21st century

let yearRegEX=/(19|20)\d{2}/;