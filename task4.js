/**
 * Time: 4 min
 */

function output(msg) {
    console.log(this.type, ":", msg)
}

var errorMsg = {
    type: 'error',
    output: output // point-free binding
};
var warningMsg = {
    type: 'warning',
    output: output
};

errorMsg.output('You have been disconnected!');
warningMsg.output('You have been idle for 15 minutes');
