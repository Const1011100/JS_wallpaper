// ================================================================================================
// Objects ========================================================================================
const object = document.querySelector('.object');
const objects = document.querySelector('.objects');
const objectKeys = document.querySelector('.object-keys');
const objectValues = document.querySelector('.object-values');
const keysInfo = document.querySelector('.keys__info');
const valuesInfo = document.querySelector('.values__info');
// Arrays =========================================================================================
const array = document.querySelector('.array');
const arrays = document.querySelector('.arrays');
const arrayPush = document.querySelector('.array-push');
const arrayPop = document.querySelector('.array-pop');
const arrayShift = document.querySelector('.array-shift');
const arrayUnshift = document.querySelector('.array-unshift');
const pushInfo = document.querySelector('.push__info');
const popInfo = document.querySelector('.pop__info');
const shiftInfo = document.querySelector('.shift__info');
const unshiftInfo = document.querySelector('.unshift__info');
// ================================================================================================
object.addEventListener('click', (event) => {
    arrays.classList.remove('visible');
    objects.classList.toggle('visible');
})
array.addEventListener('click', (event) => {
    objects.classList.remove('visible');
    arrays.classList.toggle('visible');
})

// ================================================================================================
objectValues.addEventListener('click', (event) => {
    valuesInfo.classList.toggle('visible');
})
objectKeys.addEventListener('click', (event) => {
    keysInfo.classList.toggle('visible');
})

// ================================================================================================
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

// ================================================================================================