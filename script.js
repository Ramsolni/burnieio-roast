<script>
// burnie_script.js
document.addEventListener('DOMContentLoaded', function() {
    const roastBtn = document.getElementById('roastBtn');
    const codeInput = document.getElementById('codeInput');
    const roastResult = document.getElementById('roastResult');
    const roastText = document.getElementById('roastText');
    const tokenCount = document.getElementById('tokenCount');
    const totalRoasts = document.getElementById('totalRoasts');
    const tokensEarned = document.getElementById('tokensEarned');
    const developers = document.getElementById('developers');

    // Array of messages
    const roastMessages = [
        "Your code is so bad, even the console is embarrassed to execute it! 🔥",
        "I've seen better algorithms written in crayon by a 5 year old! 💀",
        "Your variable names are more confusing than IKEA furniture instructions! 🤯",
        "This code has more bugs than a summer camping trip! 🐛",
        "Your indentation is worse than my dating life! 💔",
        "I've seen more structure in a bowl of spaghetti! 🍝",
        "Your code is so messy, Marie Kondo would quit! 🧹",
        "This looks like you coded it during an earthquake! 🌋",
        "Your functions are longer than a CVS receipt! 📄",
        "Even my grandmother's first Html page had better syntax! 👵"
    ];
       // Add sample code on page load
    if (codeInput.value === '') {
        codeInput.value = sampleCodes[Math.floor(Math.random() * sampleCodes.length)];
    }

    // Roast button
    roastBtn.addEventListener('click', function() {
        const code = codeInput.value.trim();

        if (code === '') {
            alert('Please paste some code first! Even bad code is better than no code! 😅');
            return;
        }

        // Disable button temporarily
        roastBtn.disabled = true;
        roastBtn.textContent = 'ROASTING... 🔥';

        // Simulate AI processing delay
        setTimeout(() => {
            // Generate random roast
            const randomRoast = roastMessages[Math.floor(Math.random() * roastMessages.length)];
            roastText.textContent = randomRoast;

            // Calculate tokens based on code length (more code = more tokens)
            const tokens = Math.floor(code.length / 10) + Math.floor(Math.random() * 50) + 10;

            // token counter
            animateTokenCounter(tokens);

            // result
            roastResult.classList.remove('hidden');

            // Update stats
            updateStats();

            // Re-enable button
            roastBtn.disabled = false;
            roastBtn.textContent = 'ROAST MY CODE 🔥';

            // Scroll to result
            roastResult.scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    });

    // Animate token counter
    function animateTokenCounter(finalValue) {
        let current = 0;
        const increment = Math.ceil(finalValue / 20);
        const timer = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(timer);
            }
            tokenCount.textContent = current;
        }, 50);
    }

    // Update statistics
    function updateStats() {
        // Increment total roasts
        const currentRoasts = parseInt(totalRoasts.textContent);
        totalRoasts.textContent = currentRoasts + 1;

        // Update tokens earned
        const currentTokens = parseInt(tokensEarned.textContent.replace(',', ''));
        const newTokens = currentTokens + parseInt(tokenCount.textContent);
        tokensEarned.textContent = newTokens.toLocaleString();

        // Sometimes increment developers count
        if (Math.random() > 0.7) {
            const currentDevs = parseInt(developers.textContent);
            developers.textContent = currentDevs + 1;
        }
    }

    // Random stats update
    setInterval(() => {
        if (Math.random() > 0.8) {
            const currentRoasts = parseInt(totalRoasts.textContent);
            totalRoasts.textContent = currentRoasts + Math.floor(Math.random() * 3) + 1;
        }
    }, 30000);

    // Easter egg_Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        if (konamiCode.join('') === konamiSequence.join('')) {
            alert('🎉 EASTER EGG FOUND! You get 1000 bonus $ROAST tokens! 🎉');
            tokenCount.textContent = parseInt(tokenCount.textContent) + 1000;
        }
    });
});
</script>