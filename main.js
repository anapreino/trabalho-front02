function findMaxDate(date1, date2) {
    // Converte as datas para o formato ISO para comparação
    return date1.toISOString() > date2.toISOString() ? date1 : date2;
  }
  
  function calculateDateInterval(date1, date2) {
    // Garante que a data1 é sempre a mais antiga
    if (date1 > date2) {
      [date1, date2] = [date2, date1];
    }
  
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    return diffDays;
  }
  
  function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  
    return `${hours}:${minutes} - ${day}/${month}/${year}`;
  }
  
  function calculate() {
    const date1Input = document.getElementById("date1");
    const date2Input = document.getElementById("date2");
    const resultDiv = document.getElementById("result");
  
    const date1 = new Date(date1Input.value);
    const date2 = new Date(date2Input.value);
  
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      resultDiv.textContent = "Por favor, insira datas válidas.";
      return;
    }
  
    const maxDate = findMaxDate(date1, date2);
    const intervalDays = calculateDateInterval(date1, date2);
    const currentDate = getCurrentDate();
  
    resultDiv.innerHTML = `
        <p>Data mais recente: ${maxDate.toLocaleDateString()}</p>
        <p>Intervalo de dias: ${intervalDays} dias</p>
        <p>Data atual: ${currentDate}</p>
    `;
  }
  