class converter {
  snakeToCamel = snake => {
    let snakeArray = Array.from(snake);

    snakeArray.forEach((char, index) => {
      let indexOfUnderScore;

      if (snake[index] === "_") {
        snakeArray[index] = "";
        snakeArray[index + 1] = snakeArray[index + 1].toUpperCase();
      }
    });

    return snakeArray.join("");
  };

  camelToSnake = camel => {
    const upperCamel = camel.toUpperCase();
    let camelArray = Array.from(camel);
    const upperCamelArray = Array.from(upperCamel);
    let indexsOfUpperChars = [];

    camelArray.forEach((char, index) => {
      const areCharsEqual = char === upperCamelArray[index];

      if (areCharsEqual) {
        camelArray[index] = camelArray[index].toLowerCase();
        indexsOfUpperChars.push(index);
      }
    });
    indexsOfUpperChars.forEach((char, index) => {
      camelArray.splice(char + index, 0, "_");
    });
    return camelArray.join("");
  };

  toCapital = anyStr => {
    const hasUnderScore = anyStr.includes("_");
    const arrayOfStr = Array.from(anyStr.toLowerCase());
    if (hasUnderScore) {
      let filteredArray = arrayOfStr.filter(char => char !== "_");
      filteredArray[0] = filteredArray[0].toUpperCase();
      return filteredArray.join("");
    }

    arrayOfStr[0] = arrayOfStr[0].toUpperCase();
    return arrayOfStr.join("");
  };
}

//Test
// a = new converter();

// c = a.toCapital("Aa_se_de_ceAADDD");
// console.log(c);
