function *upper (items) {
	for (var i = 0, l = items.length; i < l; i++) {
		try {
			yield items[i].toUpperCase();
		} catch (e) {
			yield null;
		}
	}		
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
console.log(item);
}
// want to log: A, B, null, C

