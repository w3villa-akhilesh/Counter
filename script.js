const target = new Date("2025-04-17T00:00:00").getTime();

function updateCounter()
{
  const today = new Date().getTime();
  const left = target - today;

  if (left <= 0)
  {
    document.querySelector(".counter").innerHTML = "<h2>Countdown Ended!</h2>";
    return;
  }

  const days = Math.floor(left / (1000 * 60 * 60 * 24));
  const hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((left % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);