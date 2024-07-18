let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let str = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    onButtonClick(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  handleKeybtn(e.key);
});

const onButtonClick = (val) => {
  switch (val) {
    case "=":
      calculateResult();
      break;
    case "AC":
      clearInput();
      break;
    case "DEL":
      deleteElement();
      break;
    default:
      appendValue(val); 
      break;
  }
};

const handleKeybtn = (key) => {
  if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteElement();
  } else if (key === "Escape") {
    clearInput();
  }
};

const appendValue = (value) => {
  str = str + value;
  updateInput();
};

const deleteElement = () => {
  str = str.slice(0, -1);
  updateInput();
};

const clearInput = () => {
  str = "";
  updateInput();
};

const calculateResult = () => {
  try {
    str = eval(str);
    updateInput();
  } catch (e) {
    displayError();
  }
};

const evaluateExpression = (expression) => {
  return new Function("return " + expression)();
};

const updateInput = () => {
  input.value = str;
};

