// initializes and uses the library
let pScanner = null;
(async () => {
    let scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
	let runtimeSettings = await scanner.getRuntimeSettings();
	runtimeSettings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ALL;
	runtimeSettings.LocalizationModes = [2, 8, 0, 0, 0, 0, 0, 0];
	runtimeSettings.deblurLevel = 2;
	await scanner.updateRuntimeSettings(runtimeSettings);

	/*
      scanner.onFrameRead = results => {
        if (results.length > 0)
            console.log(results);
      };
      */

	scanner.onUnduplicatedRead = (txt, result) => {
		alert(txt);
		//alert(JSON.stringify(result));
		document.getElementById("inputPrueba").value = txt;
		scanner.hide();
	};
	await scanner.show();
})();
