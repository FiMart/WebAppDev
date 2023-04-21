// Web Worker Runtime for Main Website
let sendtime = () => {
    postMessage(new Date().toString());
};
setInterval(sendtime, 1000);