let passport = {
	name: "Petr",
	surname: "Petrov",
};

let copiedPassport = { ...passport };
copiedPassport.name = "Ivan";

console.log(passport);
console.log(copiedPassport);