function hitung() 
{  
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);   
    var hasil = num1 + num2;

    document.getElementById('hasil').innerHTML = "Hasil: " + hasil;
}