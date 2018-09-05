// This file was procedurally generated from the following sources:
// - src/class-elements/grammar-static-private-ctor-meth-valid.case
// - src/class-elements/syntax/invalid/cls-expr-elements-invalid-syntax.template
/*---
description: Static Methods can be named constructor (class expression)
esid: prod-ClassElement
features: [class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is "prototype"

---*/


throw "Test262: This statement should not be evaluated.";

var C = class {
  static constructor() {}
  constructor() {} // stacks with a valid constructor
};
