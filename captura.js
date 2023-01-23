//var capturaBTN = document.getElementById('captura')       //para el boton viejo
var btnCapturarGrilla = document.getElementById('btnCapturarGrilla')
var btnCapturarForm = document.getElementById('btnCapturarInd')

var form = document.getElementById('formulario')
//capturaBTN.addEventListener('click', () => {              //para el boton viejo
//btnCapturarGrilla.addEventListener('click', () => { download_file('Grilla') })

//LISTENER PARA CAPTURA, seguir cadena de funciones (download_file, getScreenShot)
btnCapturarForm.addEventListener('click', () => {
    download_file('Formulario')
})

function download_file(whobtn) {
    if(whobtn == "Grilla"){
        /**/
        let box = document.getElementById('tabladatos');
        let width = box.clientWidth;
        let height = box.clientHeight;
        document.getElementById('logo').innerHTML = '<img src="logo.jpg" class="mt-3" width='+box.clientWidth+' style="margin: 0px !important;" />';
        document.getElementById("tabla").style.width = box.clientWidth + ' !important;';
        let width2 = box.clientWidth;
        let height2 = box.clientHeight;
        /**/
    }

    if(whobtn == "Grilla")
        contenedor = "tabla";
    else
        contenedor = "individual";

        getScreenShot(contenedor);
	  
}

function getScreenShot(Src) {
    var contObs = txtObservaciones.value;
    /*txtObservaciones.html = ""*/
    var text = txtObservaciones.value;
    txtObservaciones.value = text.replace(/\r?\n/g, '<br />');

    const block = document.getElementById('conflictivo');
    var bkp = block.innerHTML;
	let HTMLString = `<label class="control-label" for="txtObservaciones">`+txtObservaciones.value+`</label>`;
	block.innerHTML = HTMLString;

    let src = document.getElementById(Src);
    html2canvas(src).then(function (canvas) {
        //document.getElementById("explain-scr").appendChild(canvas);
        canvas.toBlob(function (blob) {
            navigator.clipboard
                .write([
                    new ClipboardItem(
                        Object.defineProperty({}, blob.type, {
                            value: blob,
                            enumerable: true
                        })
                    )
                ])
                .then(function () {
                    block.innerHTML = bkp;
                    txtObservaciones.value = text; //dataJson.observaciones;
                    alert('Elemento copiado');
                });
        });
    });
}

async function copyImage(url) {
    console.log("Wriing to clipbard");  
    const item = new ClipboardItem({'image/png': url});
    await navigator.clipboard.write([item]).then(function() {
        document.getElementById('logo').innerHTML = '';
        alert('Copiado');
        console.log("Copied to clipboard successfully!");
    }, function(error) {
      console.error("unable to write to clipboard. Error:");
      console.log(error);
    });
}
