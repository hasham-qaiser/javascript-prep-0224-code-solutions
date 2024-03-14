/* exported capitalize */
function capitalize(word) {
  let newWord = word[0].toUpperCase() + word.substring(1).toLowerCase();
  return newWord;
}
