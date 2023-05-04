# JavasScript

### JavaScipt is a dynamic weakly typed language which is compiled at runtime.

**How is JS Executed?** _using a js engine like v8 or spidermonkey which parses the code and then compiles to machine code and then exicutes machine code_

**Dynamic Typing** _(not pre-compiled) means that you don't tell the engine what type of data a variable holds, it figures it out while your code is running_

**Weakly Typed** _means that different types can be converted to other types automatically_

**Primitive Types** _a type of data that represents a single value_
**Reference Types** _a type of data that represents a reference to a location in memory where the object is stored_

**Operators** _a special function that is syntactically (written) differently, generally, operators take two parameters and return one result_

## Primitive Types

| Data Type   | Wrapper Object                                                                  | Description                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `number`    | [`Number`](https://www.codecademy.com/resources/docs/javascript/number-methods) | Any number, including numbers with decimals: `1`, `-2`, `99`, `3.14`.                                                                      |
| `bigint`    | `BigInt`                                                                        | Any number, greater than 253-1 or less than -(253-1) with `n` appended to the number: `1234567890123456n`.                                 |
| `string`    | [`String`](https://www.codecademy.com/resources/docs/javascript/strings)        | Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single `''` or double `""`.            |
| `boolean`   | `Boolean`                                                                       | This data type only has two possible values --- either `true` or `false`.                                                                  |
| `null`      | None                                                                            | This data type represents the intentional absence of a value, and is represented by the keyword `null`.                                    |
| `undefined` | None                                                                            | This data type is denoted by the keyword `undefined`. It also represents the absence of a value though it has a different use than `null`. |
| `symbol`    | `Symbol`                                                                        | A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.      |

---

- JavaScript code is generally executed from top to bottom, line by line, in the order that the code is written.

---

### Functions in JavaScript

- Functions are a way to package functionality that you wish to reuse.
- functions are hoisted to the top of the file

### Scope

- Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.
- a block is a chunk of code bounded by `{}`
- **Global Scope** refers to variables that are accessible to every part of the program.
- **Block Scope** refers to variables that are accessible only within the block they are defined.
- **Local Scope** refers to variables that are declared within a function.

**Shadowing** _when a variable is declared in a local scope that has the same name as a variable in the global scope_

- when a variable is shadowed, the local variable takes precedence over the global variable

---

#### If Statements

- if statements are used to make decisions in code
- if statements are truthy or falsy
- if statements can be chained together using else if

```js
const isLoggedIn = true;
if (isLoggedIn) {
  // This code will execute because isLoggedIn is true => A valid condition
}

//----------------------------------
const isLoggedIn = true;
if (!isLoggedIn) {
  // This code will NOT execute because isLoggedIn is true but ! inverts it (in this check)
} else {
  // This would execute because !isLoggedIn yields false => else block executes
}

const isLoggedIn = true;
if (isLoggedIn !== true) {
  // This would NOT execute
} else {
  // This would execute because isLoggedIn is true and hence !== true yields false
}
```

**Beware of comparing objects and arrays** _objects and arrays are reference types and are not compared by value but by reference_

---

### Operator Precedence

| Precedence | Operator type                      | Associativity                   | Individual operators |
| ---------- | ---------------------------------- | ------------------------------- | -------------------- | ------------- | --- | --- | --- |
| 18         | Grouping                           | n/a                             | ( … )                |
| 17         | Member Access                      | left-to-right                   | … . …                |
|            | Optional chaining                  |                                 | … ?. …               |
|            | Computed Member Access             | n/a                             | … [ … ]              |
|            | new (with argument list)           |                                 | new … ( … )          |
|            | Function Call                      |                                 | … ( … )              |
| 16         | new (without argument list)        | n/a                             | new …                |
| 15         | Postfix Increment                  | n/a                             | … ++                 |
|            | Postfix Decrement                  |                                 | … --                 |
| 14         | Logical NOT (!)                    | n/a                             | ! …                  |
|            | Bitwise NOT (~)                    |                                 | ~ …                  |
|            | Unary plus (+)                     |                                 | + …                  |
|            | Unary negation (-)                 |                                 | - …                  |
|            | Prefix Increment                   |                                 | ++ …                 |
|            | Prefix Decrement                   |                                 | -- …                 |
|            | typeof                             |                                 | typeof …             |
|            | void                               |                                 | void …               |
|            | delete                             |                                 | delete …             |
|            | await                              |                                 | await …              |
| 13         | Exponentiation (\*\*)              | right-to-left                   | … \*\* …             |
| 12         | Multiplication (\*)                | left-to-right                   | … \* …               |
|            | Division (/)                       |                                 | … / …                |
|            | Remainder (%)                      |                                 | … % …                |
| 11         | Addition (+)                       | left-to-right                   | … + …                |
|            | Subtraction (-)                    |                                 | … - …                |
| 10         | Bitwise Left Shift (<<)            | left-to-right                   | … << …               |
|            | Bitwise Right Shift (>>)           |                                 | … >> …               |
|            | Bitwise Unsigned Right Shift (>>>) |                                 | … >>> …              |
| 9          | Less Than (<)                      | left-to-right                   | … < …                |
|            | Less Than Or Equal (<=)            |                                 | … <= …               |
|            | Greater Than (>)                   |                                 | … > …                |
|            | Greater Than Or Equal (>=)         |                                 | … >= …               |
|            | in                                 |                                 | … in …               |
|            | instanceof                         |                                 | … instanceof …       |
| 8          | Equality (==)                      | left-to-right                   | … == …               |
|            | Inequality (!=)                    |                                 | … != …               |
|            | Strict Equality (===)              |                                 | … === …              |
|            | Strict Inequality (!==)            |                                 | … !== …              |
| 7          | Bitwise AND (&)                    | left-to-right                   | … & …                |
| 6          | Bitwise XOR (^)                    | left-to-right                   | … ^ …                |
| 5          | Bitwise OR (                       | )                               | left-to-right        | …             | …   |
| 4          | Logical AND (&&)                   | left-to-right                   | … && …               |
| 3          | Logical OR (                       |                                 | )                    | left-to-right | …   |     | …   |
|            | Nullish coalescing operator (??)   |                                 | … ?? …               |
| 2          | Assignment                         | right-to-left                   | … = …                |
|            |                                    |                                 | … += …               |
|            |                                    |                                 | … -= …               |
|            |                                    |                                 | … \*\*= …            |
|            |                                    |                                 | … \*= …              |
|            |                                    |                                 | … /= …               |
|            |                                    |                                 | … %= …               |
|            |                                    |                                 | … <<= …              |
|            |                                    |                                 | … >>= …              |
|            |                                    |                                 | … >>>= …             |
|            |                                    |                                 | … &= …               |
|            |                                    |                                 | … ^= …               |
|            |                                    |                                 | …                    | = …           |
|            |                                    |                                 | … &&= …              |
|            |                                    |                                 | …                    |               | = … |
|            |                                    |                                 | … ??= …              |
|            | Conditional (ternary) operator     | right-to-left                   | … ? … : …            |
|            |                                    | (Groups on expressions after ?) |                      |
|            | Arrow (=>)                         | right-to-left                   | … => …               |
|            | yield                              | n/a                             | yield …              |
|            | yield\*                            |                                 | yield\* …            |
|            | Spread (...)                       |                                 | ... …                |
| 1          | Comma / Sequence                   | left-to-right                   | … , …                |



---


### Truthy and Falsy

```js
const name = "John";

if(name==="John"){
    console.log("Hello John");
}
//will print Hello John because the condition is true

if(name){
    // will exicute because the name exists and is thus truthy.
}

```

- all numbers except for 0 are truthy
- all strings except for an empty string are truthy
- all objects are truthy except for null
- all arrays are truthy
- the value undefined is falsy
- the value null is falsy
- the value NaN is falsy
 
