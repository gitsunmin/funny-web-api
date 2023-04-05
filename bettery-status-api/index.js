function changeMode(battery) {
  if (battery.charging) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}

function updateBatteryStatus(battery) {
  document.getElementById("level").innerHTML =
    (battery.level * 100).toFixed() + "%";
  document.getElementById("charging").innerHTML = battery.charging;
  document.getElementById("chargingTime").innerHTML = battery.chargingTime;
  document.getElementById("dischargingTime").innerHTML =
    battery.dischargingTime;

  changeMode(battery);
}

function batteryStatus() {
  if (navigator.getBattery) {
    navigator.getBattery().then((battery) => {
      updateBatteryStatus(battery);
      battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
      });
      battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
      });
      battery.addEventListener("chargingtimechange", () => {
        updateBatteryStatus(battery);
      });
      battery.addEventListener("dischargingtimechange", () => {
        updateBatteryStatus(battery);
      });
    });
  } else {
    document.getElementById("level").innerHTML = "Not supported";
  }
}

batteryStatus();
