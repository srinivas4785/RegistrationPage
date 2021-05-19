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
        bikepara.textContent = "We’ve all been taken by the Royal Enfield Thunderbird’s innate individuality. So with the X, an urban make-over of the machine, we chose to play up this very quality - its distinctiveness. The result is probably the kind of Thunderbird you’d want to have ended up with at the end of your custom modification. Purposed for our cities, towns and beyond"
    }
    else if ( bikeName == bikeNames[1]){
        bikepara.textContent = "Decades of expeditions. Thousands of kilometers of traversing the most challenging terrain. Years of living and evolving with a machine that responds to the mountains. That's how we made the Himalayan, our first dual-purpose motorcycle."

    }
}