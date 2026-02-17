let a = [
  "Initializing Hack tool......",
  "Connecting to Facebook......",
  "Connecting to server 1......",
  "Connection failed. Retrying....",
  "Connecting to server 2.......",
  "Connected Successfully........",
  "Username  'ANDY'........",
  "Trying Brute Forced.......",
  "20,000 passwords tried....",
  "Match not Found......",
  "Another 35,261 passwords tried.....",
  "Match not found.......",
  "Another 51,036 passwords tried....",
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

// Add some interactive functionality
const output = document.getElementById('output');
const cursor = document.getElementById('cursor');

// Simulate typing effect
function typeText(text, element, speed = 50) {
    return new Promise(resolve => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

// Run hack simulation
async function runHack() {
    const hackMessages = [
        "Initializing hack sequence...",
        "Bypassing firewall... █▒▒▒▒▒▒▒▒▒ 10%",
        "Firewall bypassed! ████████▒▒ 80%",
        "Accessing mainframe... ██████████ 100%",
        "Credentials found: admin:********",
        "Downloading data... 2.4 MB/s",
        "Hack completed successfully!"
    ];
    
    output.innerHTML = '';
    
    for (const msg of hackMessages) {
        const line = document.createElement('div');
        line.className = 'output-line';
        line.innerHTML = '> ' + msg;
        output.appendChild(line);
        await new Promise(r => setTimeout(r, 800));
    }
}

// Clear terminal
function clearTerminal() {
    output.innerHTML = '';
}

// Matrix rain effect (optional - requires canvas setup)
function matrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    canvas.style.opacity = '0.3';
    setTimeout(() => {
        canvas.style.opacity = '0.1';
    }, 3000);
}

// Update system metrics randomly
setInterval(() => {
    const cpuLoad = Math.floor(Math.random() * 60) + 20;
    const memUsed = (Math.random() * 2 + 1).toFixed(1);
    
    document.getElementById('cpu-load').textContent = cpuLoad + '%';
    document.getElementById('cpu-progress').style.width = cpuLoad + '%';
    
    document.getElementById('memory-usage').textContent = memUsed + 'GB/8GB';
    document.getElementById('memory-progress').style.width = (memUsed / 8 * 100) + '%';
}, 3000);
