 //dating
      let x = 3;
      let y = 14.0;
      let z = x * y;
      document.getElementById("ticketNum").innerHTML +=
        x;
      document.getElementById("ticketCost").innerHTML += y;
      document.getElementById("ttCost").innerHTML += z;

//shopping
       let shirt = 35;
      let pants = 75;
      let shoes = 60;
      let Jacket = 70;
      const account = 235.87;

      Totalcost = shirt + pants + shoes;
      Moneyleft = account - Totalcost;
      // document.write("<p>After purchasing the outfit my bank account is:" + (account-Totalcost) + "</p>");
      document.getElementById("bank").innerHTML += 'After purchasing the outfit my account balance is $'+
        Moneyleft;

      document.getElementById("addJacket").innerHTML += 'Add Jacket:' +
        
        (Jacket <= Moneyleft)  ;


        
      //pizza
      let pizzanumber = 4;
      let pizzaslice = 8;
      let studentslice = 2.5;

      let totalpizza = pizzanumber * pizzaslice;
      let studentfed = Math.floor(
        totalpizza / studentslice
      );
      let pizzaleftover = Math.floor(
        totalpizza / studentfed
      );

      // document.getElementById("Pizza").innerHTML +=
      //totalpizza;
      document.getElementById("studentPizza").innerHTML += 'students: '  +
        studentfed;
      document.getElementById("profPizza").innerHTML += 'rector: '+
        pizzaleftover;
        


         //Montey Mega Bar
      let Adult = 12.0;
      let Child = 6;
      let Drinks = 1.5;

      let AdultBuffet = Adult * 2;
      let ChildBuffet = Child * 1;
      let TotalDrinks = Drinks * 3;
      let Total =
        AdultBuffet + ChildBuffet + TotalDrinks;
      document.getElementById("Monty").innerHTML += '$'+ Total;



        //Average Earned Tips
      let week1 = 202.45;
      let week2 = 134.97;
      let week3 = 256.63;
      let week4 = 178.22;
      let weeklyaverage =
        (week1 + week2 + week3 + week4) / 4;
      document.getElementById("tips").innerHTML += 'Weekly Tip Average is $' +
        weeklyaverage;