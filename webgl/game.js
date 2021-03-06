var renderer = new PIXI.WebGLRenderer(800, 600);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var megaTexture = PIXI.Texture.fromImage('megaman.png', true);
var megaman = new PIXI.Sprite(megaTexture);

megaman.position.x = 300;
megaman.position.y = 300;

megaman.scale.x = 0.5;
megaman.scale.y = 0.5;


stage.addChild(megaman);

animate();

function animate() {
	requestAnimationFrame(animate);

	megaman.rotation += 0.05;

	renderer.render(stage);
}