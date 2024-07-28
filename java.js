function check() {
  var ele = document.getElementById("in").value;
  if (isNaN(ele)) {
    var ele = document.getElementById("in").value;
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
    var r = 0,
      b;
    for (var i = ele; i > 0; i = Math.floor(i / 10)) {
      b = i % 10;
      r = r * 10 + b;
    }
    if (r == ele) {
      document.getElementById("mm").innerHTML = "Yes " + ele + " is Palindrome";
    }
  }
}
