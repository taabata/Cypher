var uploaded = "";
var texts = "";
var datas = "";
var cyphered = [];
var decyphered = [];

function move(t){
    var button = t.id;
    if(button=="upload"){
        document.getElementById("conv").click();
    }
    else{
        document.getElementById("op").click();
    }

}

window.onload = function(){
    document.getElementById("conv").onchange = function(){
        var fileread = new FileReader;
        fileread.onload = function(){
            console.log(fileread.result);
            texts = fileread.result;
            texts = String(texts);
            document.getElementById("image").setAttribute("src",texts);
            for(i=0;i<texts.length;i++){
                cyphered.push(String.fromCharCode(texts[i].charCodeAt(0)+3));
            }
            
            texts = cyphered.join("");
            var bb = new Blob([texts ], { type: 'text/plain' });
            var a = document.createElement('a');
            a.download = 'cyphered.txt';
            a.href = window.URL.createObjectURL(bb);
            a.click();
            var container = document.getElementById("buttonholder");
            var image = document.getElementById("image");
            container.style.animation = "move 1s forwards";
            image.style.animation = "slide 2s forwards";
        }
        fileread.readAsDataURL(document.getElementById("conv").files[0]);
    }
    document.getElementById("op").onchange = function(){
        var fileread = new FileReader;
        fileread.onload = function(){
            console.log(fileread.result);
            datas = fileread.result;
            for(i=0;i<datas.length;i++){
                decyphered.push(String.fromCharCode(datas[i].charCodeAt(0)-3));
            }
            datas = decyphered.join("");
            console.log(datas);
            document.getElementById("image").setAttribute("src",datas);
            var container = document.getElementById("buttonholder");
            var image = document.getElementById("image");
            container.style.animation = "move 1s forwards";
            image.style.animation = "slide 2s forwards";
        }
        fileread.readAsText(document.getElementById("op").files[0]);
    }
}
