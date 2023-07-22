let ul = document.getElementById('onadd');
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
let section5 = document.getElementById('section5');
let section6 = document.getElementById('section6');

let li1 = document.getElementById('btn-1');
let li2 = document.getElementById('btn-2');
let li3 = document.getElementById('btn-3');
let li4 = document.getElementById('btn-4');
let li5 = document.getElementById('btn-5');
let li6 = document.getElementById('btn-6');

let li1s = 'translateX(-32px) translateY(-105px)'
let li2s = 'translateX(-170px) translateY(-20px)'
let li3s = 'translateX(-170px) translateY(115px)'
let li4s = 'translateX(-32px) translateY(202px)'
let li5s = 'translateX(105px) translateY(120px)'
let li6s = 'translateX(105px) translateY(-21px)'

section1.style.display = 'block';

const autoplay = () => {
    setTimeout(() => {
        li1.style.transform = li1s;
        li2.style.transform = li2s;
        li3.style.transform = li3s;
        li4.style.transform = li4s;
        li5.style.transform = li5s;
        li6.style.transform = li6s;

        section1.style.display = 'block';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    }, 2000);
    setTimeout(() => {
        li2.style.transform = li1s;
        li3.style.transform = li2s;
        li4.style.transform = li3s;
        li5.style.transform = li4s;
        li6.style.transform = li5s;
        li1.style.transform = li6s;

        section2.style.display = 'block';
        section1.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    }, 4000);
    setTimeout(() => {
        li3.style.transform = li1s;
        li4.style.transform = li2s;
        li5.style.transform = li3s;
        li6.style.transform = li4s;
        li1.style.transform = li5s;
        li2.style.transform = li6s;

        section3.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    }, 6000);
    setTimeout(() => {
        li4.style.transform = li1s;
        li5.style.transform = li2s;
        li6.style.transform = li3s;
        li1.style.transform = li4s;
        li2.style.transform = li5s;
        li3.style.transform = li6s;

        section4.style.display = 'block';
        section1.style.display = 'none';
        section3.style.display = 'none';
        section2.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    }, 8000);
    setTimeout(() => {
        li5.style.transform = li1s;
        li6.style.transform = li2s;
        li1.style.transform = li3s;
        li2.style.transform = li4s;
        li3.style.transform = li5s;
        li4.style.transform = li6s;

        section5.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section6.style.display = 'none';
    }, 10000);
    setTimeout(() => {
        li6.style.transform = li1s;
        li1.style.transform = li2s;
        li2.style.transform = li3s;
        li3.style.transform = li4s;
        li4.style.transform = li5s;
        li5.style.transform = li6s;

        section6.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
    }, 12000);
}

const create = () => {

    li1.addEventListener('click', () => {
        li1.style.transform = li1s;
        li2.style.transform = li2s;
        li3.style.transform = li3s;
        li4.style.transform = li4s;
        li5.style.transform = li5s;
        li6.style.transform = li6s;

        section1.style.display = 'block';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    })
    li2.addEventListener('click', () => {
        li2.style.transform = li1s;
        li3.style.transform = li2s;
        li4.style.transform = li3s;
        li5.style.transform = li4s;
        li6.style.transform = li5s;
        li1.style.transform = li6s;

        section2.style.display = 'block';
        section1.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    })
    li3.addEventListener('click', () => {
        li3.style.transform = li1s;
        li4.style.transform = li2s;
        li5.style.transform = li3s;
        li6.style.transform = li4s;
        li1.style.transform = li5s;
        li2.style.transform = li6s;

        section3.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    })
    li4.addEventListener('click', () => {
        li4.style.transform = li1s;
        li5.style.transform = li2s;
        li6.style.transform = li3s;
        li1.style.transform = li4s;
        li2.style.transform = li5s;
        li3.style.transform = li6s;

        section4.style.display = 'block';
        section1.style.display = 'none';
        section3.style.display = 'none';
        section2.style.display = 'none';
        section5.style.display = 'none';
        section6.style.display = 'none';
    })
    li5.addEventListener('click', () => {
        li5.style.transform = li1s;
        li6.style.transform = li2s;
        li1.style.transform = li3s;
        li2.style.transform = li4s;
        li3.style.transform = li5s;
        li4.style.transform = li6s;

        section5.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section6.style.display = 'none';
    })
    li6.addEventListener('click', () => {
        li6.style.transform = li1s;
        li1.style.transform = li2s;
        li2.style.transform = li3s;
        li3.style.transform = li4s;
        li4.style.transform = li5s;
        li5.style.transform = li6s;

        section6.style.display = 'block';
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'none';
        section4.style.display = 'none';
        section5.style.display = 'none';
    })
}

let i = 0;
do {
    autoplay()
} while (i >= 5)

setInterval(() => {
    autoplay()
}, 12000);

create()