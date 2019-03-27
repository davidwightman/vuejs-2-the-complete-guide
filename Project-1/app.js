function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

new Vue({
    el: '#app',
    data: {
        playingGame: false,
        you: 100,
        monster: 100
    },
    methods: {
        startGame: function(event){
            this.playingGame = !this.playingGame;
        },
        giveUp: function(event){
            this.you = 100;
            this.monster = 100;
            this.playingGame = !this.playingGame;
        },
        attack: function(event){
           
            let youInjured = getRandomInt(10);
            let monsterInjured = getRandomInt(20);
            this.you = this.you - youInjured;
            this.monster = this.monster - monsterInjured;
        },
        specialAttack: function(event){
            let youInjured = getRandomInt(10);
            let monsterInjured = getRandomInt(40);
            this.you = this.you - youInjured;
            this.monster = this.monster - monsterInjured;
        },
        heal: function(event){
            let healed = getRandomInt(20);
            this.you = this.you + healed;
        }
    },
    watch: {
        you: function(){
            if (this.you <= 0){
                alert('the monster defeated you')
                this.giveup()
            }
        },
        monster: function(){
            if (this.monster <= 0){
                alert('you win! you beat the monster')
                this.giveUp()
            }
        }
    }

})