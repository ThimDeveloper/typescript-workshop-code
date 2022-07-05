const MathemathicsDamon = (sendToAPI, fromUser) => {
  const { mathmaticalFunction, firstNumber, secondNumber } = fromUser;
  const result = mathmaticalFunction(firstNumber, secondNumber);
  const { timeToCalculateInSeconds, messageToUser } = sendToAPI(result);

  console.log(
    `The operation took ${timeToCalculateInSeconds} seconds to calculate.`
  );
  console.log(`Message to user: ${messageToUser}.`);
};
