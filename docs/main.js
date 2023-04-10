const maxX = 15;
const maxY = 15;

const card = document.getElementById('card');

card.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    // console.log('x:', x, 'y:', y);

    const cardRect = card.getBoundingClientRect();
    // console.log('cardRect:', cardRect);
    
    const halfHeight = cardRect.height / 2;
    const halfWidth = cardRect.width / 2;    

    const rotationX = ((y - halfHeight) / halfHeight) * maxY;
    const rotationY = ((x - halfWidth) / halfWidth) * maxX;
    console.log('x:', x, 'y:', y, 'rotationX:', rotationX, 'rotationY:', rotationY);

    card.style.transition = `none`;
    card.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) scale(1.2)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transition = `transform 0.5s ease-in-out`;
    card.style.transform = `rotate(0)`;
});