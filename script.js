let speed = 0;
let steeringAngle = 0;
const acceleration = 0.5;
const braking = 1;
const maxSpeed = 120;

const car = document.getElementById('car');
const speedometer = document.getElementById('speedometer');
const indicators = document.getElementById('indicators');
const accelerateBtn = document.getElementById('accelerate');
const brakeBtn = document.getElementById('brake');
const steeringInput = document.getElementById('steering');

accelerateBtn.addEventListener('click', () => {
    if (speed < maxSpeed) speed += acceleration;
});

brakeBtn.addEventListener('click', () => {
    if (speed > 0) speed -= braking;
});

steeringInput.addEventListener('input', (e) => {
    steeringAngle = parseFloat(e.target.value);
    car.style.transform = `translateX(-50%) rotate(${steeringAngle}deg)`;
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w') speed = Math.min(speed + acceleration, maxSpeed);
    if (e.key === 'ArrowDown' || e.key === 's') speed = Math.max(speed - braking, 0);
    if (e.key === 'ArrowLeft' || e.key === 'a') steeringAngle = Math.max(steeringAngle - 5, -45);
    if (e.key === 'ArrowRight' || e.key === 'd') steeringAngle = Math.min(steeringAngle + 5, 45);
    car.style.transform = `translateX(-50%) rotate(${steeringAngle}deg)`;
});

function animate() {
    speedometer.textContent = `Speed: ${speed.toFixed(0)} km/h`;
    requestAnimationFrame(animate);
}

animate();