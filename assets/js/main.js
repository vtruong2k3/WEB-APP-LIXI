const usedNames = new Set();
const rewards = ["1k", "2k", "5k", "1k", "2k"]

document.getElementById("startBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();

    if (!nameInput) {
        alert("Vui lòng nhập tên của bạn!");
        return;
    }

    if (usedNames.has(nameInput)) {
        alert("Tên này đã lắc rồi, hãy thử tên khác!");
        return;
    }

    document.getElementById("formContainer").classList.add("hidden");
    document.getElementById("lixiAnimation").classList.remove("hidden");

    setTimeout(() => {
        const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
        usedNames.add(nameInput);
    
        document.getElementById("lixiAnimation").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById('name').textContent=nameInput;
        document.getElementById("lixiAmount").textContent = randomReward;
    }, 3000);
});
