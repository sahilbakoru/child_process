var { exec, spawn } = require("child_process");

function DownloadModule() {
  exec("npm i react-native-option-dropdown", function (err, stdout, stderr) {
    if (err) console.error(stderr);
    console.log(stdout);
  });
}
function DeleteModule() {
  exec("npm uni react-native-option-dropdown", function (err, stdout, stderr) {
    if (err) console.error(stderr);
    console.log(stdout);
  });
}

setInterval(DownloadModule, 2400);
setInterval(DeleteModule, 2900);
