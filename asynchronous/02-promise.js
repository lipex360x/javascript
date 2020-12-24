function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") reject(new Error("BAD VALUE"));

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

wait("Phrase 1", rand(1, 3))
  .then((result) => {
    console.log(result);
    return wait("Phrase 2", rand(1, 3));
  })
  .then((result) => {
    console.log(result);
    return wait(1234, rand(1, 3));
  })
  .then((result) => {
    console.log(result);
  })
  .then(() => {
    console.log("end of promises");
  })
  .catch((error) => {
    console.error("ERROR:", error);
  });
