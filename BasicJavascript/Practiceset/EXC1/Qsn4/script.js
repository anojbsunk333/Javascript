// write a program using promise all() inside an async /await to await 3 promises. compare its results with the case where we await these promises one by one.

let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const run = async () => {
    console.time("run")
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    console.log(a1, a2, a3)
    console.timeEnd("run")
}

run()