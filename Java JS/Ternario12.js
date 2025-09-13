const IsLogin = true;

IsLogin ? 
 console.log('Usuario Autenticado')  : 
 console.log('Usuario no autenticado')

const saldo = 1000;
const efectivo = true;
const pagar = 300;

saldo > pagar ? 
console.log('Puedes comprar el curos'):
efectivo ? console.log('Tienes efectivo, puedes comprar el curso'): 
console.log('No tienes saldo ni efectivo');
console.log('No puedes comprar el curso');
