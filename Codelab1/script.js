function jumlahkan() {
  var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
  var bilangan2 = parseFloat(document.getElementById("bilangan2").value);
  var hasil = bilangan1 + bilangan2;

  alert("Hasil penjumlahan = " + hasil);
}

function ulangi() {
  document.getElementById("bilangan1").value = "";
  document.getElementById("bilangan2").value = "";
}