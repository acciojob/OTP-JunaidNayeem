//your JS code here. If required.
const codeInputs = document.querySelectorAll(".code");

codeInputs.forEach((input, index) => {
  input.addEventListener("keyup", (event) => {
    if (event.key === "Backspace" && input.value === "") {
      if (index > 0) {
        codeInputs[index - 1].focus();
        codeInputs[index - 1].value = "";
      }
    } else if (input.value.length === 1) {
      if (index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    }
  });
});
