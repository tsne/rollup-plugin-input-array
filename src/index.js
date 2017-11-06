export default function inputArray() {
	const main = "\0rollup-plugin-input-array:main";

	let inputs = [];

	return {
		options(opts) {
			inputs = Array.isArray(opts.input) ? opts.input : [opts.input];
			opts.input = main;
		},

		resolveId(importee, importer) {
			return importee === main ? main : null;
		},

		load(id) {
			return id === main
				? inputs.map(inp => `export * from ${JSON.stringify(inp)};`).join("\n")
				: null;
		},
	};
}
