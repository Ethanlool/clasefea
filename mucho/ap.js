const contenedorQR = document. getElementById(`contenedorQR`);
const texto = document. getElementById(`texto`);
const QR = new QRCode (contenedorQR);
const ganerarQR=()=>{
    QR.makeCode(texto.value);
}