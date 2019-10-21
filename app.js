//console.log("Hello World!");

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const paragraph = document.createElement("p");
    
        paragraph.textContent = "My new paragraph!";
    
        document.body.append(paragraph);
    });
});