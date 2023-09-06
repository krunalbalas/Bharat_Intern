document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const resultParagraph = document.getElementById("result");
  
    convertBtn.addEventListener("click", function () {
      const celsiusInput = document.getElementById("celsius");
      const celsiusValue = parseFloat(celsiusInput.value);
  
      if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        resultParagraph.textContent = `${celsiusValue}°C is equal to ${fahrenheitValue.toFixed(2)}°F`;
      } else {
        resultParagraph.textContent = "Please enter a valid temperature in Celsius.";
      }
    });
  });
  