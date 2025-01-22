## Subtle Bug in Object Comparison Function

This repository demonstrates a common, yet subtle, bug that can occur when comparing objects in TypeScript (or Javascript). The `compare` function works correctly for numbers and strings, but fails when comparing objects because JavaScript's less than and greater than operators do not provide a direct comparison of objects.

The `bug.ts` file contains the buggy code. The `bugSolution.ts` file provides a corrected version using a structured approach to object comparison.  Consider using a library like Lodash's `isEqual` for robust object comparison.

This bug highlights the importance of thorough testing and understanding the nuances of JavaScript's type system.