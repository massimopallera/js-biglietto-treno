// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let priceX_Km = 0.21;

//Calculated discounts here so it could be easier to change if the discount will be changed
let minor_discount = (20*priceX_Km)/100; 
let over65_discount = (40*priceX_Km)/100;
let actual_price;


let user_km = prompt("Inserire numero di km da percorrere:");

//to control if the user inserts a valid number of kms
if (user_km > 0){
    
    let age = prompt("Inserire eta`:")
    
    //to control if user inserts a valid age  (used 100 as maximum age, it could be changed anyway)
    if (age > 0 && age < 100){

        //calculate the total price 
        let total_price = priceX_Km*user_km


        //control which discount has to be used
        if(age < 18){
            discount = (minor_discount * user_km)
        } else if (age >= 65){
            discount = over65_discount * user_km
        } else{
            discount = 0
        }

        // subtract discount from total price
        actual_price = (total_price-discount)

        //round the decimal part
        let rounded = Math.round(actual_price * 100) / 100;


        let message = `Il costo per percorrere ${user_km}Km è di €${rounded}`;
        console.log(message);
    }
    else{
        console.log("Errore. L'età inserita non è valida")
    }

} else {
    console.log("Errore. Il valore inserito non è valido")
}