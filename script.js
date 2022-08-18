let send = document.querySelector('button');
let sum = document.querySelector('.sum_num')

let eur_rate = 0.3793
let usd_rate = 0.3864
let rub_rate = 23.6956 

function send_sum() {
    var select = document.querySelector('select');
    if (select.value == 'EUR') {
      alert(sum.value + ' BYN = ' + sum.value*0.3793 + ' ' + select.value)
  }

  if (select.value == 'USD') {
      alert(sum.value + ' BYN = ' + sum.value*0.3864 + ' ' + select.value)
  }

  if (select.value == 'RUB') {
      alert(sum.value + ' BYN = ' + sum.value*23.6956 + ' ' + select.value)
  }
}

send.addEventListener('click', send_sum, false)

eur = document.createElement('p');
eur.innerHTML = '1 BYN = ' + eur_rate + ' EUR';
document.body.append(eur);

usd = document.createElement('p');
usd.innerHTML = '1 BYN = ' + usd_rate + ' USD';
document.body.append(usd);

rub = document.createElement('p');
rub.innerHTML = '1 BYN = ' + rub_rate + ' RUB';
document.body.append(rub);