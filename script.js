document.addEventListener('DOMContentLoaded', function() {
    fetch('https://db.hashblen.com/codes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const codeListDiv = document.getElementById('code-list');
            codeListDiv.innerHTML = '';

            if (data.genshin && data.genshin.length > 0) {
                const genshinTitle = document.createElement('h2');
                genshinTitle.textContent = 'Genshin Impact Codes';
                codeListDiv.appendChild(genshinTitle);

                data.genshin.forEach(item => {
                    const codeItem = document.createElement('div');
                    codeItem.classList.add('code-item');
                    const link = document.createElement('a');
                    link.href = `https://genshin.hoyoverse.com/en/gift?code=${item.code.trim()}`;
                    link.textContent = item.code.trim();
                    link.classList.add('code-link');
                    link.target = '_blank';
                    codeItem.appendChild(link);
                    codeListDiv.appendChild(codeItem);
                });
            } else {
                codeListDiv.textContent = 'No Genshin Impact codes found.';
            }
        })
        .catch(error => {
            console.error('Error fetching codes:', error);
            const codeListDiv = document.getElementById('code-list');
            codeListDiv.textContent = 'Failed to load codes.';
        });
});
