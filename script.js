// Version initiale
function translatePigLatin(string) {
  const regex = /^([^aeiouAEIOU]*)([aeiouAEIOU].*)/;
  const voyelle = 'aeiouAEIOU';
  let wordToReturn = "";

  if (voyelle.includes(string[0])) {
    wordToReturn = string + "way";
  } else {
    const match = string.match(regex);
    if (match) {
      wordToReturn = match[2] + match[1] + "ay";
    } else {
      wordToReturn = string + "ay"; // cas sans voyelle
    }
  }
  console.log(wordToReturn);
  return wordToReturn;
}

// Version corrigée 'light'
function translatePigLatin(word) {
  const regex = /^([^aeiouAEIOU]*)([aeiouAEIOU].*)/;
  return /^[aeiouAEIOU]/.test(word)
    ? word + "way"
    : word.replace(regex, "$2$1") + "ay";
}
