// function longestPalindrome(s) {
//     if (!s || s.length <= 2) {
//         return "none";
//     }

//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < s.length; i++) {
//         const len1 = expandAroundCenter(s, i, i);
//         const len2 = expandAroundCenter(s, i, i + 1);
//         const len = Math.max(len1, len2);

//         if (len > end - start) {
//             start = i - Math.floor((len - 1) / 2);
//             end = i + Math.floor(len / 2);
//         }
//     }

//     return s.substring(start, end + 1);
// }

// function expandAroundCenter(s, left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--;
//         right++;
//     }

//     return right - left - 1;
// }

// // Example
// const inputString = "asbananabef";
// const result = longestPalindrome(inputString);
// console.log(result); // Output: "none"


//=======


// Pseudocode for 1to50 game automation

// Function to find and click the numbers in order
function clickNumbersInOrder() {
    let currentNumber = 1;
  
    // Define a function to find and click the number
    function clickNumber(number) {
      const element = findElementByNumber(number);
      if (element) {
        element.click();
        currentNumber++;
      }
    }
  
    // Function to find the DOM element by its text content
    function findElementByNumber(number) {
      const elements = document.querySelectorAll('.number'); // adjust the selector based on the game's structure
      for (const element of elements) {
        if (element.textContent == number) {
          return element;
        }
      }
      return null;
    }
  
    // Function to click numbers sequentially with a delay
    function clickNumbersSequentially() {
      const intervalId = setInterval(() => {
        if (currentNumber <= 50) {
          clickNumber(currentNumber);
        } else {
          clearInterval(intervalId);
          console.log('Automation completed!');
        }
      }, 1000); // adjust the delay based on your preference and game speed
    }
  
    // Start the automation
    clickNumbersSequentially();
  }
  
  // Call the function to start the automation
  clickNumbersInOrder();
  