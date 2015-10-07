function *factorial(n) {
	var acc = 1;
	for (var i = 1; i <= n; i++) {
		acc *= i;
		yield acc;
	}
}

for (var n of factorial(5)) {
	console.log(n)
}
// 1, 2, 6, 24, 120
