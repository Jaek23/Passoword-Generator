// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//variables with arrays that hold the values of the password criteria//
    var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numsArray = ["0","1","2","3","4","5","6","7","8","9"]
    var specialArray = ["!","@","#","$","%","^","&","*","("]
    var criteriaMet = []
    var selectedChar = []

//generate password function - return password inside this function at the end//
function generatePassword(){
  //give it a variable to get the value of the window prompts and confirms//
   var length = window.prompt("How many characters would you like your password to contain?")
  //binary option (true/false) for confirm// 
   var special = window.confirm("Click OK to confirm including special characters.");
   var numbers = window.confirm("Click OK to confirm including numeric characters.");
   var lower = window.confirm("Click OK to confirm including lowercase characters.");
   var upper = window.confirm("Click OK to confirm including uppercase characters.");
   //create if statement//
    //if true push/concat that array into a new variable with an array so they are all stored toegther(stores the arrays the user said "yes" to on all the confirms//
    if (special === true){
      criteriaMet.push(specialArray);
    }
    if (numbers === true){
      criteriaMet.push(numsArray);
    }
    if (lower === true){
      criteriaMet.push(lowerArray);
    }
    if (upper === true){
      criteriaMet.push(upperArray);
    }
 
  // Need to loop through the criteriaMet once set to the amount of times the user set the var length prompt//
    // Need a random value picked for each loop //
      for(var i=0; i = length; i++){
        selectedChar.push(criteriaMet);
      }


      console.log(criteriaMet);
  return password;
}

