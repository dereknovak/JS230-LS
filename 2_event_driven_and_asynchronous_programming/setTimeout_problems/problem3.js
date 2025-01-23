setTimeout(() => {  
  setTimeout(() => {
    q();              // 7
  }, 15);

  d();                // 3

  setTimeout(() => {
    n();              // 6
  }, 5);

  z();                // 4
}, 10);

setTimeout(() => {  
  s();                // 5
}, 20);

setTimeout(() => {  
  f();                // 1
});

g();                  // 2

// f g d z s n q

// Correct solution:
// f/g swapped
// s/n swapped