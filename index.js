var {exec, spawn} = require('child_process')



function DownloadModule() {
    exec('npm i react-native-option-dropdown', function(err, stdout,stderr){
        if(err) console.error(stderr);
        console.log(stdout);
    });
}


setInterval(DownloadModule, 10000);