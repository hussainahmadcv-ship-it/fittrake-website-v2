const tips = [
    "Drink at least 2–3 liters of water daily.",
    "Start your day with a 10-minute stretch.",
    "Take a 20-minute walk after meals.",
    "Add more fruits and vegetables to your meals.",
    "Do basic exercises like push-ups and squats daily.",
    "Get at least 7–8 hours of sleep every night.",
    "Avoid sugar as much as possible.",
    "Warm-up before workouts to avoid injury.",
    "Do 15 minutes of cardio every morning.",
    "Consistency is more important than intensity."
];

function generateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tipBox").innerText = tips[randomIndex];
}
