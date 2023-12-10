const buttons = document.getElementsByClassName("nav");


const frame = document.getElementById("main_frame");

for (i = 0; i < buttons.length; i++) {
    const btn = buttons[i];

    btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        frame.src = "/" + btn.href;
    });
}
