var selector = document.getElementById("bikeselector");
var bikeProfile = document.getElementById("bikeProfile");

selector.addEventListener("change", () => {
    console.log('new value ', selector.value);
    if(selector.value == "Royal Enfield Bullet Trials."){
        bikeProfile.src = "assets/dukebike.jfif";
    }
    else{
        bikeProfile.src = "assets/royal enfield.jpg";
    }
})
