function hello () {
    console.log('Hello world');
}
hello();

function helloSomeone (name) {
    console.log(`Bonjour ${name}`);
}
helloSomeone('fifi');

function helloSomeoneInUppercase (name) {
    console.log(`Bonjour ${name.toUpperCase()}`);
}
helloSomeoneInUppercase('loulou');

function helloSomeoneInCapitalize (name) {
    console.log(`Bonjour ${name.charAt(0).toUpperCase()+name.slice(1)}`);
}
helloSomeoneInCapitalize('picsou');