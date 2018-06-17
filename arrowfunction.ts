let noParamFn =() =>console.log('No Parameter function');
let oneParamFn =(x) =>console.log('One Parameter function',x);
let oneParamFnAttribute1 = x =>console.log('One Parameter function',x);
let oneParamFnAttribute2 = (x:string) =>console.log('One explicit Parameter function',x);
let twoParamFnAttribute2 = (x,y) =>console.log('Two Parameter function',x,y);

noParamFn();
oneParamFn('Amruta');
oneParamFnAttribute1(10);
oneParamFnAttribute2('Amruta');
twoParamFnAttribute2('asd',3);



