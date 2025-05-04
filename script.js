document.addEventListener('DOMContentLoaded', function() {
    fetch('https://db.hashblen.com/codes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            const codeListDiv = document.getElementById('code-list');
            codeListDiv.innerHTML = ''; // Clear the loading message

            // Function to create a section for codes
            function createCodeSection(title, codes, baseUrl) {
                if (codes && codes.length > 0) {
                    const sectionTitle = document.createElement('h2');
                    sectionTitle.textContent = title;
                    codeListDiv.appendChild(sectionTitle);

                    codes.forEach(item => {
                        const codeItem = document.createElement('div');
                        codeItem.classList.add('code-item');
                        const link = document.createElement('a');
                        link.href = `${baseUrl}${item.code.trim()}`;
                        link.textContent = item.code.trim();
                        link.classList.add('code-link');
                        link.target = '_blank';
                        codeItem.appendChild(link);
                        codeListDiv.appendChild(codeItem);
                    });
                }
            }

            // Extract and display Genshin codes
            if (data.genshin) {
                createCodeSection('Genshin Impact Codes', data.genshin, 'https://genshin.hoyoverse.com/en/gift?code=');
            }

            // Extract and display codes from other sections (excluding genshin)
            const otherCodes = [];
            for (const key in data) {
                if (key !== 'genshin' && key !== 'retcode' && key !== 'previous_update' && key !== 'latest_update' && Array.isArray(data[key])) {
                    data[key].forEach(item => {
                        otherCodes.push({ code: item.code, game: key });
                    });
                }
            }

            if (otherCodes.length > 0) {
                const otherGamesTitle = document.createElement('h2');
                otherGamesTitle.textContent = 'Other Game Codes';
                codeListDiv.appendChild(otherGamesTitle);
                otherCodes.forEach(item => {
                    const codeItem = document.createElement('div');
                    codeItem.classList.add('code-item');
                    const link = document.createElement('a');
                    // You might need to adjust the base URL for other games if they are different
                    link.href = `?code=${item.code.trim()}`; // Placeholder URL, adjust as needed
                    link.textContent = `${item.code.trim()} (${item.game.toUpperCase()})`;
                    link.classList.add('code-link');
                    link.target = '_blank';
                    codeItem.appendChild(link);
                    codeListDiv.appendChild(codeItem);
                });
            }

            if (!data.genshin && otherCodes.length === 0) {
                codeListDiv.textContent = 'No codes found.';
            }

        })
        .catch(error => {
            console.error('Error fetching codes:', error);
            const codeListDiv = document.getElementById('code-list');
            codeListDiv.textContent = 'Failed to load codes.';
        });
});
