const user = [
    {name: 'gvanca ' , age: 22},
    {name: 'xatia', age:20}
];

const sumAge = user.reduce((el, sum) => {
  el += sum.age;
  return el
} ,0 ) 

console.log(sumAge);






function submitForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var subscribe = document.getElementById("subscribe").checked;
  
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Gender: " + gender);
    console.log("Subscribe to newsletter: " + subscribe);
  }






  const words = ["apple", "banana", "orange", "strawberry", "blueberry"];

function findLongestWord(words) {
 
  let longestWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  console.log("The longest word is:", longestWord);

  return longestWord;
}

findLongestWord(words);