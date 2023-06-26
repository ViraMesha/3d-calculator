const buttons = document.querySelector(".buttons");
const value = document.querySelector("#value");

buttons.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  const target = event.target;
  if (target.nodeName === "SPAN") {
    const buttonValue = target.textContent;
    if (buttonValue === "=") {
      evaluateExpression();
    } else if (buttonValue === "Clear") {
      clearValue();
    } else {
      appendValue(buttonValue);
    }
  }
}

function evaluateExpression() {
  const result = new Function(`return ${value.textContent}`)();
  value.textContent = result;
}

function clearValue() {
  value.innerHTML = "";
}

function appendValue(buttonValue) {
  value.textContent += buttonValue;
}
