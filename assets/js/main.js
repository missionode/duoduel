// DuoDuel Shared Logic

const DuoDuel = {
    // Utility to get player names
    getNames: () => {
        return {
            his: localStorage.getItem('hisName') || 'Him',
            her: localStorage.getItem('herName') || 'Her'
        };
    },

    // Utility to clear session
    clearSession: () => {
        localStorage.clear();
        window.location.href = 'index.html';
    },

    // Check if a level is unlocked
    isUnlocked: (levelId) => {
        if (levelId === 'acquaintance') return true;
        return localStorage.getItem('allUnlocked') === 'true';
    }
};

console.log('DuoDuel Engine Initialized');
