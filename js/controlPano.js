const Panorama1 = new PANOLENS.ImagePanorama('assets/Panorama_1.jpg');
const Panorama2 = new PANOLENS.ImagePanorama('assets/Panorama_2.jpg');
const Panorama3 = new PANOLENS.ImagePanorama('assets/Panorama_3.jpg');
const Panorama4 = new PANOLENS.ImagePanorama('assets/Panorama_4.jpg');
const Panorama5 = new PANOLENS.ImagePanorama('assets/Panorama_5.jpg');
const Panorama6 = new PANOLENS.ImagePanorama('assets/Panorama_6.jpg');
const Panorama7 = new PANOLENS.ImagePanorama('assets/Panorama_7.jpg');
let imageContainer = document.querySelector('.panorama__container');

let SpotPositions = [
    // Связь в коридоре
    new THREE.Vector3(0, 0, 0)
]

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: true,
    autoRotate: true,
    autoRotateSpeed: 0.4,
    cameraFov: 100
});

Panorama1.link(Panorama2, SpotPositions[0]);

Panorama2.link(Panorama3, SpotPositions[1]);

Panorama3.link(Panorama4, SpotPositions[2]);

Panorama4.link(Panorama5, SpotPositions[3]);

Panorama5.link(Panorama6, SpotPositions[4]);

Panorama6.link(Panorama7, SpotPositions[5]);


viewer.add(Panorama1, Panorama2, Panorama3, Panorama4, Panorama5, Panorama6, Panorama7);
