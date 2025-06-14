function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    element.textContent = `${hours}:${minutes}:${seconds}`;
}

const element = document.querySelector("time");
updateTime();
setInterval(updateTime, 1000);
