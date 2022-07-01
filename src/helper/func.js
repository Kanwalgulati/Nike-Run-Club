//Helper Functions

//Helper Function for Distance Validation
export const validateInput = (input = '', typeOfMetric) => {
  //The Distacnce should have any number of digits from 0 to 9 ^[0-9]*
  // \.? that means one or zero decimal point
  //[0-9]?$ it means one or zero digits after the decimal point
  var regx;
  if (typeOfMetric === 'Distance') {
    regx = /^[0-9]{1,2}\.{1}[0-9]{1,2}$/;
  } else {
    regx = /^[0-9]{0,2}\:{1}[0-9]{0,2}?$/;
  }
  //?   var regx = /^[0-9]{1,}\.?[0-9]?$/;
  // ^ in ^[0-9] means the input should start with a number

  // after {1,} in [0-9]{1,} means atleast we provide one number of digit there and after
  //   {1,} after , nothing means minimum 1 and maximium can be unlimited.
  // \. means there will be a . after these and '?' tells that dot can be only one time or zero time
  // and [0-9]?$ shows that it can be there in the input or not and after that $ sign tells that
  // the input should be ended with number

  if (input.match(regx)) return input.match(regx);
};
