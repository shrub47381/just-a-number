function gainNumber(lowestGain){
    data.numbers[0] = data.numbers[0].plus(lowestGain)
function mainLoop(){
    diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    let gain = D(1)
    gainNumber(gain.times(diff))
window.setInterval(function(){
    mainLoop()
}, 50);
