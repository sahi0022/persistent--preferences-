document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('item-list');
    const themeSelect = document.getElementById('theme-select');
    const listStyleSelect = document.getElementById('list-style-select');

    
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedListStyle = localStorage.getItem('listStyle') || 'disc';

    document.body.classList.add(`${savedTheme}-theme`);
    itemList.classList.add(savedListStyle);
    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;

  
    const items = ['This is Item 1', 'This is Item 2', 'This is Item 3', 'This is Item 4', 'This is Item 5'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });


    themeSelect.addEventListener('change', (event) => {
        document.body.classList.remove('light-theme', 'dark-theme', 'colorful-theme');
        document.body.classList.add(`${event.target.value}-theme`);
        localStorage.setItem('theme', event.target.value);
    });

    listStyleSelect.addEventListener('change', (event) => {
        itemList.classList.remove('disc', 'circle', 'square');
        itemList.classList.add(event.target.value);
        localStorage.setItem('listStyle', event.target.value);
    });
});
