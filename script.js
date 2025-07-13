const statusMap = {
  mesin: false,
  ayakan: false,
  tungku: false,
  lift: false,
  scam: false,
};

function toggle(device) {
  statusMap[device] = !statusMap[device];
  document.getElementById(`status-${device}`).textContent = statusMap[device] ? "ON" : "OFF";
}

// Simulasi suhu dan kelembaban setiap 3 detik
function simulateMonitoring() {
  const suhu = (Math.random() * (55 - 30) + 30).toFixed(1); // antara 30–55 °C
  const kelembaban = (Math.random() * (90 - 40) + 40).toFixed(1); // antara 40–90 %
  document.getElementById("suhu").textContent = suhu;
  document.getElementById("kelembaban").textContent = kelembaban;
}

setInterval(simulateMonitoring, 3000);
