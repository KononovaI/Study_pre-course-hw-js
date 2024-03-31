let passport = {
	name: "Petr",
	surname: "Petrov",
};

let copiedPassport = { ...passport };
copiedPassport.name = "Ivan";

console.log(passport.name);
console.log(copiedPassport.name);