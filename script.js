// ===== FLOATING HEARTS =====
function createHeart() {
    const heartsContainer = document.getElementById('hearts');
    if (!heartsContainer) return;

    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts every 500ms
setInterval(createHeart, 500);

// ===== REASONS FUNCTIONALITY =====
const reasons = [
    "You are patient with me.",
    "You reassure me when I feel insecure.",
    "You chose us.",
    "You make sure I have a smile on my face.",
    "You understand me.",
    "You love me genuinely.",
    "You are my best friend.",
    "You give me peace.",
    "You make distance feel small and easy.",
    "You are simply you."
];

// Track clicked kisses
let clickedCount = 0;
const clickedKisses = new Array(10).fill(false);

// MAKE SURE THIS FUNCTION IS GLOBAL
window.showReason = function (index) {
    console.log("Kiss clicked: " + index); // For debugging

    // Display the reason in the paper on the right
    const reasonContent = document.getElementById('reasonContent');
    const reasonCounter = document.getElementById('reasonCounter');

    if (reasonContent) {
        reasonContent.innerHTML = reasons[index];

        // Add a little animation
        reasonContent.style.transform = 'scale(1.05)';
        setTimeout(() => {
            reasonContent.style.transform = 'scale(1)';
        }, 200);
    }

    // Mark this kiss as clicked if not already clicked
    if (!clickedKisses[index]) {
        clickedKisses[index] = true;
        clickedCount++;

        // Visual feedback on the clicked kiss
        const kisses = document.querySelectorAll('.kiss');
        if (kisses[index]) {
            kisses[index].style.opacity = '0.7';
            kisses[index].style.filter = 'drop-shadow(0 0 15px #ff1493)';
        }

        // Update counter
        if (reasonCounter) {
            reasonCounter.innerHTML = `${clickedCount}/10`;
        }
    }

    // Check if all kisses are clicked
    if (clickedCount >= 10) {
        // Change paper content to show completion
        setTimeout(() => {
            if (reasonContent) {
                reasonContent.innerHTML = 'You\'ve discovered<br>all my reasons! ❤️';
            }
        }, 500);

        // Show next button after a short delay
        setTimeout(() => {
            const nextButton = document.getElementById("nextButtonContainer");
            if (nextButton) {
                nextButton.style.display = "block";
            }
        }, 1000);
    }
};

// Function to reset (call when page loads)
function resetReasonPage() {
    const reasonContent = document.getElementById('reasonContent');
    const reasonCounter = document.getElementById('reasonCounter');
    const centerText = document.getElementById('centerReason');

    if (reasonContent) {
        reasonContent.innerHTML = 'Click a kiss to see<br>why I love you';
    }
    if (reasonCounter) {
        reasonCounter.innerHTML = '0/10';
    }
    if (centerText) {
        centerText.innerHTML = 'Click<br>a Kiss';
    }

    // Reset clicked tracking
    clickedCount = 0;
    for (let i = 0; i < clickedKisses.length; i++) {
        clickedKisses[i] = false;
    }

    // Reset kiss appearance
    const kisses = document.querySelectorAll('.kiss');
    kisses.forEach(kiss => {
        kiss.style.opacity = '1';
        kiss.style.filter = 'drop-shadow(0 0 10px #ff69b4)';
    });
}

// ===== ENVELOPE FUNCTIONALITY =====
// ===== ENVELOPE FUNCTIONALITY =====
// ===== ENVELOPE FUNCTIONALITY =====
window.openEnvelope = function () {
    console.log("openEnvelope function called");

    const envelope = document.getElementById("envelope");
    const envelopeHint = document.getElementById("envelopeHint");
    const headphonesSection = document.getElementById("headphonesSection");
    const letterMessage = document.getElementById("letterMessage");

    if (!envelope) {
        console.log("Envelope not found!");
        return;
    }

    if (!envelope.classList.contains("open")) {
        console.log("Opening envelope...");
        envelope.classList.add("open");

        if (envelopeHint) {
            envelopeHint.innerText = "❤️ Your letter is here ❤️";
        }

        // Your beautiful long message
        const mainMessage = `Hi baby, it's me. I just want to thank you for loving me, for being there for me, and for deciding to give us a chance. Honestly, I never expected us to be where we are right now, but I truly believe unexpected love is the most beautiful kind. 

I prayed to God for someone patient with me, someone who would love me genuinely, care for me sincerely, understand me deeply, and pursue something real with me. I prayed for someone who knew Him, and He blessed me with you. 

Even though it became long distance, somehow you make the distance feel easy. I feel loved, cared for, seen, and understood. Even in moments when I can be jealous, insecure, or a little crazy, you still reassure me and remind me that I am yours. I could not ask for more.

You have been my friend, my best friend, my confidant, the person I trust with my heart. You are one of the best things that has ever happened to me, and I do not want to lose you. Sometimes I love you so much that I selfishly want you all to myself.

I have enjoyed every moment with you. You made it easy. You made it beautiful. Thank you for giving us another chance, for believing in us, for having hope in us. Not everyone would have done that, but you did and I will always appreciate that.

I cannot promise you the world, but I promise to love you, to stand by you, to hold your hand even when things get hard. I promise to pray for us, to protect what we have, and to always choose you.

I want you to know how much I truly love this relationship. I love it so deeply because you've created a space where I feel completely safe. Safe to love you loudly. Safe to be soft. Safe to be vulnerable. Safe to be myself without fear.

With you, I feel comfortable enough to do anything to express everything because you've become my safe place.

When you're offline, I feel it. I feel the emptiness. Like right now, being apart is hard. It really is. But I don't mind doing this with you. I don't mind the distance. I don't mind the waiting. Because I know it's worth it.

You are worth it.

You're worth every second, every effort, every hard moment. I see everything you do for me the small things, the big things, the quiet things you think I don't notice. I notice it all. The way you check on me. The way you make sure I'm okay. The way you carry me emotionally and make sure I feel secure.

I know sometimes my insecurities try to get in the way. I know I can overthink. I know I can get jealous or unsure. But I appreciate so much the way you handle me. The patience you show. The reassurance you give. The gentleness in the way you love me through those moments.

You've become someone I never want to lose.

You've become so important to me so deeply rooted in my life. I enjoy your company more than you'll ever understand. I enjoy talking to you. I enjoy spending hours and hours just listening to you talk, listening to your voice, feeling your love through the phone. Even silence with you feels full.

I want you to always remember that I'm here for you. I've got your back. I've got you. And I've got us. No matter what season we go through. No matter what challenges come. I'm choosing you every day.

I LOVE YOU OLIVET SITHOLE ❤️`;

        if (letterMessage) {
            // Clear any existing content
            letterMessage.innerHTML = "";

            let i = 0;
            const speed = 20;

            function typeWriter() {
                if (i < mainMessage.length) {
                    letterMessage.innerHTML += mainMessage.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    // Show headphones button when typing is done
                    if (headphonesSection) {
                        setTimeout(() => {
                            headphonesSection.style.display = "block";
                        }, 500);
                    }
                }
            }

            // Start typing after a short delay to let the envelope open
            setTimeout(typeWriter, 300);
        }
    } else {
        console.log("Envelope already open");
    }
};

// ===== SONG PAGE FUNCTIONALITY =====
function setupSongPage() {
    const playSongButton = document.getElementById("playSongButton");
    const song = document.getElementById("song");
    const video = document.getElementById("loveVideo");

    if (playSongButton && song) {
        playSongButton.addEventListener("click", function () {
            if (song.paused) {
                song.play();
                playSongButton.innerHTML = `
                    <span class="button-icon">⏸️</span>
                    <span class="button-text">Pause Song</span>
                    <span class="button-icon">⏸️</span>
                `;
                playSongButton.classList.add('paused');
            } else {
                song.pause();
                playSongButton.innerHTML = `
                    <span class="button-icon">🎵</span>
                    <span class="button-text">Play</span>
                    <span class="button-icon">🎵</span>
                `;
                playSongButton.classList.remove('paused');
            }
        });
    }

    // Optional: Sync video with audio
    if (video && song) {
        video.addEventListener('play', function () {
            if (song.paused) {
                song.play();
                if (playSongButton) {
                    playSongButton.innerHTML = `
                        <span class="button-icon">⏸️</span>
                        <span class="button-text">Pause Song</span>
                        <span class="button-icon">⏸️</span>
                    `;
                    playSongButton.classList.add('paused');
                }
            }
        });

        video.addEventListener('pause', function () {
            if (!song.paused) {
                song.pause();
                if (playSongButton) {
                    playSongButton.innerHTML = `
                        <span class="button-icon">🎵</span>
                        <span class="button-text">Play</span>
                        <span class="button-icon">🎵</span>
                    `;
                    playSongButton.classList.remove('paused');
                }
            }
        });
    }
}

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded");

    // Reset reason page if we're on that page
    if (document.getElementById('reasonContent')) {
        resetReasonPage();
    }

    // Setup song page if we're on that page
    if (document.getElementById('playSongButton')) {
        setupSongPage();
    }

    // Directly attach click event to seal emoji
    const sealEmoji = document.getElementById("sealEmoji");
    if (sealEmoji) {
        console.log("Seal emoji found, attaching click event");
        sealEmoji.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("Seal emoji clicked directly");
            openEnvelope();
        });
    }
});