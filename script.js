document.addEventListener('DOMContentLoaded', () => {
  fetch('data/steps.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('step-list');
      data.forEach(step => {
        const div = document.createElement('div');
        div.className = 'step';
        div.innerHTML = `
          <h3>${step.title}</h3>
          <div class="content">${step.description}</div>
        `;
        div.addEventListener('click', () => {
          div.classList.toggle('open');
        });
        container.appendChild(div);
      });
    });
});
