document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");

    // Memanggil fungsi untuk menampilkan tahun
    displayYear();

    // Memanggil fungsi untuk menampilkan pesan salam
    displayGreeting();
});

// Fungsi untuk menampilkan tahun
function displayYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Fungsi untuk menampilkan pesan salam
function displayGreeting() {
    const greetingSection = document.querySelector('main section');
    if (greetingSection) {
        const hours = new Date().getHours();
        const { greeting, emoji } = getGreetingMessage(hours);

        const greetingMessage = document.createElement('div');
        greetingMessage.innerHTML = `
            <h2 style="color: #007bff; font-size: 1.5rem;">${greeting} ${emoji}</h2>
            <p style="color: #6c757d;">Hope you have a wonderful day!</p>
        `;
        greetingMessage.style.textAlign = "center";
        greetingSection.appendChild(greetingMessage);
    }
}

// Fungsi untuk menentukan pesan salam berdasarkan jam
function getGreetingMessage(hours) {
    let greeting = "Hello!";
    let emoji = "\u{1F600}"; // Default emoji (grinning face)

    if (hours < 12) {
        greeting = "Good Morning!";
        emoji = "\u{1F305}"; // Sunrise emoji
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
        emoji = "\u{2600}"; // Sun emoji
    } else {
        greeting = "Good Evening!";
        emoji = "\u{1F31C}"; // Crescent moon emoji
    }

    return { greeting, emoji };
}

