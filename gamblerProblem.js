var stakePerDay = 100;
var betPerGame = 1;
const win = 1;

/**
 * @method randomValue generates number 0 or 1
 */
const randomValue = () => Math.floor(Math.random()*10)%2; 

/**
 * @description making bet and checking result
 */
var makeBet = () => {
    var randomNumber = randomValue();
    randomNumber == win ? console.log("Won") : console.log("Lost");
}
