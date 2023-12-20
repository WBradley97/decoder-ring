const caesarModule = (function () {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function getArrayFromString(string) {
    return Array.from(string);
  }

  function shiftLetter(resultingIndex, shift) {
    let newIndex = (resultingIndex + shift) % 26;
    if (newIndex < 0) {
      newIndex = newIndex + 26
    }
    return alphabet[newIndex];
  }

  function createShiftedArray(string, shift) {
    let shiftedArray = getArrayFromString(string).map((character) => {

      if (alphabet.indexOf(character) === -1) {

        return character
      }
      return shiftLetter(alphabet.indexOf(character), shift);
    });
    return shiftedArray;
  }

  function caesar(input, shift, encode = true) {

    if (!shift || shift === 0 || shift > 25 || shift < -25) {

      return false;
    }

    const string = input.toLowerCase();
    let updatedShift = shift;

    if (encode === false) {
      updatedShift = shift * -1;
    }

    return createShiftedArray(string, updatedShift).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
