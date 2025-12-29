const SoundFX = {
    ctx: null,

    init: function() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },

    playTone: function(freq, type, duration, vol = 0.5) {
        console.log(`Playing tone: ${freq}Hz, ${type}`);
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    },

    click: function() {
        // Subtle click - high pitch sine
        this.playTone(800, 'sine', 0.05, 0.05);
    },

    flip: function() {
        // Card flip - clearer high-pitch whoosh
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine'; // Sine cuts through better than triangle
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.4);
        
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.4);
    },

    start: function() {
        // Coin Spin - 3 seconds of rapid ticking + final ding
        this.init();
        const now = this.ctx.currentTime;
        const duration = 3.0;
        
        // Spinning sound (rapid clicks)
        for (let i = 0; i < 30; i++) {
            const time = now + (i * 0.1);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = 800 + (Math.random() * 200);
            gain.gain.setValueAtTime(0.05, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(time);
            osc.stop(time + 0.05);
        }

        // Landing sound (Ding)
        setTimeout(() => {
            this.playTone(1200, 'sine', 1.0, 0.3);
        }, 3000);
    },

    success: function() {
        // Positive chime (Major chord arpeggio: C5, E5, G5)
        // Using setTimeout to stagger the notes
        this.playTone(523.25, 'sine', 0.3, 0.2); 
        setTimeout(() => this.playTone(659.25, 'sine', 0.3, 0.2), 100); 
        setTimeout(() => this.playTone(783.99, 'sine', 0.4, 0.2), 200); 
    },

    failure: function() {
        // Negative buzz/descending
        this.playTone(150, 'sawtooth', 0.4, 0.15);
        setTimeout(() => this.playTone(100, 'sawtooth', 0.4, 0.15), 150);
    },

    joker: function() {
        // Magical shimmer (Ascending sequence)
        this.init();
        for(let i=0; i<5; i++) {
            setTimeout(() => {
                this.playTone(1000 + (i*200), 'sine', 0.3, 0.1);
            }, i * 50);
        }
    }
};
