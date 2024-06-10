import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import './VigilanteValidarQR.css'

function VigilanteValidarQR() {

    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner( 'reader', { 
            qrbox: {
                width: 500,
                height: 500
            },
            fps: 10,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }

        function error(error) {
            console.warn(error);
        }
    }, []);

    return (
        <div className="QrScanner">
            {
                scanResult ? (
                    <div>
                        <h1>Resultado del escaneo</h1>
                        <p>{scanResult}</p>
                    </div>
                ) : (
                    <div id="reader"></div>
                )
            }
        </div>
    );

}

export default VigilanteValidarQR;
