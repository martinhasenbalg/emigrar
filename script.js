function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('2024-09-01');
    const difference = targetDate - currentDate;
  
    if (difference <= 0) {
      clearInterval(intervalId);
      document.getElementById('countdown').innerHTML = '¡Ya es el día!';
      return;
    }
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerHTML = `${days} días  <br> ${hours} horas <br> ${minutes} minutos  <br>${seconds} segundos`;
  }
  
  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);