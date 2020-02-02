//container of code that activates when button is clicked
function generate() {
        var length = Number(prompt("What length would you like your password to be?"));

        while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("try again! Length must be 8-128 characters."));

        var UC = confirm("Would you like to use uppercase letters?");
        var LC = confirm("Would you like to use lowercase letters?");
        var num = confirm("Would you like to use numbers?");
        var special = confirm("Would you like to use special characters?");

        while (!UC && !LC && !num && !special) {
                alert("You must select at least one character type!");
                UC = confirm("Would you like to use uppercase letters?");
                LC = confirm("Would you like to use lowercase letters?");
                num = confirm("Would you like to use numbers?");
                special = confirm("Would you like to use special characters?");
        }
        //calls generatePassword function
                generatePassword();

        //takes confirmed properties and puts them into the password variable
        function generatePassword() {
                var password = "";

                var allowed = {};
                if (UC) password += rando(allowed.UC = "QWERTYUIOPASDFGHJKLZXCVBNM"); //pulls in uppercase
                if (LC) password += rando(allowed.LC = "qwertyuiopasdfghjklzxcvbnm"); //pulls in lowercase
                if (num) password += rando(allowed.num = "1234567890"); //pulls in numbers
                if (special) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,."); //pulls in special characters

                //runs and adds a character each time until it reaches the length of the password
                for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

                document.getElementById("password").value = randoSequence(password).join("");
        }

        // Assignment Code
        var generateBtn = document.querySelector("#generate");

        // Writes password to the #password input
        function writePassword() {
                var password = generate.generatePassword();
                var passwordText = document.querySelector("#password");

                passwordText.value = password;

        }

        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);

}
