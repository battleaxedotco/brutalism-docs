let result = await evalScript('someJSXFunction()')
// Returns value of JSX function, pre-parsed when JSON
//
let textData = 'I am a string';
let result = await evalScript(`alert('${textData}')`);
// Returns null
//
evalScript('someJSXFunction()')
  .then(result => {
    console.log(result)
  })
// Same as first example using thenable syntax
//
let result = await evalScript(`
  function someJSXFunction() {
    var msg = {
      data: 'Hello world!'
    }
    alert(msg.data);
    return JSON.stringify(msg);
  };
  someJSXFunction();
`)
// Creating/executing function on the fly, returns { data: 'Hello world!' }
//
evalScript('someJSXFunction()', {
  msg: 'Hello World'
})
// Always return { msg: 'Hello World' } when in browser