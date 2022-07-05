// Hover over and see type inference in action.
const message = "This is a message";

// Hover over addition and see what TypeScript infers is the return type of this function when a and b are "any" type.
// Check what happens if you change "any" to the correct type. What the correct type is you have to find out yourself.
function addition(a: any, b: any) {
  return a + b;
}

// Complete the type ThisCanBeEither so that the typed variable thisMessageCanBeEither works with all primitive types.
type ThisCanBeEither = string;

const messageIsString = "string";
const messageIsTrue = true;
const messageIsFalse = false;
const messageIsObject = { message: "Hello, World" };

let thisMessageCanBeEither: ThisCanBeEither = messageIsString;
thisMessageCanBeEither = messageIsTrue;
thisMessageCanBeEither = messageIsFalse;
thisMessageCanBeEither = messageIsObject;

// Write an interface to this complex object named SpecificComplexObject
const specificComplexObject = {
  itemOne: "Hello, World",
  itemTwo: true,
  fish: 42,
  nested: {
    caveEntry: {
      it: {
        keeps: {
          going: {
            stop: true,
          },
        },
      },
    },
  },
};

function specificComplexObjectsOnlyAllowed(
  complexObject: SpecificComplexObject
) {
  return "";
}

// Let us write a function type
function func(increment: any) {
  const objectCopy: SpecificComplexObject = {
    ...specificComplexObject,
  };
  const newValue = objectCopy.fish + increment;
  return { ...objectCopy, fish: newValue };
}
