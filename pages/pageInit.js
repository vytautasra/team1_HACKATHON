exports.PageInitialization = class PageInitialization {
    constructor(page) {
        this.page = page;
    }

  
    async goto_test2() {
        await this.page.goto('https://hackathon-space-invaders.herokuapp.com/'); 
    }
    async goto_test31() {
        await this.page.goto('https://codepen.io/gabrielcarol/pen/rGeEbY'); 
    }
    async goto_test32() {
        await this.page.goto('https://codepen.io/amdsouza92/pen/xdooWa'); 
    }
    async goto_test33() {
        await this.page.goto('https://codepen.io/sandovalgus/pen/rwBLwy'); 
    }
    async goto_test5() {
        await this.page.goto('http://hackathon-maze.herokuapp.com/static/'); 
    }
    async goto_test6() {
        await this.page.goto('https://www.gamesforthebrain.com/game/flag/'); 
    }
   

}