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

    playTone: function(freq, type, duration, vol = 0.1) {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
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
        // Card flip - low whoosh
        this.playTone(300, 'triangle', 0.1, 0.05);
    },

    success: function() {
        // Like - Major chord arpeggio
        this.init();
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, i) => { // C Major
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.05, now + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.3);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.05);
            osc.stop(now + i * 0.05 + 0.3);
        });
    },

    failure: function() {
        // Dislike - Low dissonance
        this.playTone(150, 'sawtooth', 0.2, 0.05);
        setTimeout(() => this.playTone(140, 'sawtooth', 0.2, 0.05), 50);
    },

    joker: function() {
        // Sparkle - High frequency random sine waves
        this.init();
        const now = this.ctx.currentTime;
        for(let i=0; i<10; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = 1000 + Math.random() * 2000;
            gain.gain.setValueAtTime(0.02, now + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.1);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + i * 0.05);
            osc.stop(now + i * 0.05 + 0.1);
        }
    },
    
    start: function() {
        // Game Start / Toss - Rising pitch
        this.playTone(400, 'sine', 0.3, 0.1);
        setTimeout(() => this.playTone(600, 'sine', 0.3, 0.1), 100);
    }
};
