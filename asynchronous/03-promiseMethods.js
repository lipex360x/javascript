function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") {
      reject(new Error("BAD VALUE"));
      return;
    }

    setTimeout(() => {
      resolve(message);
      return;
    }, time);
  });
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject
const promises = [
  //"first value",
  wait("Promise 1", rand(3, 5)),
  wait("promise 2", rand(2, 5)),
  wait("promise 3", rand(1, 5)),
  //wait(1234, rand(1, 3)),
  //"last value",
];

Promise.race(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function loadPage() {
  const cached = false;

  if (cached) {
    return Promise.resolve("Page Cached");
  } else {
    return wait("Download Page", rand(1, 3));
  }
}

loadPage()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
