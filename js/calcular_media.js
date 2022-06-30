function calcularMedia2() {
    var valor1 = parseFloat(document.getElementById("valor_1").value);
    var valor2 = parseFloat(document.getElementById("valor_2").value);
    var media = (valor1 + valor2)/2 ;
    alert("A média foi: " + media)
}
function calcularMedia3() {
    var valor1 = parseFloat(document.getElementById("valor_1").value);
    var valor2 = parseFloat(document.getElementById("valor_2").value);
    var valor3 = parseFloat(document.getElementById("valor_3").value);
    var media = (valor1 + valor2 + valor3)/3 ;
    alert("A média foi: " + media)
}