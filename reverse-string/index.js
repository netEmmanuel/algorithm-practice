
//**Problem**
//Given a String, reverse the whole string.

//**Usage**
//reversedString('hello world') = 'dlrow olleh'

//First approach to reverse a string user the built in javascript reserve helper method

const reverseString = str =>{
        return str.split('').reverse().join('');
};

module.exports = reverseString;