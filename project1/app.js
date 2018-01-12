new Vue({
    el: "#app",
    data: {
        showControls: true,
        showLog: false,
        player: {
            health: 100,
            damageTaken: []
        },
        monster: {
            health: 100,
            damageTaken: []
        }
    },
    methods: {
        start: function() {
            this.showControls = !this.showControls;
            this.showLog = false;

            this.player.health = 100;
            this.player.damageTaken = [];

            this.monster.health = 100;
            this.monster.damageTaken = [];
        },

        playerHit: function(damage) {
            playerDamage = Math.floor(Math.random() * damage);
            this.player.health -= playerDamage;
            this.player.damageTaken.push("MONSTER HITS PLAYER FOR " + playerDamage);
        },

        monsterHit: function(damage) {
            monsterDamage = Math.floor(Math.random() * damage);
            this.monster.health -= monsterDamage;
            this.monster.damageTaken.push("PLAYER HITS MONSTER FOR " + monsterDamage);
        },

        playerHeal: function() {
            playerHealth = Math.floor(Math.random() * 10);
            this.player.health += playerHealth;
            this.player.damageTaken.push("PLAYER HEALS HIMSELF FOR " + playerHealth);
        },

        attack: function() {
            this.showLog = true;
            this.playerHit(10);
            this.monsterHit(10);
        },

        specialAttack: function() {
            this.showLog = true;
            this.playerHit(20);
            this.monsterHit(20);
        },

        heal: function() {
            this.showLog = true;
            this.playerHit(10);
            this.playerHeal();  
        },
        
        quit: function() {
            this.showControls = true;
        }
    }
});