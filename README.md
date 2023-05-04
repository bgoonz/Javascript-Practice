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
