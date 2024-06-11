//Callback
function asynca(callback) {
  setTimeout(() => {
    console.log("some data");
    callback("success");
  }, 1000);
}

function getDataUsingCallbacks() {
  console.log("getting data 1");
  asynca(() => {
    console.log("getting data 2");
    asynca(() => {
      console.log("getting data 3");
      asynca(() => {
        console.log("getting data 4");
        asynca(() => {});
      });
    });
  });
}

getDataUsingCallbacks();

// Promise
function asynca() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data");
      resolve("success");
    }, 1000);
  });
}

function getDataUsingPromises() {
  console.log("getting data 1");
  asynca()
    .then(() => {
      console.log("getting data 2");
      return asynca();
    })
    .then(() => {
      console.log("getting data 3");
      return asynca();
    })
    .then(() => {
      console.log("getting data 4");
      return asynca();
    })
    .then(() => {});
}

getDataUsingPromises();

// Async/Await
function asynca() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data");
      resolve("success");
    }, 1000);
  });
}

(async function () {
  console.log("gettting data 1");
  await asynca(1);
  console.log("gettting data 2");
  await asynca(2);
  console.log("gettting data 3");
  await asynca(3);
  console.log("gettting data 4");
  await asynca(4);
})();
