const postcss = require("postcss");

const plugin = require("./");

async function run(input, output, opts = {}) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  });
  expect(result.css).toEqual(output);
  expect(result.warnings()).toHaveLength(0);
}

const testOpts = {
  allowPropertys: ["background-color", "color"],
  validation: true,
  allowProperty: true,
};

it("it works line css !!", async () => {
  await run(
    "background-color: #eee;color: #eee;",
    "background-color: #eee;color: #eee;",
    testOpts
  );
});

it("it works block css !!", async () => {
  await run(
    `
.test {
  background-color: #eee;
  color: #eee;
}

.test2 {
  a: #eee;
  color: #eee;
}
  `,
    `
.test {
  background-color: #eee;
  color: #eee;
}

.test2 {
  color: #eee;
}
  `,
    testOpts
  );
});

it("remove not allowed property", async () => {
  await run("position: fixed;color: #eee;", "color: #eee;", testOpts);
});

it("remove unknown property", async () => {
  await run("background-colr: red;color: #eee;", "color: #eee;", testOpts);
});

it("remove unknown value", async () => {
  await run("background-color: hoge;color: #eee;", "color: #eee;", testOpts);
});

/* Write tests here

it('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/
