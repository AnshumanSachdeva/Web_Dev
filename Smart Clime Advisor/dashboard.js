document.addEventListener("DOMContentLoaded", function () {
  const cityInput = document.getElementById("cityInput");
  const searchBtn = document.getElementById("searchBtn");
  const errorMessage = document.getElementById("errorMessage");
  const cityName = document.getElementById("cityName");
  const forecastTitle = document.querySelector(".forecast-section h3");

  searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim().toLowerCase();

    errorMessage.textContent = "";

    if (city === "jammu") {
      forecastTitle.textContent = "7-Day Forecast - Jammu";
      cityName.textContent = "Jammu";

      errorMessage.textContent = "Weather data loaded for Jammu!";
      errorMessage.style.color = "#16a34a";

      setTimeout(() => {
        errorMessage.textContent = "";
      }, 2000);
    } else {
      errorMessage.textContent =
        'City not found. Only "Jammu" is available in the demo version.';
      errorMessage.style.color = "#dc2626";
    }
  });

  document.getElementById("localMode").addEventListener("click", function () {
    alert(
      "🏠 Local Outing Mode Activated!\n\n📋 Recommended Plan:\n• Time: 4 PM - 7 PM (Best weather)\n• Activities: Shopping, Temple visits, Walking tours\n• Essentials: Water bottle, Sunglasses, Comfortable shoes\n• Budget: ₹500-1000 for local expenses\n\n💡 Smart Tips:\n• Visit Raghunath Temple before sunset\n• Try local street food in the evening\n• Carry cash for small shops\n• Use public transport or auto-rickshaws"
    );
  });

  document.getElementById("travelMode").addEventListener("click", function () {
    alert(
      "✈️ Travel Planning Mode Activated!\n\n🎒 Packing List for Jammu:\n• 3-4 Cotton T-shirts\n• 2 Jeans/Trousers\n• Light Jacket (for evenings)\n• Sunglasses & Cap\n• Comfortable walking shoes\n• Sunscreen SPF 30+\n• Water bottle\n• Power bank\n\n📅 3-Day Itinerary:\nDay 1: Raghunath Temple + Local Market\nDay 2: Bahu Fort + Bagh-e-Bahu\nDay 3: Mansar Lake + Shivkhori\n\n💰 Estimated Cost: ₹3000-5000"
    );
  });

  // Enter key support
  cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });

  console.log("SmartClime Dashboard loaded successfully!");
  console.log("Available cities in demo: Jammu");
});
