type Result = "pass" | "fail";

function verify(result: Result) {
  if (result === "pass") {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
}

interface ComplexData {
  name: string;
  age: number;
  danceMoves: string[];
  couldBeOneOfTwoTypes: number | boolean;
}
interface SpecificApiResponse extends Response {
  data(): ComplexData;
}

function isNumber(genericPrimitive: unknown): genericPrimitive is number {
  return typeof genericPrimitive === "number";
}
function handleApiResponse(response: SpecificApiResponse) {
  const { name, age, danceMoves, couldBeOneOfTwoTypes } = response.data();
  if (isNumber(couldBeOneOfTwoTypes)) {
    console.log("It is a number");
  } else {
    console.log("It is a boolean");
  }
  return `${name} is ${age} years old and have some crazy moves, such as ${danceMoves.join(
    ","
  )}.`;
}
