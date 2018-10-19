/**
 * @param {string} message
 */
const logger =  message => {
  console.log(messge);
};


const reverseArray = array => array.reverse();

const reverseString = string => {
  return string
    .split("")
    .reverse()
    .join("");
};


/**
 * @param {string} string
 * @return {string}
 */
const upcase = string => string.toUpperCase();

const name = "Sean";

logger(reverseString(upcase(nam)));
