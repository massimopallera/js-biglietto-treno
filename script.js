// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


let priceX_Km = 0.21;
let minor_discount = (20*priceX_Km)/100;
let over65_discount = (40*priceX_Km)/100;

let user_km = prompt("Inserire numero di km da percorrere:")
let age = prompt("Inserire eta`:")

let total_price = priceX_Km*user_km

if(age < 18){
    let discount = minor_discount * user_km
    actual_price = (total_price-discount)
}

let rounded = Math.round(actual_price * 100) / 100;

// let actual_price = (total_price-minor_discount)*user_km;
console.log(rounded);



// 20 : 100 = x : 0.21
// 20*0.21/100