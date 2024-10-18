let name1="Roshan";
let name2="";
let name3="45";
let name4="45abc";

let age="24";
let isGraduated=true;

//String to number 
let convertedname1=Number(name1);     // => Nan
let convertedname2=Number(name2);     // => 0
let convertedname3=Number(name3);    // =>  45
let convertedname4=Number(name4);    // =>  NAN

//String To Boolean
let stringToBoolean=Boolean(name1);
let emptyStringToBoolean=Boolean(name2);





//NULL to NUMBER 
let nullvar=null;
let nullToNumber=Number(nullvar);   //=> 0


//Boolean To Number
let isTrue=true;
let isFalse=false;

let boolenTrueToNumber=Number(isTrue);
let booleanFalseToNumber=Number(isFalse);

console.table([
    {OriginalString : name1 , ConversionType :"String To Number", AfterConversion :convertedname1},
    {OriginalString : name2 , ConversionType :"String To Number", AfterConversion :convertedname2},
    {OriginalString : name3 , ConversionType :"String To Number", AfterConversion :convertedname3},
    {OriginalString : name4 , ConversionType :"String To Number", AfterConversion :convertedname4},
    {OriginalString : nullvar, ConversionType :"null To Number", AfterConversion :nullToNumber},
    {OriginalString : isTrue, ConversionType :"Boolean To Number", AfterConversion :boolenTrueToNumber},
    {OriginalString : isFalse, ConversionType :"Boolean To Number", AfterConversion :booleanFalseToNumber},
    {OriginalString : name1, ConversionType :"String To Boolean", AfterConversion :stringToBoolean},
    {OriginalString : name2, ConversionType :"String To Boolean", AfterConversion :emptyStringToBoolean}
]);