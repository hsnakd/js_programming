async function getIntoCar() {
  return new Promise((reslove) => {
    console.log("Get into the car");
    reslove();
  });
}

async function startCar() {
  return new Promise((reslove) => {
    console.log("Car started");
    reslove();
  });
}

async function drive() {
  return new Promise((reslove) => {
    console.log("Driving the car");
    reslove();
  });
}

getIntoCar()
  .then(() => startCar())
  .then(() => drive())
  .finally(() => {
    console.log("reached the destination");
  });
