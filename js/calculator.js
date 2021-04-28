function calculate() {

    var x = document.getElementById("RenderTime").value;
    var y = document.getElementById("numberOfFrames").value;
    var output = document.getElementById("output");
    
    var sum = x * y * 8 *0.00275;
    
    output.innerHTML = '$' + sum;
    }