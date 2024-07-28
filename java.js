function check() {
  var ele = document.getElementById("in").value.trim().toLowerCase();
  if (isNaN(ele)) {
    var rev = "";
    for (var i = ele.length - 1; i >= 0; i--) {
      rev += ele[i];
    }
    if (ele === rev) {
      document.getElementById("mm").innerHTML =
        "Yes, " + ele + " is a palindrome!";
    } else {
      document.getElementById("mm").innerHTML =
        "No, " + ele + " is not a palindrome.";
    }
  } else {
    var r = 0;
    var num = parseInt(ele);
    while (num > 0) {
      r = r * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    if (r === parseInt(ele)) {
      document.getElementById("mm").innerHTML = "Yes " + ele + " is Palindrome";
    }
  }
}
