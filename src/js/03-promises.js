const submitBtn = document.querySelector('button')
const form = document.querySelector('.form')


form.addEventListener('submit', handleSubmitBtn);



function handleSubmitBtn(e) {
  e.preventDefault();
  let delay = parseInt(e.target.elements.delay.value);
  const step = parseInt(e.target.elements.step.value);
  const amount = parseInt(e.target.elements.amount.value);
  let position = 0;
  for (let i = 0; i < amount; i +=1) {
  createPromise(position, delay + position * step) .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  position += 1;
  }
  event.target.reset();
  }
  
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    // const time = delay + position * step
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
  })
}

 

