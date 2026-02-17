let a = [
  "Initializing Hack tool......",
  "Connecting to Facebook......",
  "Connecting to server 1......",
  "Connection failed. Retrying....",
  "Connecting to server 2.......",
  "Connected Successfully........",
  "Username I am ANDY........",
  "Trying Brute Forced.......",
  "200k passwords tried....",
  "Match not Found......",
  "Another 200k passwords tried.....",
  "Match not found.......",
  "Another 200k passwords tried....",
  "Match found......",
  "Accessing Account......",
  "Hack Successful.......",
];

const sleep = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const showHack = async (message) => {
  await sleep(2);
  console.log(message);
  // Uncomment this line to show text on the webpage
  text.innerHTML = text.innerHTML + message + "<br>";
};

// Fixed IIFE - added () at the end to invoke it
(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
  }
})();
