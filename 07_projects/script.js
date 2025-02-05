

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);

buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        /* if (e.target.id === 'grey') {
          console.log(e.target.id);
          body.style.backgroundColor = e.target.id
         } else if (e.target.id === 'white') {
          console.log(e.target.id);
          body.style.backgroundColor = e.target.id
         } else if (e.target.id === 'purple') {
          console.log(e.target.id);
          body.style.backgroundColor = e.target.id
         } else if (e.target.id === 'plum') {
          console.log(e.target.id);
          body.style.backgroundColor = e.target.id
         } */

        switch (e.target.id) {
            case 'violet':
                body.style.backgroundColor = e.target.id;
                break;
            case 'indigo':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
        }
    })
});