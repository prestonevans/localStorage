const bidsStorageKey = 'arrayOfBids';
const arrayOfBids = retrieve() || [];
const btn = document.querySelectorAll('button');

function render() {
    const bids = document.querySelector('.bids');
    bids.innerHTML = '';
    for(let bid of arrayOfBids) {
        const p = document.createElement('p');
        p.innerText = `$ ${bid}`;
        bids.prepend(p);
    }
}
function save () {
    localStorage.setItem(bidsStorageKey,JSON.stringify(arrayOfBids));
}
function retrieve() {
    return JSON.parse(localStorage.getItem(bidsStorageKey));
}
for(let i = 1; i <= btn.length; i++) {
    btn[i - 1].addEventListener('click', () => {
        const input = document.querySelector(`input.bid${i}`);
        if(!input.value) {
            alert('enter something valid');
            return;
        } else if (parseInt(input.value) <= arrayOfBids[arrayOfBids.length - 1]) {
            alert('You have been out bid...');
            input.value = null;
            return;
        }
        arrayOfBids.push(parseInt(input.value));
        render();
        save();
        input.value = null;
    })
}
render();
save();
