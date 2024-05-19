document.getElementById('simulationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const n = parseInt(document.getElementById('n').value);
  const b = parseInt(document.getElementById('b').value);
  const m = parseInt(document.getElementById('m').value);
  const t = parseInt(document.getElementById('t').value);
  const r = parseInt(document.getElementById('r').value);

  simulateFeeding(n, b, m, t, r);
});

function simulateFeeding(n, b, m, t, r) {
  const log = document.getElementById('log');
  log.innerHTML = '';
  let totalTime = 0;
  let remainingFood = m;

  function logAction(message) {
    const timestamp = totalTime + 's: ';
    const logEntry = document.createElement('div');
    logEntry.textContent = timestamp + message;
    log.appendChild(logEntry);
    log.scrollTop = log.scrollHeight;
  }

  for (let i = 1; i <= n; i++) {
    if (remainingFood < b) {
      logAction('Бабушка наполняет миску');
      totalTime += r;
      remainingFood = m;
    }

    logAction(`Котик номер ${i} подошел к миске`);
    totalTime += t;
    remainingFood -= b;
    logAction(`Котик номер ${i} отошел от миски`);

    if (i === n) {
      logAction('Все котики накормлены');
    }
  }

  logAction(`Общее затраченное время: ${totalTime} секунд`);
}
