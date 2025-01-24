# 1

The order is `MAIN` followed by `DIV`. This occurs because both event listeners are in bubbling mode, causing the child to precede the parent in invocation. The `target` property represents what was pressed, that being `'elem4'`, and the `currentTarget` represents the object the listener is attached, that being `elem1`. Because we're in bubbling mode, the child is logged first.

# 2

The capturing phase occurs before the bubbling phase, so `capturing` is alerted before `bubbling`, despite the order listed in the code.

# 3

The alerts appear in the order in which they were completed. This is due to the **event loop**, which operates as a queue.