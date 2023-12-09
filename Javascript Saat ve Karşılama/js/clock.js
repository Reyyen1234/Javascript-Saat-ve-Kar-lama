
let fullName= prompt("lutfen adiniz giriniz: ")

let Name =document.querySelector("#myName")
Name.innerHTML=fullName



function showTime() {
    let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    let date = new Date();
    let gunNumber = date.getDay();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    

    document.querySelector("#myClock").innerHTML = `${saat}:${dakika}:${saniye < 10 ? "0" + saniye : saniye} ${gunler[gunNumber]}`
    document.querySelector("#myClock").innerHTML = `${saat}:${dakika}:${saniye} ${gunler[gunNumber]}`

}
setInterval(showTime, 1000);