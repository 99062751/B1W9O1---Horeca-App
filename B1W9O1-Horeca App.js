
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

//prijs producten
const price_fris = 1;
const price_wijn = 2;
const price_bier = 3;
const price_bitterballen1 = 6;
const price_bitterballen2 = 10;

//tijdelijke opslagen
var tijdelijke_opslag1 = "";
var tijdelijke_opslag2 = "";
var tijdelijke_opslag3 = "";
var tijdelijke_opslag4 = "";
var tijdelijke_opslag5 = "";

//functies aanspreken
// prijsweergave();

// function prijsweergave(){
//     document.getElementById("pp1").innerHTML = 
//     "Fris €" + price_f;

//     document.getElementById("pp2").innerHTML =
//     "Bier €" + price_b;

//     document.getElementById("pp3").innerHTML =
//     "Wijn €" + price_w;

//     document.getElementById("pp4").innerHTML =
//     "Bitterballen (8 stuks)  €" + price_b1;

//     document.getElementById("pp5").innerHTML =
//     "Bitterballen (16 stuks) €" + price_b2;
// }
function new_rekening(){
    aantal_wijn = 0;
    aantal_fris = 0;
    aantal_bier = 0;
    aantal_bitterballen1  = 0; //schalen bitterballen 8
    aantal_bitterballen2  = 0; //schalen bitterballen 16
    
    fris_cost = 0;
    bier_cost = 0;
    wijn_cost = 0;

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
}

function rekening(){
    fris_cost = price_fris * aantal_f;
    bier_cost = price_bier * aantal_bier; 
    wijn_cost = price_wijn * aantal_w;
    bal_cost1 = price_bitterballen1 * aantal_b1;
    bal_cost2 = price_bitterballen2 * aantal_b1;


    if (fris_cost != null && fris_cost != 0) {
        document.getElementById("bedrag1").innerHTML =
        aantal_fris + "x Fris (" + price_fris + ") "; 
    
        document.getElementById("fris").innerHTML =
        "€" + fris_cost; 
    } else {
        document.getElementById("bedrag1").innerHTML =
        "";
    
        document.getElementById("fris").innerHTML =
        ""; 
    }

    if (bier_cost != null && bier_cost != 0) {
        document.getElementById("bedrag2").innerHTML =
        aantal_bier + "x Bier (" + price_bier + ") "; 
    
        document.getElementById("bier").innerHTML =
        "€" + price_bier; 
    } else {
        document.getElementById("bedrag2").innerHTML =
        "";
    
        document.getElementById("bier").innerHTML =
        ""; 
    }

    if (wijn_cost != null && wijn_cost != 0) {
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

    if (bal_cost1 != null && bal_cost1 != 0) {
        document.getElementById("bedrag4").innerHTML =
        aantal_b1 + "x Bitterballen (8 stuks) (" + price_bitterballen2 + ") "; 
    
        document.getElementById("bitterballen1").innerHTML =
        "€" + price_bitterballen1; 
    } else {
        document.getElementById("bedrag4").innerHTML =
        "";
    
        document.getElementById("bitterballen1").innerHTML =
        ""; 
    }

    if (bal_cost2 != null && bal_cost2 != 0) {
        document.getElementById("bedrag4").innerHTML =
        aantal_b2 + "x Bitterballen (16 stuks) (" + price_bitterballen2 + ") "; 
        
        document.getElementById("bitterballen2").innerHTML =
        "€" + bal_cost2; 
    } else {
        document.getElementById("bedrag4").innerHTML =
        "";
        
        document.getElementById("bitterballen2").innerHTML =
        ""; 
    }
}

function bestellen(){
    Order1 = "";    
    while(Order1 != "stop"){    //als er in de invoerbalk geen stop word ingevuld moet je dit doen
        Order1= prompt("Welke bestelling wilt u toevoegen?");   //de vraag welke bestelling je wil toevoegen
    
        if(Order1 == "fris"){   //als je fris wil voer dit uit.
            tijdelijke_opslag1 = parseInt(prompt("Hoeveel " + Order1 + " wilt u toevoegen?")); 
            if (aantal_f < 0) { //als de ingoeverde hoeveelheid groter is dan 0 voer dit uit
                if(typeof aantal_f == "number" ){
                    aantal_f = aantal_f + tijdelijke_opslag1; 
                }else{
                    alert("Je kan alleen getallen invoeren bij deze vraag.");
                }

            } else {
                alert("Er kunnen geen negatieve getallen worden ingevuld.");
            }
            
            

        } else if (Order1 == "bier") {  //als je bier wil voer dit uit.
            aantal_bier = prompt("Hoeveel " + Order1 + " wilt u toevoegen?");
            if (aantal_f < 0) {
                if(typeof aantal_bier == "number" ){
                    aantal_bier = aantal_bier + tijdelijke_opslag2; 
                }else{
                    alert("Je kan alleen getallen invoeren bij deze vraag.");
                }
            }else{
                alert("Er kunnen geen negatieve getallen worden ingevuld.");
            }
            
        } else if (Order1 == "wijn") {  //als je wijn wil voer dit uit.
            aantal_w = prompt("Hoeveel " + Order1 + " wilt u toevoegen?");
            if (aantal_f < 0) {
                if(typeof aantal_w == "number" ){
                    aantal_w = aantal_w + tijdelijke_opslag3; 
                }else{
                    alert("Je kan alleen getallen invoeren bij deze vraag.");
                }
            }else{
                alert("Er kunnen geen negatieve getallen worden ingevuld.");
            }

        } else if(Order1 == "snack" || Order1 == "bitterballen"){   //als je een snack of bitterballen wil voer dit uit.
            Order1 = prompt("Welke bitterballenschaal wilt u (8 of 16 bitterballen)?");
            
            if(Order1 == 8){     //als je 8 bitterballen wil voer dit uit.
                aantal_b1 = prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
                if (aantal_f < 0) {    
                    if(typeof aantal_b1 == "number" ){
                        aantal_b1 = aantal_b1 + tijdelijke_opslag4; 
                    }else{
                        alert("Je kan alleen getallen invoeren bij deze vraag.");
                    }
                }else{
                    alert("Er kunnen geen negatieve getallen worden ingevuld.");
                }    

            }else if (Order1 == 16) {   //als je 16 bitterballen wil voer dit uit.
                aantal_b2 = prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
                if (aantal_f < 0) {
                
                    if(typeof aantal_bier == "number" ){
                        aantal_b2 = aantal_b2 + tijdelijke_opslag5; 
                    }else{
                        alert("Je kan alleen getallen invoeren bij deze vraag.");   //foutmelding dat je geen tekst kan invullen
                    }
                }else{
                    alert("Er kunnen geen negatieve getallen worden ingevuld.");   //foutmelding dat je geen -getallen kan invullen
                }
            } else {
               alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling."); //foutmelding dat je alleen kan kiezen uit 8 of 16 bitterballen
            }

            
        } else if(Order1 == "stop"){    //als je in de invoerbalk stop invuld dat je rekening komt
            rekening();
        } else if(Order1 == "new"){     //als je in de invoerbalk new invuld dat alles gereset word
            new_rekening();
        } else{
            alert("De invoerde bestelling bestaat niet, probeer het opnieuw."); //foutmelding als je iets anders typt dan er is.
        }
    }        
}


