# JavaScript Object Notation (JSON)

## [JSON syntax restrictions](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON#json_syntax_restrictions)

| Category           | Allowed                                                   | Prohibited                                                        |
| ------------------ | --------------------------------------------------------- | ----------------------------------------------------------------- |
| **Primitives**     | string literals, number literals, `true`, `false`, `null` | `undefined`, `NaN`, `Infinity`                                    |
| **Non-Primitives** | Object literals `{ }`, Array literals `[ ]`               | Functions, Class Methods, `Date`, `Set`, `Map`, `RegExp`          |
| **String Syntax**  | Must use double quotes (`"text"`)                         | Single quotes (`'text'`) or Backticks (`` `text` ``)              |
| **Object Keys**    | Must be double-quoted strings (`"key":`)                  | Unquoted keys, single-quoted keys, or computed keys               |
| **Numbers**        | Standard decimal notation (e.g., `10`, `0.5`)             | Hexadecimal, Octal, or Leading zeros (e.g., `0x10`, `012`)        |
| **Formatting**     | Strict structure                                          | Trailing commas (after the last item), Comments (`//` or `/* */`) |
