###  What is the difference between `forEach` and `for...of`? When would you use each?

- `forEach`:
  - An array method that runs a callback for each element. 
  - It does not support break, continue, or return from the outer function.
  - It is best used to iterate over array elements and perform an action.

- `for...of`: 
  - A loop that works with iterable values such as arrays, strings, maps, and sets. 
  - We can use break, continue, and return inside the loop. 
  - It is a better choice when we need more control over the iteration.

**Waiting on promises**
  - `for...of` correctly pauses on each `await`. 
  - `forEach` does not wait, if an `async` callback is passed to `forEach`, it fires off all the callbacks immediately without waiting for each one to resolve.

```js
arr.forEach(async (item) => {
  await doSomethingAsync(item);
});
console.log('done'); // runs immediately, before the async calls finish

for (const item of arr) {
  await doSomethingAsync(item);
}
console.log('done'); // runs only after all items are processed
```

---------------

### What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during execution. 

Variables declared with `var` are hoisted and initialized with undefined, while `let` and `const` are hoisted but not initialized. This means they cannot be used before their declaration.

Example:

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 5;
```

The Temporal Dead Zone is the period between the start of the scope and the point where a `let` or `const` variable is initialized. During this time, accessing the variable causes a `ReferenceError`.

---------------

### What are the main differences between `==` and `===`?

- `==` compares values after converting them to the same type, which is called type coercion. 
- `===` compares both the value and the type without coercion. 

Example:

```js
5 == '5' // true
5 === '5' // false
```

---------------

### Explain how `try-catch` works and why it is important in async operations.

`try-catch` is used to handle runtime errors safely. Code inside try is executed first. If an error occurs, JavaScript jumps to catch and the program can respond without crashing.

**how it works**

JavaScript executes the `try` block line by line. The moment something throws an error, execution immediately jumps to the `catch` block, skipping the rest of the try block.

Example:

```js
try {
  const data = JSON.parse("{ invalid json ");
  console.log("After parsing"); // Not executed 
 } catch (error) {
  console.log(error.message); // "Unexpected token..." 
}
```

**why it is important in async operations**

It is especially important in async operations because errors may happen later, such as in a Promise or an API request. Without `try-catch`, those errors could break the program or leave it in an unexpected state.

```js
try {
  const res = await fetch("/api/data");
  return await res.json();
} catch (err) {
  console.error("Failed to fetch:", err);
}
```

---------------

### What’s the difference between type conversion and coercion? Provide examples of each.

- Type conversion is when a programmer explicitly changes a value from one type to another.

Example:

```js
Number('5') // 5
String(10) // '10'
```

- Type coercion is when JavaScript automatically converts a value behind the scenes during an operation.

Example:

```js
'5' + 2 // '52'
3 * '4' // 12
```
