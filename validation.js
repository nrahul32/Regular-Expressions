const inputs = document.querySelectorAll('input')

const patterns = {
	// matches all letters and numbers, having length of 5-12 characters
	username: /^[a-z\d]{5,12}$/i,

	// Pattern: (1)@(2).(3)(.4)
	// 1: any letters, numbers, dots, hyphens
	// 2: any letters, numbers, hyphens
	// 3: any letters, less than 9 characters
	// 4: [optional field] starting with dot, any letters
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,

	// \w for letters. numbers and underscore, @ - additional
	password: /^[\w@-]{8,20}$/,

	// This matches 10 digits, prefix of country code like +91 is optional
	mobile: /^(\+\d{2})?\d{10}$/
};

function validate(element, regex){
	if(regex.test(element.value)){
		element.className = 'valid';
	} else {
		element.className = 'invalid';
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		validate(e.target, patterns[e.target.attributes.name.value])
	});
});
