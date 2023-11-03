import Creature, * as creature from './creature';
function setup() {
    createCanvas(480, 480);
    let creatures = [new Creature()];
}

function draw() {
    background (000);
    for (let i = 0; i < creatures.length; i++){
        let c = creatures[i];
        c.update();
        c.display();
    }
}