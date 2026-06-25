const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      inputValue.innerText === "0" ||
      inputValue.innerText === "NaN"
    ) {
      inputValue.innerText = "";
    }

    inputValue.innerText += e.target.innerText.trim();
  });
});

document.querySelectorAll(".operations").forEach((item) => {
  item.addEventListener("click", (e) => {
    const value = e.target.innerText.trim();
    let lastValue = inputValue.innerText.slice(-1);

    if (value === "=") {
      try {
        inputValue.innerText = eval(inputValue.innerText);
      } catch {
        inputValue.innerText = "NaN";
      }
    }

    else if (value === "AC") {
      inputValue.innerText = "0";
    }

    else if (value === "DEL") {
      inputValue.innerText = inputValue.innerText.slice(0, -1);

      if (inputValue.innerText.length === 0) {
        inputValue.innerText = "0";
      }
    }

    else {
      if (!isNaN(lastValue) || lastValue === ".") {
        inputValue.innerText += value;
      }
    }
  });
});