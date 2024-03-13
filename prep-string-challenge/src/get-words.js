/* exported getWords */
function getWords(string) {
  const trimmedString = string.trim();

  if (trimmedString === '') {
    return [];
  } else {
    const newArray = string.split(' ');
    return newArray;
  }
}
