# postcss-whitelist-sanitize

[PostCSS] plugin this postcss plugin whitelist filter. sanitize leaving the allowed properties and values..

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
  a: #eee; // <= remove unknown property.
  background-color: hoge; // <= remove unknown value.
  position: fixed; // <= remove not allowed property.
  color: #eee;
}
```

```css
.foo {
  color: #eee;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save postcss postcss-whitelist-sanitize
```

**Step 2:** allow property config.

```js
const opts = {
  allowPropertys: ["background-color", "color"], // required
  validationCheck: true,
  allowPropertyCheck: true,
}
postcss([postcssWhitelistSanitize(opts)]).process()
```

## config

default config.
```js
{
  allowPropertys: [], // all not allow propertys.
  validationCheck: true, // default true.
  allowPropertyCheck: true, // default true.
}
```

| setting            | description                                                                                                       | default | example                | 
| ------------------ | ----------------------------------------------------------------------------------------------------------------- | ------- | ---------------------- | 
| allowPropertys     | setting a allow propertys.                                                                                        | []      | ["color","text-align"] | 
| validationCheck    | true is remove validation error property and value. General w3c style Guideline applies. Using ben-eb/css-values module. | true    |                 | 
| allowPropertyCheck | true is remove not allow property. Using allowPropertys.                                                          | true    |                        |

[official docs]: https://github.com/postcss/postcss#usage
