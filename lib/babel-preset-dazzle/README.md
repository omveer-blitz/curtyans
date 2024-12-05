# babel-preset-dazzle

## Usage Outside of Dazzle

If you want to use this Babel preset in a project not built with dazzle, you can install it with following steps.

First, [install Babel](https://babeljs.io/docs/setup/).

Then create a file named `.babelrc` with following contents in the root folder of your project:

```js
{
  "presets": ["dazzle"]
}
```

This preset uses the `useBuiltIns` option with [transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/), which assumes that `Object.assign` is available or polyfilled.
