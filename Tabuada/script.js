function calcular() {
  const inputNum = document.querySelector('#value');
  const selectTable = document.querySelector('#tabuada');

  if (inputNum.value == 0) {
    alert('Digite algum número.');
  } else {
    const valueNumber = Number(inputNum.value);
    let contador = 1;

    selectTable.innerHTML = '';
    while (contador <= 10) {
      let elementOption = document.createElement('option');
      elementOption.text = `${valueNumber} x ${contador} = ${valueNumber*contador}`
      selectTable.appendChild(elementOption);
      contador++
    }
  }
}