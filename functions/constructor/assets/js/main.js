const $ = document.querySelector.bind(document);
const display = $(".display");

function Calculator() {
  getClickButtom();
  pressButton();
  pressEsc();

  function btnToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function deleteOne() {
    display.value = display.value.slice(0, -1);
  }

  function pressButton() {
    display.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        executeCalc();
      }

      if (e.keyCode === 8) {
        deleteOne();
      }
    });
  }
  function pressEsc() {
    display.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        clearDisplay();
      }
    });
  }

  function executeCalc() {
    const expression = display.value;

    try {
      const result = eval(expression);

      display.value = result;
    } catch (error) {
      alert(error);
    }
  }

  function getClickButtom() {
    document.addEventListener("click", (e) => {
      const el = e.target;
      const btnClass = el.classList;
      const btnValue = el.innerText;

      if (btnClass.contains("num")) {
        btnToDisplay(btnValue);
      }

      if (btnClass.contains("clear")) {
        clearDisplay();
      }

      if (btnClass.contains("del")) {
        deleteOne();
      }

      if (btnClass.contains("eq")) {
        if (display.value) {
          executeCalc();
        }
      }
    });
  }
}

const calculator = new Calculator()
