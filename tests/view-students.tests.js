const assert = require('assert');
const fetch = require('node-fetch');

describe('View Students page', function() {
  it('Page title', async function() {
    let res = await fetch("http://localhost:8888/students");
    let body = await res.text();
    assert.ok(body.includes("<h1>Registered Students</h1>"));
  });
});
