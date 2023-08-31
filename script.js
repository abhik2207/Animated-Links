for(const link of document.getElementsByClassName("link")) {
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 60, percentRange = 40, adjustablePercent = percentRange * decimal;

        const lightPinkPercent = basePercent + adjustablePercent;

        link.style.setProperty("--light-pink-percent", `${lightPinkPercent}%`);
    }
}