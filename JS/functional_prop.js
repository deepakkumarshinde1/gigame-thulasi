// pure function
// hof
// recursion
function genOtp() {
  let opt = Math.round(Math.random * 10000);
  if (opt < 1000) {
    return genOtp();
  } else {
    return opt;
  }
}

// function composition
function add(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

let composition = (f1, f2, v1, v2) => {
  return f1(f2(v1, v2), v2);
};

composition(add, multi, 10, 20);
composition(add, add, 10, 20);
composition(multi, multi, 10, 20);
composition(multi, add, 10, 20);

// curring
function sub(a) {
  return function (b) {
    return function (c) {
      return a - b - c;
    };
  };
}
sub(10)(20)(30);

// dynamic curring
function adds(a) {
  return function (b) {
    if (b !== undefined) {
      return adds(a + b);
    } else {
      return a;
    }
  };
}

adds(10)(20)(40)(50)();
