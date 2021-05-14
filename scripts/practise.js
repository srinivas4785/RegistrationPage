var bikeNames = ["Royal Enfield Thunderbird", "Royal Enfield Himalayan."];

var selector = document.getElementById("bikeselector");
var bikeProfile = document.getElementById("bikeProfile");

selector.addEventListener("change", onBikeNameChanged.bind(this));

function onBikeNameChanged() {
    parachange(selector.value);
    changeBikeProp(selector.value);
}
 
function changeBikeProp (_bikename) {
    for (let i = 0; i < bikeNames.length; i++) {
        const bikeName = bikeNames[i];
        if (_bikename === bikeName) {
            console.log('_bikename :>> ', _bikename);   

        }
    }
}
function parachange (bikeName) {
    var bikepara = document.getElementById("1stpara");
    if (bikeName == bikeNames[0]) {
        bikepara.textContent = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
    }
    else if ( bikeName == bikeNames[1]){
        bikepara.textContent = "111111111111111111111111111111111111111111111\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"

    }
}