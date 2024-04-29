function palindromeCheck(str){

  var str = document.getElementById("palindrome").value;

  var reg = /[\W_]/g;

  var smallStr = str.toLowerCase().replace(reg, "");

  var reverse = smallStr.split("").reverse().join("");
  if (reverse === str) alert ("true");

  else{
    alert ("false");
  }
}

console.log(palindromeCheck("eye"));