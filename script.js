document.addEventListener('DOMContentLoaded', function() {
    fetch('https://db.hashblen.com/codes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const codeListDiv = document.getElementById('code-list');
            codeListDiv.innerHTML = ''; // Clear the loading message

            // Assuming the data is a simple list of codes separated by newlines
            const codes = data.trim().split('\n');

            if (codes.length > 0) {
                codes.forEach(code => {
                    const codeItem = document.createElement('div');
                    codeItem.classList.add('code-item');
                    const link = document.createElement('a');
                    link.href = `https://genshin.hoyoverse.com/en/gift?code=${code.trim()}`;
                    link.textContent = code.trim();
                    link.classList.add('code-link');
                    link.target = '_blank'; // Open in a new tab
                    codeItem.appendChild(link);
                    codeListDiv.appendChild(codeItem);
                });
            } else {
                codeListDiv.textContent = 'No codes found.';
            }
        })
        .catch(error => {
            console.error('Error fetching codes:', error);
            const codeListDiv = document.getElementById('code-list');
            codeListDiv.textContent = 'Failed to load codes.';
        });
});
