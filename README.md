## A simple logger with levels for NodeJS.

## Install

```sh
npm install clg-logger
```

## Usage

```js
import logger from "clg-logger";
const { log, info, error, success, warning } = logger;

log("Regular log message");
info("Informational message");
error("Error message");
success("Success message");
```
