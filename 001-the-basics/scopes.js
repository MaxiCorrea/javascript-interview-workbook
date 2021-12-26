/** Global Scope */
// (outside of function globalScope is called global scope)
function globalScope() {}

/** Local Scope */
function localScope() {
  // local scope
}

/** Block Scope */
{
  // block scope
}

/** Lexical scope */
function parentScope() {
  //variables declared here
  function child() {
    //variables can be accessed here
  }
  child();
}
