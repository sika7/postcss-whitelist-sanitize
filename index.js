const cssValues = require("css-values").default;

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (
  opts = {
    allowPropertys: [],
    validationCheck: true,
    allowPropertyCheck: true,
  }
) => {
  // Work with options here

  return {
    postcssPlugin: "postcss-whitelist-sanitize",
    /*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */

    Declaration(decl) {
      // get config.
      const {
        allowPropertys = [],
        validationCheck = true,
        allowPropertyCheck = true,
      } = opts;

      // remove not allow property.
      if (allowPropertyCheck) {
        if (!allowPropertys.includes(decl.prop)) {
          decl.remove();
        }
      }

      // remove validation error property and value.
      if (validationCheck) {
        const isValidationOk = cssValues(decl.prop, decl.value);
        if (isValidationOk !== true) {
          decl.remove();
        }
      }
    },

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  };
};

module.exports.postcss = true;
