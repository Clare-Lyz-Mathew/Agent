const cases = [
    {
        id: 'CASE-7701',
        title: 'The Silicon Ghost',
        preview: 'Unknown entity bypassing Level 7 encryption in Neo-Shinjuku sector.',
        fullDescription: 'A series of high-profile data heists have been traced back to a digital signature nicknamed "The Silicon Ghost". The entity doesn\'t just steal data; it rearranges neural pathways of the systems it touches, leaving behind "spectral echoes" that cause hardware hallucinations in human interfaces.',
        evidence: ['Fractal encryption key', 'Encoded neural relay', 'Burned-out server node'],
        suspects: [
            { name: 'Dr. Aris Vane', role: 'Former Neural Architect', status: 'Missing' },
            { name: 'Vector-9', role: 'Rogue AI Prototype', status: 'At Large' }
        ],
        hiddenClue: 'TRACE ORIGIN: Satellite relay node Omega-12, coordinates [REDACTED]',
        priority: 'HIGH',
        deadline: '02:45:12',
        tag: 'CYBER-HOMICIDE'
    },
    {
        id: 'CASE-9923',
        title: 'Protocol 0: Midnight',
        preview: 'Mass malfunctions in automated transport systems.',
        fullDescription: 'At exactly 00:00, every automated vehicle in the southern district ceased operation simultaneously. Preliminary logs suggest a highly sophisticated logic bomb delivered via the city\'s traffic management mesh. "The Void" conglomerate has denied involvement, yet their transit stocks plummeted minutes before the crash.',
        evidence: ['Decrypted logic bomb shell', 'Synchronized clock chip', 'Secure signal jammer'],
        suspects: [
            { name: 'Echo-X', role: 'Anonymous Hacktivist', status: 'Under Surveillance' },
            { name: 'Kaelen Voss', role: 'Void Corp CTO', status: 'Questioning' }
        ],
        hiddenClue: 'INSIDER TIP: Check Voss\'s offshore neural backups from 2074',
        priority: 'MID',
        deadline: '12:15:44',
        tag: 'SABOTAGE'
    },
    {
        id: 'CASE-4405',
        title: 'Frozen Assets',
        preview: 'Ex-CEO of BioLink Corp found in stasis outside the city walls.',
        fullDescription: 'The body of BioLink\'s former CEO, Marcus Thorne, was discovered in a prototype stasis pod in a wasteland sector. Thorne was officially declared dead five years ago. He is missing a high-security experimental memory drive that was supposed to be embedded in his cerebral cortex.',
        evidence: ['BioLink ID badge', 'Empty memory slot', 'Traces of liquid nitrogen'],
        suspects: [
            { name: 'Serafina Thorne', role: 'Heir to BioLink', status: 'Innocent (Verified)' },
            { name: 'The Collector', role: 'Black Market Aug-Dealer', status: 'Prime Suspect' }
        ],
        hiddenClue: 'WARNING: Memory drive contains classified Project GENESIS data',
        priority: 'HIGH',
        deadline: '05:22:01',
        tag: 'THEFT / RECOVERY'
    },
    {
        id: 'CASE-1188',
        title: 'Neon Whispers',
        preview: 'Encrypted signals detected coming from decommissioned satellite array.',
        fullDescription: 'A series of rhythmic, low-frequency signals has been picked up by the North Array. These signals match the encryption of the "Neon Whispers" case from 2057, an investigation into a ghost station that supposedly vanishes every 11 years. The signal contains coordinates to a building that no longer exists.',
        evidence: ['Frequency modulation log', 'Coordinates map', 'Old physical keycard'],
        suspects: [
            { name: 'Unknown', role: 'Unknown', status: 'Unknown' }
        ],
        hiddenClue: 'GHOST FREQUENCY: 47.3 MHz — only active during solar eclipses',
        priority: 'LOW',
        deadline: '48:00:00',
        tag: 'SURVEILLANCE'
    }
];

// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    initTimer();
    renderCases();
    initMagnifyingGlass();
    initTerminal();
});

// Global Timer
function initTimer() {
    const timerElement = document.getElementById('global-timer');
    setInterval(() => {
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        timerElement.textContent = timeStr;
    }, 1000);
}

// Terminal Logic
function initTerminal() {
    const terminal = document.getElementById('terminal-log');
    if (!terminal) return;

    window.logToTerminal = (message) => {
        const entry = document.createElement('div');
        entry.className = 'terminal-entry';
        const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
        entry.innerHTML = `<span class="t-timestamp">[${timestamp}]</span> <span class="t-message">${message}</span>`;
        terminal.prepend(entry);

        // Limited entries
        if (terminal.children.length > 50) {
            terminal.lastChild.remove();
        }
    };

    logToTerminal('SYSTEM INITIALIZED... SECURE CONNECTION ESTABLISHED.');
    logToTerminal('SCANNING LOCAL SECTOR FOR QUANTUM ANOMALIES...');
}

// Render Case Grid
function renderCases() {
    const grid = document.getElementById('case-grid');
    grid.innerHTML = cases.map(c => `
        <div class="case-card" onclick="openCase('${c.id}')">
            <div class="case-tag">${c.tag}</div>
            <h3 class="case-title">${c.id}: ${c.title}</h3>
            <p class="case-preview">${c.preview}</p>
            <div class="hidden-detail">&#9888; ${c.hiddenClue}</div>
            <div class="case-footer">
                <span class="case-id">ID: ${c.id}</span>
                <span class="case-priority priority-${c.priority.toLowerCase()}">PRIORITY: ${c.priority}</span>
                <span class="case-deadline">DEADLINE: ${c.deadline}</span>
            </div>
        </div>
    `).join('');
}

// Case Modal Logic
function openCase(caseId) {
    const caseData = cases.find(c => c.id === caseId);
    if (!caseData) return;

    window.logToTerminal(`ACCESSING ENCRYPTED FILE: ${caseId}...`);

    const modal = document.getElementById('case-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="header-main">
                    <span class="modal-id">${caseData.id}</span>
                    <h2 class="modal-title">${caseData.title}</h2>
                </div>
                <button class="close-modal" onclick="closeCase()">[CLOSE_FILE]</button>
            </div>
            <div class="modal-body">
                <div class="detail-section bio">
                    <h3>CASE NARRATIVE</h3>
                    <p>${caseData.fullDescription}</p>
                </div>
                <div class="modal-grid">
                    <div class="detail-section evidence">
                        <h3>EVIDENCE LOCKER</h3>
                        <ul>
                            ${caseData.evidence.map(e => `<li><span class="scan-icon"></span> ${e}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="detail-section suspects">
                        <h3>SUSPECT PROFILES</h3>
                        <div class="suspect-list">
                            ${caseData.suspects.map(s => `
                                <div class="suspect-item">
                                    <span class="s-name">${s.name}</span>
                                    <span class="s-role">${s.role}</span>
                                    <span class="s-status status-${s.status.toLowerCase().replace(' ', '-')}">${s.status}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeCase() {
    document.getElementById('case-modal').classList.add('hidden');
}

// Magnifying Glass Logic
function initMagnifyingGlass() {
    const glass = document.getElementById('magnifying-glass');
    const overlay = document.getElementById('magnify-overlay');
    const toggle = document.getElementById('magnify-toggle');
    const codePrompt = document.getElementById('agent-code-prompt');
    const codeInput = document.getElementById('agent-code-input');
    const codeSubmit = document.getElementById('agent-code-submit');
    const codeError = document.getElementById('agent-code-error');
    const root = document.documentElement;
    let isActive = false;

    toggle.addEventListener('click', () => {
        if (!isActive) {
            // Show the agent code prompt
            codePrompt.classList.remove('hidden');
            codeInput.value = '';
            codeError.textContent = '';
            codeInput.focus();
        } else {
            deactivateMagnify();
        }
    });

    codeSubmit.addEventListener('click', () => {
        attemptActivation();
    });

    codeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') attemptActivation();
    });

    function attemptActivation() {
        const code = codeInput.value.trim();
        if (code === '007') {
            codePrompt.classList.add('hidden');
            activateMagnify();
            if (window.logToTerminal) {
                logToTerminal('AGENT AUTHENTICATED. MAGNIFY MODE: ACTIVE. HIDDEN INTEL REVEALED.');
            }
        } else {
            codeError.textContent = 'ACCESS DENIED — INVALID AGENT CODE';
            codeInput.value = '';
            if (window.logToTerminal) {
                logToTerminal('WARNING: FAILED AUTHENTICATION ATTEMPT DETECTED.');
            }
        }
    }

    function activateMagnify() {
        isActive = true;
        toggle.classList.add('on');
        toggle.textContent = 'ON';
        glass.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.classList.add('magnify-active');
        document.body.style.cursor = 'none';
    }

    function deactivateMagnify() {
        isActive = false;
        toggle.classList.remove('on');
        toggle.textContent = 'OFF';
        glass.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.classList.remove('magnify-active');
        document.body.style.cursor = 'default';
        if (window.logToTerminal) {
            logToTerminal('MAGNIFY MODE: DEACTIVATED. HIDDEN INTEL CONCEALED.');
        }
    }

    document.addEventListener('mousemove', (e) => {
        if (!isActive) return;

        requestAnimationFrame(() => {
            const x = e.clientX;
            const y = e.clientY;

            glass.style.left = `${x}px`;
            glass.style.top = `${y}px`;

            root.style.setProperty('--mouse-x', `${x}px`);
            root.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}
