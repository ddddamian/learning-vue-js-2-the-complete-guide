new Vue({
    el: "#app",
    data: {
        showControls: true,
        showLog: false,
        playerHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        start: function() {
            this.showControls = !this.showControls;
            this.showLog = false;

            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        playerHit: function(damage) {
            var playerDamage = Math.floor(Math.random() * damage);
            this.playerHealth -= playerDamage;
            this.turns.unshift({
                isPlayer: false,
                text: "MONSTER HITS PLAYER FOR " + playerDamage
            })
        },

        monsterHit: function(damage) {
            var monsterDamage = Math.floor(Math.random() * damage);
            this.monsterHealth -= monsterDamage;
            this.turns.unshift({
                isPlayer: true,
                text: "PLAYER HITS MONSTER FOR " + monsterDamage
            })
        },

        playerHeal: function() {
            var playerHealthBoost = Math.floor(Math.random() * 10);
            this.playerHealth += playerHealthBoost;
            this.turns.unshift({
                isPlayer: true,
                text: "PLAYER HEALS HIMSELF FOR " + playerHealthBoost
            })
        },

        attack: function() {
            this.showLog = true;

            this.monsterHit(10);
            if(this.monsterHealth <= 0){
                alert("You won!");
                this.showControls = true;
                start();
            }

            this.playerHit(10);
            if(this.playerHealth <= 0){
                alert("You lost!");
                start();
            }
        },

        specialAttack: function() {
            this.showLog = true;
            this.monsterHit(20);
            this.playerHit(20);
        },

        heal: function() {
            this.showLog = true;
            if(this.playerHealth <= 90) {
                this.playerHeal(); 
            }

            this.playerHit(10);
        },

        quit: function() {
            this.showControls = true;
        }
    }
});
