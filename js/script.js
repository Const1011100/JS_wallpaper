// Objects ========================================================================================
const mainObject = document.querySelector('.main__object');

const objects = document.querySelector('.objects');
const objectKeys = document.querySelector('.object-keys');
const objectValues = document.querySelector('.object-values');
const keysInfo = document.querySelector('.keys__info');
const valuesInfo = document.querySelector('.values__info');
// Arrays =========================================================================================
const mainArray = document.querySelector('.main__array');

const arrays = document.querySelector('.arrays');
const arrayPush = document.querySelector('.array-push');
const arrayPop = document.querySelector('.array-pop');
const arrayShift = document.querySelector('.array-shift');
const arrayUnshift = document.querySelector('.array-unshift');
const pushInfo = document.querySelector('.push__info');
const popInfo = document.querySelector('.pop__info');
const shiftInfo = document.querySelector('.shift__info');
const unshiftInfo = document.querySelector('.unshift__info');
// Main Fu. =======================================================================================
mainObject.addEventListener('click', (event) => {
    arrays.classList.remove('visible');
    objects.classList.toggle('visible');
})
mainArray.addEventListener('click', (event) => {
    objects.classList.remove('visible');
    arrays.classList.toggle('visible');
})
// Object Fu. =====================================================================================
objectValues.addEventListener('click', (event) => {
    valuesInfo.classList.toggle('visible');
})
objectKeys.addEventListener('click', (event) => {
    keysInfo.classList.toggle('visible');
})
// Array Fu. ======================================================================================
arrayPush.addEventListener('click', (event) => {
    pushInfo.classList.toggle('visible');
})
arrayPop.addEventListener('click', (event) => {
    popInfo.classList.toggle('visible');
})
arrayShift.addEventListener('click', (event) => {
    shiftInfo.classList.toggle('visible');
})
arrayUnshift.addEventListener('click', (event) => {
    unshiftInfo.classList.toggle('visible');
})
// Example code ===================================================================================
const examples = document.querySelectorAll('.example-code');

const styles = {
    const: '<span style="color: #03c5fa;">const</span>',
    lemon: '<span style="color: #00ef1c;">lemon</span>',
    banana: '<span style="color: yellow;">banana</span>',
    'push()': '<span style="color: red;">push()</span>',
}

/*
examples.forEach(example => {
    if (example.textContent.match(/lemon/g)) {
        example.classList.add('test');
        const content = example.textContent;
        //const newContent = content.replace(/const/gi, '<span class = "red">let</span>');
        // const newContent = content.replace(/const/gi, '<span style="color: #03c5fa;">const</span>');
        // let newContent;
        // for (key in styles) {
        //     newContent = content.replace(/[key]/gi, 'styles.key');
        // }
        Object.keys(styles).forEach(keyword => {
            // Создаем регулярное выражение для поиска слова с учетом регистра
            const regex = new RegExp(`/${keyword}/gi`);
            
            // Заменяем все вхождения слова на значение из объекта styles
            content = content.replace(regex, styles[keyword]);
        });
        
        example.innerHTML = content;
    }
})
*/


// Получаем все элементы с классом '.example-code'
//const examples = document.querySelectorAll('.example-code');

// Функция для поиска и перекраски слов "const" и "lemon"
function highlightConstAndLemon(element) {
    // Получаем текстовое содержимое элемента
    let text = element.textContent;
    
    // Проходимся по ключам объекта styles
    Object.keys(styles).forEach(keyword => {
        // Создаем регулярное выражение для поиска слова с учетом регистра
        const regex = new RegExp(`${keyword}`, 'g');
        
        // Заменяем все вхождения слова на значение из объекта styles
        text = text.replace(regex, styles[keyword]);
    });
    
    // Заменяем содержимое элемента на перекрашенный текст
    element.innerHTML = text;
}

// Проходимся по всем элементам и применяем функцию highlightConstAndLemon
examples.forEach(highlightConstAndLemon);


//Функція копіювання синтаксису метода в буфер.
function copyText() {
    const textToCopy = document.getElementById('syntax').innerText;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            document.getElementById('syntax').style.color = '#7f848e';
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

const syntax = document.getElementById('syntax');
syntax.addEventListener('click', copyText);
/// ================================================================================================
// const colors = ['red', 'green', 'blue'];
// colors.push('yellow', 'black');
// console.log(colors); // ['red', 'green', 'blue', 'yellow', 'black']
