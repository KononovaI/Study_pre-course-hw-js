let passportMarried = {
	name: "Petr",
	surname: "Petrov",
	address: {
			country: "USA",
			city: "Bobryisk"
	}
};

let copiedPassportMarried = JSON.parse(JSON.stringify(passportMarried));
copiedPassportMarried.married = true;

console.log(passportMarried);
console.log(copiedPassportMarried);