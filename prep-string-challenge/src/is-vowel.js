/* exported isVowel */
function isVowel(char) {
  char = char.toLowerCase();
  const vowels = 'aeiou';
  if (vowels.includes(char)) {
    return true;
  } else {
    return false;
  }
}
