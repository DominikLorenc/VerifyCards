const resultText = document.querySelector(".result-text");

function checkCardNumber(number) {
  if (number.length === 0) return alert("podaj numer karty");

  const numberCard = removeSpaceAndDash(number);
  const checkIsNumber = !isNaN(Number(numberCard));

  if (checkIsNumber) {
    const reverseNumbers = numberCard.split("").reverse();
    const oddNumber = filterNumbers(reverseNumbers, 1);
    const evenNumber = filterNumbers(reverseNumbers, 0);
    const resultAlgorithmLuhna = algorithmLuhna(oddNumber, evenNumber);
    console.log(resultAlgorithmLuhna)

    if (resultAlgorithmLuhna) {
      whatACard(numberCard);
    } else {
      resultText.textContent = "Nieprawidłowy";
    }
  }
}

const algorithmLuhna = (oddNumber, evenNumber) => {
  const multiplyOddNumber = oddNumber
    .map((numb) => numb * 2)
    .toString()
    .split(",")
    .join("")
    .split("");
  const sumMultiplyOddNumber = sumNumbers(multiplyOddNumber);
  const sumEvenNumber = sumNumbers(evenNumber);
  return (sumMultiplyOddNumber + sumEvenNumber) % 10 === 0;
};

const removeSpaceAndDash = (number) => number.replace(/[ -]/g, "");

const filterNumbers = (number, oddOrEven) => {
  const numbers = number.filter((numb, index) => index % 2 === oddOrEven);
  return numbers;
};

const sumNumbers = (number) =>
  number.reduce((a, b) => parseInt(a) + parseInt(b));

const whatACard = (number) => {
  const cards = [
    {
      name: "Mastercard",
      firstNumbers: [22, 51, 52, 53, 54, 55],
      lengthNumber: [16],
      sliceNumber: 2,
    },
    {
      name: "American  Express",
      firstNumbers: [34, 37],
      lengthNumber: [15],
      sliceNumber: 2,
    },
    {
      name: "Visa",
      firstNumbers: [4],
      lengthNumber: [13, 16],
      sliceNumber: 1,
    },
  ];

  cards.map(({ name, firstNumbers, lengthNumber, sliceNumber }) => {
    const sliceNum = number.slice(0, sliceNumber);
    const filterFirstNumbers = firstNumbers
      .filter((el) => el == sliceNum)
      .join("");
    const filterLengthNumber = lengthNumber.some((el) => el ===  number.length); 
    if (filterFirstNumbers && filterLengthNumber) {
      resultText.textContent = name;
    } 
  });
};

export default checkCardNumber;
