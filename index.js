import chalk from "chalk";

const logLevels = {
  log: null,
  info: "#0000FF",
  error: "#FF0000",
  success: "#00FF00",
  warning: "#FFFF00",
  purple: "#800080",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  orange: "#FFA500",
  pink: "#FFC0CB",
  brown: "#A52A2A",
};

const log = (message, level = "log") => {
  if (logLevels[level]) {
    console.log(chalk.hex([logLevels[level]])(message));
  } else {
    console.log(message);
  }
};

export default {
  log: (message) => log(message),
  info: (message) => log(message, "info"),
  error: (message) => log(message, "error"),
  warning: (message) => log(message, "warning"),
  success: (message) => log(message, "success"),
  purple: (message) => log(message, "purple"),
  cyan: (message) => log(message, "cyan"),
  magenta: (message) => log(message, "magenta"),
  orange: (message) => log(message, "orange"),
  pink: (message) => log(message, "pink"),
  brown: (message) => log(message, "brown"),
};
