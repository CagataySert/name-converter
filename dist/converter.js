class converter {
  converToCamelFormat = anyStr => {
    let strArray = Array.from(anyStr);

    strArray.forEach((char, index) => {
      if (anyStr[index] === "_" || strArray[index] === "-") {
        strArray[index] = "";
        strArray[index + 1] = strArray[index + 1].toUpperCase();
      }
    });

    return strArray.join("");
  };

  toSnake = anyStr => {
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

  toCamel = anyStr => {
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

  toCapital = anyStr => {
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

a = new converter();

c = a.toSnake("cagataySert_adana_deneme");
console.log(c);
