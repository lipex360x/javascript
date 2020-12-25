const $ = document.querySelector.bind(document);

function setCalculator() {
  return {
    display: $(".display"),

    start() {
      this.getClickButtom();
      this.pressButton();
      this.pressEsc();
    },

    btnToDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    pressButton() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.executeCalc();
        }

        if (e.keyCode === 8) {
          this.deleteOne();
        }
      });
    },
    pressEsc() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 27) {
          this.clearDisplay();
        }
      });
    },

    executeCalc() {
      const expression = this.display.value;

      try {
        const result = eval(expression);

        this.display.value = result;
      } catch (error) {
        alert(error);
      }
    },

    getClickButtom() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        const btnClass = el.classList;
        const btnValue = el.innerText;

        if (btnClass.contains("num")) {
          this.btnToDisplay(btnValue);
        }

        if (btnClass.contains("clear")) {
          this.clearDisplay();
        }

        if (btnClass.contains("del")) {
          this.deleteOne();
        }

        if (btnClass.contains("eq")) {
          if (this.display.value) {
            this.executeCalc();
          }
        }
      });
    },
  };
}

const calculator = setCalculator();
calculator.start();
