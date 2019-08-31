class Converter {
  static toSnake = anyStr => {
    const upperStr = anyStr.toUpperCase();
    let strArray = Array.from(anyStr);
    const upperStrArray = Array.from(upperStr);
    let indexsOfUpperChars = [];

    strArray.forEach((char, index) => {
      const areCharsEqual = char === upperStrArray[index];

      if (areCharsEqual && char !== "-" && char !== "_") {
        strArray[index] = strArray[index].toLowerCase();
        indexsOfUpperChars.push(index);
      } else if (areCharsEqual && char === "-" && areCharsEqual !== "_") {
        strArray[index] = "_";
      }
    });
    indexsOfUpperChars.forEach((char, index) => {
      strArray.splice(char + index, 0, "_");
    });
    return strArray.join("");
  };

  static toCamel = anyStr => {
    const hasUnderScore = anyStr.includes("-");
    const hasHyphen = anyStr.includes("_");

    let camelStr;
    if (hasUnderScore || hasHyphen) {
      camelStr = this.converToCamelFormat(anyStr);
    }

    const hasDifferentSizeLetter = anyStr === anyStr.toLowerCase();

    console.log(camelStr);

    return camelStr;
  };

  static toCapital = anyStr => {
    const hasUnderScore = anyStr.includes("_");
    const hasHyphen = anyStr.includes("-");

    const arrayOfStr = Array.from(anyStr.toLowerCase());

    if (hasUnderScore || hasHyphen) {
      let filteredArray = arrayOfStr.filter(
        char => char !== "_" && char !== "-"
      );
      filteredArray[0] = filteredArray[0].toUpperCase();
      return filteredArray.join("");
    }

    arrayOfStr[0] = arrayOfStr[0].toUpperCase();
    return arrayOfStr.join("");
  };
}

export default Converter;
