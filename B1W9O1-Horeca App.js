while(Order1 != "stop"){
    var Order1= prompt("Welke bestelling wilt u toevoegen?");

    if(Order1 == "stop"){
        alert("Het bestellen is gestopt.");

    }

    else{
        var amount1= prompt("Hoeveel " + Order1+ " wilt u toevoegen?");
         amount1 = parseInt(amount1);
        var price_w= 2;
        var price_f= 1;
        var price_b= 3;

        if(Order1 == "wijn"){
            function Calculator1(price_w, amount1){
                return price_w*parseInt(amount1);
                
            }
            document.write("U heeft " + parseInt(amount1) + " keer " + Order1  + " besteld." + "<br>");
            console.log("U heeft " + parseInt(amount1) + " keer " +  Order1 +  " besteld." + "<br>");
            document.write(price_w + " x " + parseInt(amount1) + "= " + Calculator1(price_w,parseInt(amount1)) + "€" + "<br>");
            console.log(price_w + " x " + parseInt(amount1) + "= " + Calculator1(price_w,parseInt(amount1)) + "€" + "<br>" );
        
        }
            
        if(Order1 == "fris"){
            function Calculator2(price_f,amount1){
                return price_f*parseInt(amount1);
            }
            document.write("U heeft " + parseInt(amount1) + " keer " + Order1  + " besteld." + "<br>");
            console.log("U heeft " + parseInt(amount1) + " keer " +  Order1 +  " besteld." + "<br>");
            document.write(price_f + " x " + parseInt(amount1) + "= " + Calculator2(price_f,parseInt(amount1)) + "€"  + "<br>");
            console.log(price_f + " x " + parseInt(amount1) + "= " + Calculator2(price_f,parseInt(amount1)) + "€"  + "<br>")


        }

        if(Order1 == "bier"){
            function Calculator3(price_b, amount1){
                return price_b*parseInt(amount1);
            }
            document.write("U heeft " + parseInt(amount1) + " keer " + Order1  + " besteld." + "<br>");
            console.log("U heeft " + parseInt(amount1) + " keer " +  Order1 +  " besteld." + "<br>");
            document.write(price_b + " x " + parseInt(amount1) + "= " + Calculator3(price_b,parseInt(amount1)) + "€"  + "<br>");
            console.log(price_b + " x " + parseInt(amount1) + "= " + Calculator3(price_b,parseInt(amount1)) + "€" + "<br>");

        }
        
    }
    
}
function berekening(){
    return Calculator1(price_w,parseInt(amount1)) + Calculator2(price_f,parseInt(amount1)) + Calculator3(price_b,parseInt(amount1));
}
   document.write("De totale rekening: " + Calculator1(price_w,parseInt(amount1)) + " + " + Calculator2(price_f,parseInt(amount1)) + " + " + Calculator3(price_b,parseInt(amount1)) + " = " + berekening() + "€");
   



