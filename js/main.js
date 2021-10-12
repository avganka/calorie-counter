import '../css/style.css';
import '../css/normalize.css';

const inputs = document.querySelectorAll('.input input'),
    subminBtn = document.querySelector('.form__submit-button'),
    resetBtn = document.querySelector('.form__reset-button'),
    resultBlock = document.querySelector('.counter__result'),
    holding = resultBlock.querySelector('#calories-norm'),
    gain = resultBlock.querySelector('#calories-minimal'),
    decline = resultBlock.querySelector('#calories-maximal'),
    genderRadio = document.querySelectorAll('[name="gender"]'),
    activityRadio = document.querySelectorAll('[name="activity"]');



subminBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resultBlock.classList.remove('counter__result--hidden');

    let ratio = (10 * +inputs[2].value) + (6.25 * +inputs[1].value) - (5 * +inputs[0].value);

    if (genderRadio[0].checked) {
        console.log('male')
        ratio = ratio + 5;
    } else {
        ratio = ratio - 161;
        console.log('female')

    }
    activityRadio.forEach(radio => {
        if (radio.checked) {
            ratio = ratio * +radio.value;
        }
    });

    holding.textContent = Math.floor(ratio);
    gain.textContent = Math.floor(ratio * 1.15);
    decline.textContent = Math.floor(ratio * 0.85);
});

resetBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = 0;
    });
    subminBtn.setAttribute("disabled", "");
    resetBtn.setAttribute("disabled", "");
    activityRadio[0].checked = true;
    genderRadio[0].checked = true;
    resultBlock.classList.add('counter__result--hidden');
});

function btnsActivate() {
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (inputs[0].value != 0 && inputs[1].value != 0 && inputs[2].value != 0) {
                subminBtn.removeAttribute("disabled");
            } else {
                subminBtn.setAttribute("disabled", "");
            }

            if (inputs[0].value != 0 || inputs[1].value != 0 || inputs[2].value != 0) {
                resetBtn.removeAttribute("disabled");
            } else {
                resetBtn.setAttribute("disabled", "");
            }
        });
    });
}
btnsActivate();