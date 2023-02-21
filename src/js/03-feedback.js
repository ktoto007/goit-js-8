var _ = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');

function fillingOutFormFromLocalStorage() {
  let parsedValues;
  try {
    parsedValues = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(parsedValues);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  if (parsedValues !== null) {
    if (parsedValues.email != '' || parsedValues.message != '') {
      feedbackForm.email.value = parsedValues.email;
      feedbackForm.message.value = parsedValues.message;
    }
  }
}

document.addEventListener('DOMContentLoaded', fillingOutFormFromLocalStorage);

function saveCuretnValuesOfForm() {
  const currentValues = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentValues));
}

feedbackForm.addEventListener('input', _(saveCuretnValuesOfForm, 500));

function submitForm(e) {
  e.preventDefault();

  console.log(feedbackForm.email.value);
  console.log(feedbackForm.message.value);

  localStorage.removeItem('feedback-form-state');
  feedbackForm.email.value = '';
  feedbackForm.message.value = '';
}

feedbackForm.addEventListener('submit', submitForm);
