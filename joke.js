const jokeForm = document.getElementById('joke-form');
const jokesDiv = document.getElementById('jokes');

jokeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const comedian = document.getElementById('comedian').value;
  const year = document.getElementById('year').value;

  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, comedian, year }),
  })
    .then((response) => response.json())
    .then((data) => {
      jokesDiv.innerHTML = '';
      data.forEach((joke) => {
        const jokeElement = document.createElement('div');
        jokeElement.className = 'joke';
        jokeElement.textContent = `${joke.title} - ${joke.comedian} (${joke.year})`;
        jokesDiv.appendChild(jokeElement);
      });
    })
    .catch((error) => console.error(error));
});
