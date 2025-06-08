const assert = require('assert');
const fetch = require('node-fetch');

describe('Add Students page', function() {
  it('Page title', async function() {
    let res = await fetch("http://localhost:8888/add-student");
    let body = await res.text();
    assert.ok(body.includes("<h1>Register New Student</h1>"));
  });

  it('Students HTML form', async function() {
    let res = await fetch("http://localhost:8888/add-student");
    let body = await res.text();
    
    let nameFieldFound = body.includes('<input id="name" type="text" name="name"/>');
    assert.ok(nameFieldFound, "Field 'name' is missing");

    let emailFieldFound = body.includes('<input id="email" type="email" name="email"/>');
    assert.ok(emailFieldFound, "Field 'email' is missing");

    let buttonAddFound = body.includes('<button type="submit">Add</button>');
    assert.ok(buttonAddFound, "Button [Add] is missing");
  });

  it('Add valid student', async function() {
    let res = await fetch(
      "http://localhost:8888/add-student",
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=Peter&email=peter%40gmail.com"
      }
    );
    let body = await res.text();
    let studentsReturned = body.includes(
		"<ul><li>Steve (steve@gmail.com)</li><li>Tina (tina@yahoo.com)</li><li>Peter (peter@gmail.com)</li></ul>");
    assert.ok(studentsReturned, "Add student failed");
  });
});
