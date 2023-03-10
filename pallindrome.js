function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  console.log(str);
  return true;
}

palindrome("eye");
