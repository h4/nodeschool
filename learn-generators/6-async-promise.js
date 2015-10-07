function askFoo () {
	return new Promise(function (resolve, reject) {
		resolve('foo');
	});
}

function run (generator) {
	var it = generator();
	
	function go(result) {
		if (result.done) {
			return result.value;
		}
		result.value.then(function(value) {
			it.next(value);
		}, function(err) {
			it.throw(err);
		});
	}

	go(it.next());
}

run(function* () {
	try {
		var foo = yield askFoo();
		console.log(foo);
	} catch (e) {
		console.log(e);
	}
});

