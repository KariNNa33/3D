const Panorama1 = new PANOLENS.ImagePanorama('assets/1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/3.1.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/4.1jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/5.1.jpg');
const Panorama6 = new PANOLENS.ImagePanorama('assets/3.2.jpg');
const Panorama7 = new PANOLENS.ImagePanorama('assets/4.2.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
// Связь в коридоре
new THREE.Vector3(1630, 0, -660),
// Связь коридора_2 и комнаты переговоров
new THREE.Vector3(1860, 0, 620),
// Связь коридора_1 и комнаты переговоров
new THREE.Vector3(1600, 0, 400),
new THREE.Vector3(-1800, 0, 400),
// Связь переговорных
new THREE.Vector3(1600, 0, 0),
new THREE.Vector3(1800, 0, 0),
// Связь коридора_1 и гостинной_1
new THREE.Vector3(-800, 0, -2400),
new THREE.Vector3(0, 0, 2300),
// Связь гостинной
new THREE.Vector3(800, 0, 0),
new THREE.Vector3(-800, 0, 0),
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});

Panorama1.link(Panorama2, SpotPositions[0]);
// 1 путь
Panorama2.link(Panorama3, SpotPositions[1]);
Panorama3.link(Panorama4, SpotPositions[2]);
Panorama4.link(Panorama5, SpotPositions[3]);
// 2 путь
Panorama2.link(Panorama6, SpotPositions[4]);
Panorama6.link(Panorama7, SpotPositions[5]);

viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6, Panorama7);
