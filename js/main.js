let arr= [1,2,3,4,5,6]
function oblicz(tablica){
let suma = 0;
let iloczyn = 1;
tablica.forEach(function(el){
   suma +=el;
   iloczyn*=el;
});
console.log(suma);
console.log(iloczyn);

}
oblicz(arr);












