// Overview:

// brace = array of strings
// each string in array has curly brackets, square brackets, and parentheses
// we want to take each string and find out if it is "balanced" or not
// we need to return an array containing whether the strings are balanced or not (if first string is balanced, first iteration in returned array will say "YES", otherwise it will say "NO", and continuing)
// constraints:
// - braces array length cannot be less than 1 or greater than 15
// - each string in braces array cannot be less than 1 or greater than 100
// - if string length is not divisible by 2, it can't be balanced

// Pseudo-code:

// We want to loop through each string in the braces array
// Within each iteration in the loop, we want to call a helper function and pass the string iteration to it
// Within this helper function, we want to take the passed string iteration and turn it into an array using the split("") method
// using a while loop, while the length of this new array we created is greater than 0, continue the code inside this while loop
// define the start of where you will compare the brackets in this array (let start = (array.length / 2) - 1) --> middle of array - 1
// define the end of where you will compare the brackets in this array (let end = start + 1)
// concat the substrings in the positions of the start iteration and end iteration (array[start] + array[end])
// if the substring equals balanced curlies, parens or square brackets, splice off those two substrings together (array.splice(start, 2))
// if they are not balanced, move to the next set of brackets next to it and concat (array[start - 1] + array[start])
// if these are not balanced, we need to push "NO" into the array we want to return from the original function
// if they are balanced, we want to splice those brackets from the array (let beforeStart = start - 1; array.splice(beforeStart, 2))
// if while loop ends and the array's length is 0, we want to add "YES" to the array we want to return from the original function
// if we return from this while loop at anytime, it will exit the function (if brackets are not balanced)

function matchingBrackets(braces) {

    let answerArray = [];
    
    if (braces.length < 1 || braces.length > 15) return answerArray;

    function helper(string) {

        const curlies = "{}";
        const parens = "()";
        const squares = "[]";

        let stringToArray = string.split("");

        while (stringToArray.length > 0) {
            if (stringToArray[0] === "}" || stringToArray[0] === ")" || stringToArray[0] === "]") return "NO";
            if ((stringToArray.length % 2 != 0) || stringToArray.length <= 1 || stringToArray.length > 100) return "NO";

            let start = (stringToArray.length / 2) - 1;
            let end = start + 1;
            let concat  = stringToArray[start] + stringToArray[end];

            if (concat === curlies || concat === parens || concat == squares) {
                stringToArray.splice(start, 2);
            } else {
                let reverseConcat = stringToArray[start - 1] + stringToArray[start];
                if (reverseConcat != curlies && reverseConcat != parens && reverseConcat != squares) {
                    return "NO";
                } else {
                    let beforeStart = start - 1;
                    stringToArray.splice(beforeStart, 2);
                }
            }
        }
        return "YES";
    }

    for (let i = 0; i < braces.length; i++) {
        let pushToArray = helper(braces[i]);
        answerArray.push(pushToArray);
    }

    return answerArray;

}

console.log(matchingBrackets(["{{", "{{]}}", "(())"])); // ["NO", "NO", "YES"]