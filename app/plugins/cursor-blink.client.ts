export default defineNuxtPlugin(() => {
    let visible = true;
    setInterval(() => {
        visible = !visible;
        document.documentElement.classList.toggle("cursor-blink-off", !visible);
    }, 530);
});
