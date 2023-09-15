function calcInterest(){
  var p = parseFloat(document.getElementById('Principal').value);
      var r = parseFloat(document.getElementById('rate').value);
      var t = parseFloat(document.getElementById('time').value)
         let principal=p;
         let growthrate=r;
         let interestrate= r*t*100;
         let time=t;

        
      var percentage = growthrate/ 100;

       

            let total = principal * (1 + percentage* time); 
         
          
             
          document.getElementById('answer').innerHTML = "With a beginning principal of $"+principal +" and with a growth rate of "+growthrate + "%" + " for " + time + " years" + " your total interest will be $" + interestrate+ " with a grandtotal of $" + total.toFixed(2);

          
}
