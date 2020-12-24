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

// wait("Step 1", rand(0, 2))
//   .then((result) => {
//     console.log(result);
//     return wait("Step 2", rand(0, 2));
//   })
//   .then((result) => {
//     console.log(result);
//     return wait("Step 3", rand(0, 2));
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error)
//   })

async function execute() {
  try {
    // Promise Pending
    const step1 = wait("Step 1", 1000);
    console.log(step1);

    setTimeout(() => {
      console.log(step1)
    },2000)

    const step2 = await wait('Step 2', rand(0, 2));
    console.log(step2);

    const step3 = await wait("Step 3", rand(0, 2));
    console.log(step3);
  } catch (error) {
    console.log(error)
  }
}

execute();
