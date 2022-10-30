// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');

button1.addEventListener('pointerenter', (e) => {
    button1.style = (
         'background-color: var(--color-brand-bg-grey) border: var(--color-brand-button) solid;');
    // border: var(--color-brand-button) solid;
    // color: var(--color-brand-hero-black-text);
    // ');
    button2.style.border = '5px dotted red';
} )

button1.addEventListener('pointerleave', (e) => {
    button1.styl
    button2.style.border = '2px dotted red';
})

// to be continued...