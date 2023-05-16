import * as IbanVal from '@aregnet/iban-val';

console.log("Full IBAN check");
console.log(IbanVal.checkIban('DE12345'));
console.log("---");

console.log("Simple IBAN check");
console.log(IbanVal.isValid('BH67BMAG00001299123456'));