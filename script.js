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

//onclick - present series of prompts
        //prompt 1 select length of password 8-128 characters

        //prompt 2 select if lowercase is allowed
                //input validated and at least 1 character shown

        //prompt 3 select if Uppercase is allowed
                  //input validated and at least 1 character shown
        
        //prompt 4 select if numeric is allowed
                  //input validated and at least 1 character shown


        //prompt 5 select if special characters are allowed
                //input validated and at least 1 character shown

        //after ALL prompts are answered, password is generated
        
        //the password is then shown in an alert or written on the screen

