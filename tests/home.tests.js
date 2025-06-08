const assert = require('assert');
const fetch = require('node-fetch');

describe('Home page', function() {
  it('Page title', async function() {
    let res = await fetch("http://localhost:8888/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Students Registry</h1>"));
  });
});
