
// Opbouw document
// helemaal bovenaan Naam
// bovenaan alle variabelen
// daaronder functies

var Order1 = "";

// aantal producten
var aantal_wijn = 0;
var aantal_fris = 0;
var aantal_bier = 0;
var aantal_bitterballen1  = 0; //schalen bitterballen 8
var aantal_bitterballen2  = 0; //schalen bitterballen 16

//de te betalen prijs
var fris_cost = 0;
var bier_cost = 0;
var wijn_cost = 0;
var bitterballen_cost1= 0;
var bitterballen_cost2= 0;
var totale_rekening = 0;


//prijs producten
const price_fris = 1;
const price_wijn = 2;
const price_bier = 3;
const price_bitterballen1 = 6;
const price_bitterballen2 = 10;

//tijdelijke opslagen
var tijdelijke_opslag1 = 0;
var tijdelijke_opslag2 = 0;
var tijdelijke_opslag3 = 0;
var tijdelijke_opslag4 = 0;
var tijdelijke_opslag5 = 0;


function bestellen(){   
    Order1 = "";    //bestelling 1 is eerst niks omdat je nog niks hebt besteld
    while(Order1 != "stop"){    //als er in de invoerbalk geen stop word ingevuld moet je dit doen
        Order1 = prompt("Welke bestelling wilt u toevoegen?").toLowerCase();   //de vraag welke bestelling je wil toevoegen
    
        if(Order1 == "fris"){   //als je fris wil voer dit uit.
            tijdelijke_opslag1 = parseInt(prompt("Hoeveel " + Order1 + " wilt u toevoegen?")); 
            if(!(isNaN(tijdelijke_opslag1))) {  //als dit geen tekst is, voer dit uit
                if (tijdelijke_opslag1 >= 0) { //als de ingoeverde hoeveelheid groter is dan 0 voer dit uit
                    aantal_fris = aantal_fris + tijdelijke_opslag1; //aantal fris is het ingevoerde aantal + het al ingevoerde aantal
                }else {
                    alert("Er kunnnen negatieve getallen worden ingevuld.");  //als er een negatief getal word ingevuld voer dit uit
                }    
            }else{
                alert("Je kan alleen getallen invoeren bij deze vraag.");   //als er een tekst word getypt
            }       

        } else if (Order1 == "bier") {  //als je bier wil voer dit uit.
            tijdelijke_opslag2 = parseInt(prompt("Hoeveel " + Order1 + " wilt u toevoegen?"));
            if(!(isNaN(tijdelijke_opslag2))){
                if (tijdelijke_opslag2 > 0) {
                    aantal_bier = aantal_bier + tijdelijke_opslag2; 
                }else{
                    alert("Er kunnen geen negatieve getallen worden ingevuld.");
                }
            }else{
                alert("Je kan alleen getallen invoeren bij deze vraag.");
            }
            
            
        } else if (Order1 == "wijn") {  //als je wijn wil voer dit uit.
            tijdelijke_opslag3 = parseInt(prompt("Hoeveel " + Order1 + " wilt u toevoegen?"));
            if(!(isNaN(tijdelijke_opslag3))){
                if (tijdelijke_opslag3 >= 0) {
                    aantal_wijn = aantal_wijn + tijdelijke_opslag3; 
                }else{
                    alert("Er kunnen geen negatieve getallen worden ingevuld.");
                }  
            }else{
                alert("Je kan alleen getallen invoeren bij deze vraag.");
            }
            
        

        } else if(Order1 == "snack" || Order1 == "bitterballen"){   //als je een snack of bitterballen wil voer dit uit.
            Order1 = parseInt(prompt("Welke bitterballenschaal wilt u (8 of 16 bitterballen)?"));
            
            if(Order1 == 8){     //als er bij de bitterballenschaal 8 word ingevuld voer dit uit.
                tijdelijke_opslag4 = parseInt(prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?"));

                if(!(isNaN(tijdelijke_opslag4))){
                    if (tijdelijke_opslag4 >= 0) {        
                        aantal_bitterballen1 = aantal_bitterballen1 + tijdelijke_opslag4; 
                    }else{
                        alert("Er kunnen geen negatieve getallen worden ingevuld.");
                    } 
                }else{
                    alert("Je kan alleen getallen invoeren bij deze vraag.");
                }

            }else if (Order1 == 16) {   //als er bij de bitterballenschaal 16 word ingevuld voer dit uit.
                tijdelijke_opslag5 = parseInt(prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?"));

                if(!(isNaN(tijdelijke_opslag5))){
                    if (tijdelijke_opslag5 >= 0) {
                        aantal_bitterballen2 = aantal_bitterballen2 + tijdelijke_opslag5; 
                    }else{
                        alert("Er kunnen geen negatieve getallen worden ingevuld.");   //foutmelding dat je geen -getallen kan invullen
                    }
                    
                }else{
                    alert("Je kan alleen getallen invoeren bij deze vraag.");   //foutmelding dat je geen tekst kan invullen
                }
                
            } else {
               alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling."); //foutmelding dat je alleen kan kiezen uit 8 of 16 bitterballen
            }

            
        } else if(Order1 == "stop"){    //als je in de invoerbalk stop invuld dat je rekening komt
            rekening();                 //voer de functie rekening uit 
        } else if(Order1 == "new"){     //als je in de invoerbalk new invuld dat alles gereset word
            new_rekening();             //voer de functie newrekening uit 
        } else{
            alert("De invoerde bestelling bestaat niet, probeer het opnieuw."); //foutmelding als je iets anders typt dan er is.
        }
    }        
}

function rekening(){
    fris_cost = price_fris * aantal_fris;   //totale kosten fris is prijs keer het aantal
    bier_cost = price_bier * aantal_bier;   //totale kosten bier is prijs keer het aantal
    wijn_cost = price_wijn * aantal_wijn;   //totale kosten wijn is prijs keer het aantal
    bitterballen_cost1 = price_bitterballen1 * aantal_bitterballen1;    //totale kosten bitterballen 8 is prijs keer het aantal
    bitterballen_cost2 = price_bitterballen2 * aantal_bitterballen2;    //totale kosten bitterballen 16 is prijs keer het aantal

    totale_rekening = fris_cost + bier_cost + wijn_cost + bitterballen_cost1 + bitterballen_cost2;  //totale kosten van alles bij elkaar opgeteld

    if (totale_rekening !== null && totale_rekening !== 0) {  //als de totale rekening niet nul is voer dit uit
        document.getElementById("totaal").innerHTML =
        "Totaal: ";
        
        document.getElementById("totaal_bedrag").innerHTML =
        "€" + totale_rekening; 
    } else {
        document.getElementById("totaal").innerHTML =
        "";
        
        document.getElementById("totaal_bedrag").innerHTML =
        ""; 
    }

    if (fris_cost !== null && fris_cost !== 0) {          //als de totale rekening niet nul is voer dit uit
        document.getElementById("bedrag1").innerHTML =
        aantal_fris + "x Fris (" + price_fris + ") ";   //Zet dit op de site, prijs product en aantal x product
    
        document.getElementById("fris").innerHTML =     //Zet dit op de site, totale kosten product en aantal x product
        "€" + fris_cost; 
    } else {
        document.getElementById("bedrag1").innerHTML =  //als het wel nul is zet dan niks op de site
        "";
    
        document.getElementById("fris").innerHTML =     //als het wel nul is zet dan niks op de site
        ""; 
    }

    if (bier_cost !== null && bier_cost !== 0) {         
        document.getElementById("bedrag2").innerHTML =
        aantal_bier + "x Bier (" + price_bier + ") "; 
    
        document.getElementById("bier").innerHTML =
        "€" + bier_cost; 
    } else {
        document.getElementById("bedrag2").innerHTML =
        "";
    
        document.getElementById("bier").innerHTML =
        ""; 
    }

    if (wijn_cost !== null && wijn_cost !== 0) {
        document.getElementById("bedrag3").innerHTML =
        aantal_wijn + "x Wijn (" + price_wijn + ") "; 
    
        document.getElementById("wijn").innerHTML =
        "€" + wijn_cost; 
    } else {
        document.getElementById("bedrag3").innerHTML =
        "";
    
        document.getElementById("wijn").innerHTML =
        ""; 
    }

    if (bitterballen_cost1 !== null && bitterballen_cost1 !== 0) {    
        document.getElementById("bedrag4").innerHTML =
        aantal_bitterballen1 + "x Bitterballen (8 stuks) (" + price_bitterballen1 + ") "; 
    
        document.getElementById("bitterballen1").innerHTML =
        "€" + bitterballen_cost1; 
    } else {
        document.getElementById("bedrag4").innerHTML =
        "";
    
        document.getElementById("bitterballlen1").innerHTML =
        ""; 
    }

    if (bitterballen_cost2 !== null && bitterballen_cost2 !== 0) {
        document.getElementById("bedrag5").innerHTML =
        aantal_bitterballen2 + "x Bitterballen (16 stuks)" + price_bitterballen2 + ") ";

        document.getElementById("bitterballen2").innerHTML =
        "€" + bitterballen_cost2;
        
    }else{
        document.getElementById("bedrag5").innerHTML =
        "";
        document.getElementById().innerHTML =
        "";
    }

    
}


function new_rekening(){
    aantal_wijn = 0;
    aantal_fris = 0;
    aantal_bier = 0;
    aantal_bitterballen1  = 0; //schalen bitterballen 8
    aantal_bitterballen2  = 0; //schalen bitterballen 16
    
    fris_cost = 0;  //totale kosten product 
    bier_cost = 0;
    wijn_cost = 0;
    totale_rekening= 0;


    document.getElementById("totaal").innerHTML =   //deze en de andere onder deze code resetten alles terug
    "";
    
    document.getElementById("totaal_bedrag").innerHTML =
    ""; 
    document.getElementById("totaal").innerHTML =
    "";
    
    document.getElementById("totaal_bedrag").innerHTML =
    ""; 

    document.getElementById("bedrag1").innerHTML =  
    "";
    
    document.getElementById("fris").innerHTML =     
    "";

    document.getElementById("bedrag2").innerHTML =     
    "";
    
    document.getElementById("bier").innerHTML =
    ""; 

    document.getElementById("bedrag2").innerHTML =
    "";

    document.getElementById("bier").innerHTML =
    ""; 

    document.getElementById("bedrag3").innerHTML =
    "";

    document.getElementById("wijn").innerHTML =
    ""; 

    document.getElementById("bedrag4").innerHTML =
    "";

    document.getElementById("bitterballen1").innerHTML =
    ""; 

    document.getElementById("bedrag4").innerHTML =
    "";
        
    document.getElementById("bitterballen2").innerHTML =
    ""; 

    document.getElementById("bedrag5").innerHTML =
    "";
}
