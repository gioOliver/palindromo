function valida(){
  var i
  var palavra = document.getElementById('word').value;
  var texto1 = '<tr><td>'+palavra+'</td>';
  var texto2 = '<td>É um palíndromo</td><tr>';
  var texto3 = '<td>Não é palíndromo</td><tr>';
  var str = "";
  var reverso = "";

  palavra = palavra.toUpperCase();

  for(i = 0; i < palavra.length; i++){
    if(palavra.charAt(i) != ' ')
      str += palavra.charAt(i);
  }
  if(str == ""){
    alert("Campo vazio");
  }else{
    reverso = str.split('').reverse().join('');

    document.getElementById('word').value="";

    if(str === reverso){
      document.getElementById('result').innerHTML += texto1+texto2;
    }else{
      document.getElementById('result').innerHTML += texto1+texto3;
    }
  }
}
