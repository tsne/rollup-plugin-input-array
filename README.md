# rollup-plugin-input-array

A small [Rollup](https://github.com/rollup/rollup) plugin for handling multiple inputs.

## Installation
```
npm install --save-dev rollup-plugin-input-array
```

## Usage
```js
// rollup.config.js
import inputArray from "rollup-plugin-input-array";

export default {
	input: ["src/foo.js", "src/bar.js"],

	plugins: [
		inputArray(),
	]
};
```
The plugin simply loads multiple input files. To achieve this, an array has to be provided for Rollup's `input` option.
