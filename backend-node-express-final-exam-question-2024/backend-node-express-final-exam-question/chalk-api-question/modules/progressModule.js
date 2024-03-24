const progressBar = require("progress");
const chalk = require("chalk");

var downloadBar = new progressBar("Downloading [:bar]  :percent :etas", {
  complete: chalk.green.bgGreen(" "),
  incomplete: chalk.black.bgBlack(" "),
  width: 20,
  total: 100,
});

var timer;

const startProgress = () => {
  console.log(chalk.greenBright.bgBlack(`Downloaded --> Started.`));
  timer = setInterval(function () {
    downloadBar.tick();
    if (downloadBar.complete) {
      console.log(chalk.greenBright.bgBlack(`Downloaded --> Completed.`));
      clearInterval(timer);
    }
  }, 100);
};

const stopProgress = () => {
  console.log(chalk.redBright.bgBlack(`Downloaded --> Stopped!`));
  clearInterval(timer);
};

module.exports = {
  startProgress,
  stopProgress,
};
