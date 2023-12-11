function generatePassword() {
    
    let passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));


    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Please enter a valid number between 8 and 128."));
    }


    const includeLowercase = confirm("Include lowercase characters?");
    const includeUppercase = confirm("Include uppercase characters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    
    while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
        alert("At least one character type must be selected.");
        return; // Exit the function if criteria are not met
    }


    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    alert("Your generated password:\n" + password);

}

document.getElementById("generateButton").addEventListener("click", generatePassword);
