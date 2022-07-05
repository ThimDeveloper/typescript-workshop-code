// Start by changing the file type from .js to .ts
// Try to work out the shape and interfaces of the input parameters,
// as well as the returned interfaces and types of the function calls.

const MathemathicsDamon = (sendToAPI, fromUser) => {
  const { mathmaticalFunction, firstNumber, secondNumber } = fromUser;
  const result = mathmaticalFunction(firstNumber, secondNumber);
  const { timeToCalculateInSeconds, messageToUser } = sendToAPI(result);

  console.log(
    `The operation took ${timeToCalculateInSeconds} seconds to calculate.`
  );
  console.log(`Message to user: ${messageToUser}.`);
};
