const generateMagicBalls = () => {
  let counter = 0;
  while (counter++ < 3) {
    let randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
  }
};

generateMagicBalls();
