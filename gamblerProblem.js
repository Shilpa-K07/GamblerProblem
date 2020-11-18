var stakePerDay = 100;
var betPerGame = 1;
var wonDict = {};
var lostDict = {};
const WIN = 1;
const MAX_DAY = 20;
const INITIAL_STAKE = 100;
/**
 * @method randomValue generates number 0 or 1
 */
const randomValue = () => Math.floor(Math.random()*10)%2; 

/**
 * @method maximumStake calculates plus 50% on stake
 */
const maximumStake = () => (stakePerDay + (0.5 * stakePerDay));

/**
 * @method minimumStake calculates minus 50% on stake
 */
const minimumStake = () => (stakePerDay - (0.5 * stakePerDay));

/**
 * @description making bet and checking result
 */
var makeBet = () => {
    var randomNumber = randomValue();
    randomNumber == WIN ? stakePerDay += betPerGame : stakePerDay -= betPerGame;
}

/**
 * @description calculate stake if won or lost 50% of stake then quit
 * @method callBack calls @method makeBet
 */
var calculateStake = (callBack) => {
    var maximumStakeValue = maximumStake();
    var minimumStakeValue = minimumStake();
    while(stakePerDay < maximumStakeValue && stakePerDay > minimumStakeValue){
        callBack();
    }
}

/**
 * Calculate total amount won or lost after 20 days
 * @var wonDict stores the days won as key and  stake as value
 * @var lostDict store the days lost as key and stake as value
 */

var stakeForMonth = (callBack) => {
    var totalAmount = 0;
    var currentDay = 1;
    while(currentDay <= MAX_DAY){
        calculateStake(makeBet);
        totalAmount += stakePerDay;
        stakePerDay > INITIAL_STAKE ? wonDict[currentDay] = stakePerDay : lostDict[currentDay] = stakePerDay;
        currentDay ++;
        stakePerDay = 100;
    }
    console.log("Total amount won/lost : "+totalAmount);
    callBack();
}

/**
 * @description display won days and lost days with amount
 */
 var displayWonAndLostDays = () => {
    console.log("\nDisplay won days and amount")
    for(var key in wonDict) {
        console.log(key + " : " + wonDict[key]);
    }
    console.log("\nDisplay lost days and amount")
    for(var key in lostDict) {
        console.log(key + " : " + lostDict[key]);
    } 
 }
 
stakeForMonth(displayWonAndLostDays);
