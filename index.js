var storage = null;

function i18n(key) {
	if (!storage) {
		throw new Error('Please specify localization storage with the `init` static method.');
	}

	return storage.hasOwnProperty(key) ? storage[key] : key;
}

i18n.init = function (object) {
	storage = object;
};

module.exports = i18n;
