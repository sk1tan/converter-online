let send = document.querySelector('button');
let sum = document.querySelector('.sum_num')

function send_sum() {
    var select = document.querySelector('select');
    if (select.value == 'EUR') {
      alert(sum.value + ' BYN = ' + sum.value*0.3793 + ' EUR')
  }

  if (select.value == 'USD') {
      alert(sum.value + ' BYN = ' + sum.value*0.3864 + ' USD')
  }

  if (select.value == 'RUB') {
      alert(sum.value + ' BYN = ' + sum.value*23.6956 + ' RUB')
  }
}

send.addEventListener('click', send_sum)