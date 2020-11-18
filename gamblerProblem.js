var stakePerDay = 100;
var betPerGame = 1;
const WIN = 1;
const MAX_DAY = 20;
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
 */
var stakeForMonth = () => {
    var totalAmount = 0;
    var currentDay = 1;
    while(currentDay <= MAX_DAY){
        calculateStake(makeBet);
        totalAmount += stakePerDay;
        currentDay ++;
        stakePerDay = 100;
    }
    console.log("Total amount won/lost : "+totalAmount);
}

stakeForMonth();
