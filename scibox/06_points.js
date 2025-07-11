const pointsWidget = {
    html: [
        '<div class="points-widget">',
        '    <button class="points-toggle" onclick="window.togglePoints()" title="Toggle Points">',
        '        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
        '            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>',
        '        </svg>',
        '        <span class="button-text">My Points</span>',
        '    </button>',
        '    <div class="points-container" id="pointsContainer">',
        '        <div class="points-header">',
        '            <h3>My SciBox Points</h3>',
        '            <div class="points-controls">',
        '                <button id="connectPointsBtn">Connect Wallet</button>',
        '                <button id="calculatePointsBtn" disabled>Calculate</button>',
        '            </div>',
        '        </div>',
        '        <div class="points-content" id="pointsContent">',
        '            <div class="loading">Connect wallet to view points...</div>',
        '        </div>',
        '    </div>',
        '</div>'
    ].join('\n'),
    
    css: [
        '.points-widget {',
        '    position: fixed;',
        '    right: 30px;',
        '    bottom: 160px;',
        '    z-index: 1000;',
        '}',
        '',
        '.points-toggle {',
        '    display: flex;',
        '    align-items: center;',
        '    justify-content: center;',
        '    gap: 8px;',
        '    padding: 8px 20px;',
        '    background: #6366f1;',
        '    color: white;',
        '    border: none;',
        '    border-radius: 25px;',
        '    font-size: 14px;',
        '    cursor: pointer;',
        '    box-shadow: 0 2px 6px rgba(99, 102, 241, 0.3);',
        '    transition: all 0.2s ease;',
        '    min-width: 140px;',
        '    height: 36px;',
        '}',
        '',
        '.points-toggle:hover {',
        '    background: #4f46e5;',
        '    transform: translateY(-1px);',
        '    box-shadow: 0 4px 8px rgba(99, 102, 241, 0.4);',
        '}',
        '',
        '.points-toggle svg {',
        '    width: 20px;',
        '    height: 20px;',
        '}',
        '',
        '.button-text {',
        '    font-weight: normal;',
        '    margin-left: 2px;',
        '}',
        '',
        '.points-container {',
        '    position: absolute;',
        '    bottom: 60px;',
        '    right: 0;',
        '    width: 320px;',
        '    background: white;',
        '    border-radius: 12px;',
        '    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);',
        '    display: none;',
        '    overflow: hidden;',
        '}',
        '',
        '.points-container.active {',
        '    display: block;',
        '}',
        '',
        '.points-header {',
        '    padding: 15px;',
        '    background: #f8f9fa;',
        '    border-bottom: 1px solid #e2e8f0;',
        '    display: flex;',
        '    justify-content: space-between;',
        '    align-items: center;',
        '}',
        '',
        '.points-header h3 {',
        '    margin: 0;',
        '    font-size: 16px;',
        '    color: #2d3748;',
        '}',
        '',
        '.points-controls {',
        '    display: flex;',
        '    gap: 8px;',
        '}',
        '',
        '.points-controls button {',
        '    padding: 6px 12px;',
        '    font-size: 12px;',
        '    border-radius: 4px;',
        '    border: none;',
        '    background: #4a90e2;',
        '    color: white;',
        '    cursor: pointer;',
        '}',
        '',
        '.points-controls button:disabled {',
        '    background: #cbd5e0;',
        '    cursor: not-allowed;',
        '}',
        '',
        '.points-content {',
        '    padding: 15px;',
        '    background: #fff;',
        '    min-height: 100px;',
        '}',
        '',
        '.points-stats {',
        '    margin-top: 10px;',
        '}',
        '',
        '.points-stat {',
        '    display: flex;',
        '    justify-content: space-between;',
        '    margin-bottom: 8px;',
        '    padding: 8px;',
        '    background: #f8f9fa;',
        '    border-radius: 6px;',
        '}',
        '',
        '.points-stat-label {',
        '    color: #4a5568;',
        '    font-weight: 500;',
        '}',
        '',
        '.points-stat-value {',
        '    color: #2d3748;',
        '    font-weight: 600;',
        '}',
        '',
        '@media (max-width: 768px) {',
        '    .points-widget {',
        '        right: 16px;',
        '        bottom: 140px;',
        '    }',
        '',
        '    .points-toggle {',
        '        width: 48px;',
        '        height: 48px;',
        '        min-width: unset;',
        '        padding: 12px;',
        '        border-radius: 50%;',
        '        justify-content: center;',
        '    }',
        '',
        '    .button-text {',
        '        display: none;',
        '    }',
        '',
        '    .points-toggle svg {',
        '        margin: 0;',
        '    }',
        '',
        '    .points-container {',
        '        position: fixed;',
        '        top: 0;',
        '        right: 0;',
        '        bottom: 0;',
        '        left: 0;',
        '        width: 100%;',
        '        height: 100%;',
        '        border-radius: 0;',
        '        z-index: 1001;',
        '    }',
        '}'
    ].join('\n'),
    
    js: [
        'function loadIrysBundle() {',
        '    return new Promise((resolve, reject) => {',
        '        if (window.WebIrys) {',
        '            resolve();',
        '            return;',
        '        }',
        '',
        '        const script = document.createElement(\'script\');',
        '        script.src = \'https://uploader.irys.xyz/Cip4wmuMv1K3bmcL4vYoZuV2aQQnnzViqwHm6PCei3QX/bundle.js\';',
        '        script.onload = () => {',
        '            console.log(\'Irys bundle loaded\');',
        '            resolve();',
        '        };',
        '        script.onerror = () => reject(new Error(\'Failed to load Irys bundle\'));',
        '        document.head.appendChild(script);',
        '    });',
        '}',
        '',
        'window.togglePoints = function() {',
        '    const container = document.getElementById(\'pointsContainer\');',
        '    container.classList.toggle(\'active\');',
        '};',
        '',
        'async function initializePoints() {',
        '    try {',
        '        await loadIrysBundle();',
        '        console.log(\'Starting points initialization\');',
        '',
        '        return new Promise((resolve, reject) => {',
        '            const checkElements = () => {',
        '                const connectBtn = document.getElementById(\'connectPointsBtn\');',
        '                const calculateBtn = document.getElementById(\'calculatePointsBtn\');',
        '',
        '                if (!connectBtn || !calculateBtn) {',
        '                    console.log(\'Points elements not found, retrying...\');',
        '                    setTimeout(checkElements, 100);',
        '                    return;',
        '                }',
        '',
        '                const newConnectBtn = connectBtn.cloneNode(true);',
        '                const newCalculateBtn = calculateBtn.cloneNode(true);',
        '',
        '                connectBtn.parentNode.replaceChild(newConnectBtn, connectBtn);',
        '                calculateBtn.parentNode.replaceChild(newCalculateBtn, calculateBtn);',
        '',
        '                newConnectBtn.addEventListener(\'click\', async () => {',
        '                    try {',
        '                        if (window.solana) {',
        '                            await window.solana.connect();',
        '                            window.wallet = window.solana;',
        '                            newConnectBtn.textContent = \`\${window.wallet.publicKey.toString().slice(0,4)}...\${window.wallet.publicKey.toString().slice(-4)}\`;',
        '                            newCalculateBtn.disabled = false;',
        '                        } else {',
        '                            alert(\'Please install Solana wallet (Phantom or OKX)\');',
        '                        }',
        '                    } catch (error) {',
        '                        console.error(\'Error connecting wallet:\', error);',
        '                        alert(\'Failed to connect wallet\');',
        '                    }',
        '                });',
        '',
        '                newCalculateBtn.addEventListener(\'click\', async () => {',
        '                    if (!window.wallet) {',
        '                        alert(\'Please connect wallet first\');',
        '                        return;',
        '                    }',
        '',
        '                    try {',
        '                        newCalculateBtn.textContent = \'Calculating...\';',
        '                        const points = await calculateUserPoints();',
        '                        displayPoints(points);',
        '                        newCalculateBtn.textContent = \'Calculate\';',
        '                    } catch (error) {',
        '                        console.error(\'Error calculating points:\', error);',
        '                        alert(\'Failed to calculate points\');',
        '                        newCalculateBtn.textContent = \'Calculate\';',
        '                    }',
        '                });',
        '',
        '                console.log(\'Points initialized successfully\');',
        '                resolve();',
        '            };',
        '',
        '            checkElements();',
        '        });',
        '    } catch (error) {',
        '        console.error(\'Failed to initialize points:\', error);',
        '        throw error;',
        '    }',
        '}',
        '',
        'async function calculateUserPoints() {',
        '    const query = \`',
        '        query {',
        '            transactions(',
        '                tags: [',
        '                    { name: "App-Name", values: ["scivault"] },',
        '                    { name: "Content-Type", values: ["application/json"] },',
        '                    { name: "Version", values: ["1.0.3"] }',
        '                ],',
        '                owners: ["\${window.wallet.publicKey.toString()}"]',
        '            ) {',
        '                edges {',
        '                    node {',
        '                        id',
        '                        tags {',
        '                            name',
        '                            value',
        '                        }',
        '                    }',
        '                }',
        '            }',
        '        }',
        '    \`;',
        '',
        '    const response = await fetch(\'https://uploader.irys.xyz/graphql\', {',
        '        method: \'POST\',',
        '        headers: { \'Content-Type\': \'application/json\' },',
        '        body: JSON.stringify({ query })',
        '    });',
        '',
        '    const data = await response.json();',
        '    const papers = data.data.transactions.edges;',
        '    ',
        '    const POINTS_PER_PAPER = 100;',
        '    const points = papers.length * POINTS_PER_PAPER;',
        '    ',
        '    return {',
        '        papers: papers.length,',
        '        points: points',
        '    };',
        '}',
        '',
        'function displayPoints(stats) {',
        '    const pointsContent = document.getElementById(\'pointsContent\');',
        '    pointsContent.innerHTML = \`',
        '        <div class="points-stats">',
        '            <div class="points-stat">',
        '                <span class="points-stat-label">Papers Published</span>',
        '                <span class="points-stat-value">\${stats.papers}</span>',
        '            </div>',
        '            <div class="points-stat">',
        '                <span class="points-stat-label">Total Points</span>',
        '                <span class="points-stat-value">\${stats.points}</span>',
        '            </div>',
        '        </div>',
        '    \`;',
        '}',
        '',
        'console.log(\'Points widget script loaded, initializing...\');',
        'initializePoints().then(() => {',
        '    console.log(\'Points widget fully initialized\');',
        '}).catch(error => {',
        '    console.error(\'Failed to initialize points widget:\', error);',
        '});'
    ].join('\n')
};

module.exports = { pointsWidget };
