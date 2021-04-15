let name = 'Tahe';

let Greeting = 'Good morning';

console.log(Greeting + ' ' + name);


let html = 'hello ! How are you?' + '<h1> This is main Heading </h1>' + '<p>This is para</p>';
html = html.concat(' Hello ', ' Fariha ', 'Mahira');
console.log(html);
console.log(html.toUpperCase());
console.log(html.toLocaleLowerCase());
console.log(html.indexOf('p'));
console.log(html.lastIndexOf('o'));
console.log(html.length);
console.log(html.charAt(83));
console.log(html.endsWith('Mahira'));
console.log(html.substring(1, 5));
console.log(html.slice(1, 5));
console.log(html.split('<p>'));
console.log(html.replace('hello', 'Hi'));