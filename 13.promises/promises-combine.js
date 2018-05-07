function fetchAsync (url, timeout, onData, onError) {
    resolve(2)
}
let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${url}`), timeout);
    });
}
Promise.all([
    fetchPromised("http://backend/foo.txt", 1500),
    fetchPromised("http://backend/bar.txt", 500),
    fetchPromised("http://backend/baz.txt", 0)
]).then((data) => {
    let [ foo, bar, baz ] = data;
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
}, (err) => {
    console.log(`error: ${err}`);
});