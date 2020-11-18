var stakePerDay = 100;
var betPerGame = 1;
const win = 1;
const loose = 0;

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
    randomNumber == win ? stakePerDay += betPerGame : stakePerDay -= betPerGame;
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
calculateStake(makeBet);
