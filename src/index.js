require('./styles.scss');

const dress = () => {
	document.write('I like your dress');
}

//When you only have one parameter, the opening parenthesis are optional:
// parameter => { statements }
const product = (type, name) => {
	document.write('This product is: ' + name + ' from the cat ' + type);
}

// if you are returning an expression, you remove the brackets:
const product2 = (type, name) => (7 < 4) ? true : false

//// Is exactly the same thing
// function product2(type, name) {
// 	if(7 < 4) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

// OR
const product3 = (type, name) => "Foo"



dress();

product('veg', 'carrot');

console.log(product2('veg', 'carrot'));
console.log(product3('veg', 'carrot'));