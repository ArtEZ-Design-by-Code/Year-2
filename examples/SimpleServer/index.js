const greetings = [
	"Hello", "Hi", "Howdy",
	"Bonjour", "Hallo", "Hoi",
	"Guten Tag", "Namaste",
	"Kónnichi wa", "Buongiorno",
	"Shalóm", "Hei"
];

const names = [
	"Abbey", "Mariana", "Jacques",
	"Dennis", "Ali", "Sona",
	"Wei", "Verna", "Lashandra",
	"Gladis", "Monique", "Bernadine",
	"Ute", "Brendon", "Charlena",
	"Marylin", "Renae", "Juliann",
	"Calandra", "Danille", "Chasidy",
	"Sun", "Tam", "Guy", "Sha",
	"Laine", "Leopoldo", "Jill",
	"Shelia", "Javier"
];

for (let nameIndex = 0; nameIndex < names.length; nameIndex ++) {
	const greetingIndex = Math.floor(Math.random() * greetings.length);
	
	console.log(greetings[greetingIndex] + ' ' + names[nameIndex] + '!');
}
