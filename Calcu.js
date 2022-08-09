const outText = document.querySelector('.output input'); // get the class of the class output and the input type
mode = 'calcu';

function insert(num) {
  outText.value += num; //This is function for button to the insert the number 
  if (mode == 'equal') {
    outText.value = '';
    outText.value += num;
    mode = 'calcu';
  }
}

//This function will clear all the number
function clr() {
  outText.value = '';
}

//This will delete one number
function del() {
  outText.value = outText.value.slice(0, -1)
  if (mode == 'equal') {
    outText.value = '';
  }
}

//This function is for the equal. this will get the answer of the calcu
function calcu() {
  try {
  outText.value = eval(outText.value);
  mode = 'equal';
} catch (err) {
  outText.value = 'INVALID';
  mode == 'equal';
}
}

//Tuesday March 31, 2022
//KIRA/mandie
