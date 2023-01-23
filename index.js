console.log('works')

var dataInput = document.getElementById('data');

var button = document.getElementById('send');

var pegar = document.getElementById('btnPegar');
var agregarGrilla = document.getElementById('btnAgregar');
var capturaInd = document.getElementById('btnCapturarInd');

var dataJson = {
    carta:'',
    ctg:'',
    estado:'',
    producto:'',
    titular: '',
    Intermediario: '',
    RemComercial: '',
    Corredor: '',
    puerto:'',
    procedencia:'',
    patente: '',
    calidad:'',
    observaciones:''
};
var tbody = document.getElementById('tbody');

button.addEventListener('click',async()=>{
    if(dataInput.value != '' && dataInput.value != null){
        let dataRes = dataInput.value.replace('Carta de Porte: \n        ','').replaceAll('\n','').replaceAll('%','%,').split(',');
        await dataRes.forEach(item => {
            checkfield(item.replace('\n',''));
        });
        var tRow = `<tr>
            <td>${dataJson.carta}</td>
            <td>${dataJson.ctg}</td>
            <td>${dataJson.estado}</td>
            <td>${dataJson.producto}</td>
            <td>${dataJson.titular}</td>
            <td>${dataJson.Intermediario}</td>
            <td>${dataJson.RemComercial}</td>
            <td>${dataJson.Corredor}</td>
            <td>${dataJson.puerto}</td>
            <td>${dataJson.procedencia}</td>
            <td>${dataJson.patente}</td>
            <td>${dataJson.calidad}</td>
            <td>${dataJson.observaciones}</td>
        </tr>`;
        dataJson.observaciones = '';
        tbody.innerHTML += tRow;
    }else{
        alert('vacio')
    }

});

pegar.addEventListener('click',async()=>{
    setTimeout(async () => {
        dataJson.observaciones = '';
        const text = await navigator.clipboard.readText();
        console.log(text);
        let dataRes = text.replace('Carta de Porte: ', '').replaceAll('\n', ',').replaceAll('\n', '').replaceAll('\r', ',').replaceAll('%', '%,').split(',');
        await dataRes.forEach(item => {
            checkfield(item.replace('\n', ''));
        });

        txtNumeroCarta.value   = dataJson.carta;
        txtCTG.value           = dataJson.ctg;
        txtEstado.value        = dataJson.estado;
        txtProducto.value      = dataJson.producto;
        txtTitular.value       = dataJson.titular;
        txtIntermediario.value = dataJson.Intermediario;
        txtRemitente.value     = dataJson.RemComercial;
        txtDestino.value       = dataJson.puerto;
        txtCorredor.value      = dataJson.Corredor;
        txtPatente.value       = dataJson.patente;
        txtCalidad.value       = dataJson.calidad;
        txtProcedencia.value   = dataJson.procedencia;
        txtObservaciones.value = dataJson.observaciones;
      }, 500);

});

/*agregarGrilla.addEventListener('click',async()=>{
    if( txtNumeroCarta.value    != '' ||  
        txtEstado.value         != '' ||       
        txtCTG.value            != '' ||       
        txtProducto.value       != '' ||     
        txtTitular.value        != '' ||      
        txtIntermediario.value  != '' ||
        txtRemitente.value      != '' ||    
        txtDestino.value        != '' ||      
        txtCorredor.value       != '' ||     
        txtPatente.value        != '' ||      
        txtCalidad.value        != '' ||      
        txtProcedencia.value    != '' ||      
        txtObservaciones.value  != ''){
            var tRow = `<tr>
                <td>${txtNumeroCarta.value}</td>
                <td>${txtCTG.value}</td>
                <td>${txtEstado.value}</td>
                <td>${txtProducto.value}</td>
                <td>${txtTitular.value}</td>
                <td>${txtIntermediario.value}</td>
                <td>${txtRemitente.value}</td>
                <td>${txtCorredor.value}</td>
                <td>${txtDestino.value}</td>
                <td>${txtProcedencia.value}</td>
                <td>${txtPatente.value}</td>
                <td>${txtCalidad.value}</td>
                <td>${txtObservaciones.value}</td>
                </tr>`;
            dataJson.observaciones = '';
            tbody.innerHTML += tRow;
            txtNumeroCarta.value   = "";
            txtCTG.value           = "";
            txtEstado.value        = "";
            txtProducto.value      = "";
            txtTitular.value       = "";
            txtIntermediario.value = "";
            txtRemitente.value     = "";
            txtDestino.value       = "";
            txtCorredor.value      = "";
            txtPatente.value       = "";
            txtCalidad.value       = "";
            txtProcedencia.value   = "";
            txtObservaciones.value = "";
        }

});*/

const checkfield = (txt) => {
    let res = txt.split(':');
    if(res.length == 2){
        switch(res[0].trim()){
            case 'Producto':        dataJson.producto      = res[1].trim(); break;
            case 'CTG':             dataJson.ctg           = res[1].trim(); break;
            case 'Estado':          dataJson.estado        = res[1].trim(); break;
            case 'Procedencia':     dataJson.procedencia   = res[1].trim(); break;
            case 'Puerto':          dataJson.puerto        = res[1].trim(); break;
            case 'Titular':         dataJson.titular       = res[1].trim(); break;
            case 'Patente':         dataJson.patente       = res[1].trim(); break;
            case 'Intermediario':   dataJson.Intermediario = res[1].trim(); break;
            case 'Corredor':        dataJson.Corredor      = res[1].trim(); break;
            case 'Rem. Comercial':  dataJson.RemComercial  = res[1].trim(); break;
            case 'CPE':             dataJson.carta         = res[1].trim(); break;      //antes Nro Carta
            case 'Calidad':         dataJson.calidad       = res[1].trim(); break;
            default: dataJson.observaciones = dataJson.observaciones + res[0].trim() +': ' + res[1].trim() + "\n"; break;
        }
    }else{
        if(txt.trim().length != 0)
            dataJson.observaciones = dataJson.observaciones + txt.trim()+' ';
    }
}

/*const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}*/

function asd(){
    console.log('woot');
}