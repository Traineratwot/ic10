import {Execution, ic10Error, InterpreterIc10} from "./main";
import fs from "fs";

var code = fs.readFileSync(".ic10", "utf8")
var settings = {
  debug: true,
  debugCallback: function () {
    console.log(...arguments)
  },
  logCallback: function () {
    console.log(...arguments)
  },
  executionCallback: function (e: ic10Error) {
    Execution.display(e)
  },
}
// console.log(code)
var interpreterIc10 = new InterpreterIc10(code, settings)
// OR
interpreterIc10.init(code)

interpreterIc10.run()

