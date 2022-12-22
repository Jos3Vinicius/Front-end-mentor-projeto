function aparecer(){
  var checkBox = document.getElementById("myCheck");
  if(checkBox.checked == true){
    const nodeList = document.querySelectorAll("#ocultar3, #ocultar00, #valor2");
    const nodeList2 = document.querySelectorAll("#valor1");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "block";
    }
    for (let i = 0; i < nodeList2.length; i++) {
      nodeList2[i].style.display = "none";
    }
    
  }else{
    valor10 = 1
    const nodeList = document.querySelectorAll("#ocultar3, #ocultar00, #valor2");
    const nodeList2 = document.querySelectorAll("#valor1");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "none";
    }
    for (let i = 0; i < nodeList2.length; i++) {
      nodeList2[i].style.display = "block";
    }
    
  }
}
function escolher(n){
  valor = 1
  if(n==1){
    document.getElementById("iniciante").style.border = "1px solid blue"
    document.getElementById("avançado").style.border = "0.5px solid rgba(0, 0, 0, 0.281)"
    document.getElementById("pro").style.border = "0.5px solid rgba(0, 0, 0, 0.281)"
    valor = 9
    var checkBox = document.getElementById("myCheck");
    if(checkBox.checked == true){
      valor = 9*10
    }
  }
  if(n==2){
    document.getElementById("iniciante").style.border = "0.5px solid rgba(0, 0, 0, 0.281)"
    document.getElementById("avançado").style.border = "1px solid blue"
    document.getElementById("pro").style.border = "0.5px solid rgba(0, 0, 0, 0.281)"
    valor = 12
    var checkBox = document.getElementById("myCheck");
    if(checkBox.checked == true){
      valor = 12*10
    }
  }
  if(n==3){
    document.getElementById("iniciante").style.border = "0.5px solid rgba(0, 0, 0, 0.281)"
    document.getElementById("avançado").style.border = "0.5px solid rgba(0, 0, 0, 0.281)"
    document.getElementById("pro").style.border = "1px solid blue"
    valor = 15
    var checkBox = document.getElementById("myCheck");
    if(checkBox.checked == true){
      valor = 15*10
    }
  }
}

function escolher2(){
    var check = document.getElementById("input1")
    var check2 = document.getElementById("input2")
    var check3 = document.getElementById("input3")
    var checkBox = document.getElementById("myCheck");

    if(check.checked == true && checkBox.checked == true){
          document.getElementById("selecionar1").style.border = "1px solid blue"
          soma1 = 10
          
              }if(check.checked == true && checkBox.checked == false){
                document.getElementById("selecionar1").style.border = "1px solid blue"
                soma1 = 1
                }if(check.checked == false){
                      document.getElementById("selecionar1").style.border = "1px solid rgba(0, 0, 0, 0.308)"
                      soma1 = 0
                     }

    if(check2.checked == true && checkBox.checked == true){
          document.getElementById("selecionar2").style.border = "1px solid blue"
          soma2 = 20
          
              }if(check2.checked == true && checkBox.checked == false){
                document.getElementById("selecionar2").style.border = "1px solid blue"
                soma2 = 2
                }if(check2.checked == false){
                      document.getElementById("selecionar2").style.border = "1px solid rgba(0, 0, 0, 0.308)"
                      soma2 = 0
                      }
     if(check3.checked == true && checkBox.checked == true){
          document.getElementById("selecionar3").style.border = "1px solid blue"
          soma3 = 30
          
              }if(check3.checked == true && checkBox.checked == false){
                document.getElementById("selecionar3").style.border = "1px solid blue"
                soma3 = 3
                }if(check3.checked == false){
                      document.getElementById("selecionar3").style.border = "1px solid rgba(0, 0, 0, 0.308)"
                      soma3 = 0
                      }                   
}
function ocultar(a){
  if(a==1){
    document.getElementById("principal").style.display = "none";
    document.getElementById("principal2").style.display = "block";
    document.getElementById("numeros3").style.cssText = "background: rgb(116, 157, 245);color: black; border: none"
    document.getElementById("numeros2").style.cssText = "background: none;color: white; border: 1px solid white"
  }
  if(a==2){
    document.getElementById("principal2").style.display = "none";
    document.getElementById("principal").style.display = "block";
    document.getElementById("numeros2").style.cssText = "background: rgb(116, 157, 245);color: black; border: none"
    document.getElementById("numeros3").style.cssText = "background: none;color:white; border: 1px solid white"
  }
}
function ver(){
  document.getElementById("seguir").style.display = "block"
  x = event.pageX
  y = event.pageY
  document.getElementById("seguir").style.marginTop = y
  document.getElementById("seguir").style.transitionDuration = "0.09s"
  document.getElementById("seguir").style.marginLeft = x   
}setTimeout(ver,3000)

function selecionar(){
  document.getElementById("seguir").style.border = "1px solid black"
  document.getElementById("seguir").style.transform = "scale(2,2)"
}