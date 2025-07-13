document.addEventListener('DOMContentLoaded', () => {
  fetch('data/steps.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('step-list');
      const savedProgress = JSON.parse(localStorage.getItem('qadamProgress')) || {};

      data.forEach((step, index) => {
        const stepId = `step-${index}`;
        const div = document.createElement('div');
        div.className = 'step';
        if (savedProgress[stepId]) div.classList.add('completed');

        div.innerHTML = `
          <h3>${step.title}</h3>
          <div class="content">${step.description}</div>
          <button class="mark-done">${savedProgress[stepId] ? '✓ Пройдено' : 'Отметить как пройдено'}</button>
        `;

        div.querySelector('.mark-done').addEventListener('click', (e) => {
          e.stopPropagation();
          const isCompleted = div.classList.toggle('completed');
          savedProgress[stepId] = isCompleted;
          localStorage.setItem('qadamProgress', JSON.stringify(savedProgress));
          e.target.textContent = isCompleted ? '✓ Пройдено' : 'Отметить как пройдено';
        });

        div.addEventListener('click', () => {
          div.classList.toggle('open');
        });

        container.appendChild(div);
      });
    });
});
