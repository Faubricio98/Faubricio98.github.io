function generarDocPDF() {
    const { jsPDF } = window.jspdf;
    
    var doc = new jsPDF();
    var width = doc.internal.pageSize.getWidth();
    //cabecera del documento
    doc.setFont("times", "bold", "bold");
    doc.setFontSize(14);
    doc.text('Anexo II', width / 2, 20, { align: 'center' });
    doc.text('FORMATO PARA PROGRAMA DE GESTION INTEGRAL DE RESIDUOS', width / 2, 30, { align: 'center' });
    doc.text('POR PARTE DE LOS GENERADORES', width / 2, 40, { align: 'center' });
    doc.setFont("times", "normal", "normal");
    doc.setFontSize(12);
    doc.text('Objetivos de los Programas:', 14, 60);
    doc.text('1. Impulsar las acciones de los sectores productivos hacia el principio de jerarquización de los residuos.', 20, 70);
    doc.text('2. Promover mediante los instrumentos de gestión integral de residuos la responsabilidad compartida y la ', 20, 80);
    doc.text('responsabilidad extendida al productor.', 20, 90);

    //datos del generador
    doc.setFont("times", "bold", "bold");
    doc.text('1. Datos del generador', 14, 110);
    doc.autoTable(
        {
            startY: 115,
            html: '#dataTable',
            theme: 'grid',
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
            },
            bodyStyles: {
                fillColor: [255, 255, 255],
                textColor: 0,
            },
        }
    );

    //cuadro 1
    doc.addPage();
    var finalY = 10;
    //var finalY = doc.lastAutoTable.finalY || 10;
    doc.setFont("times", "bold", "bold");
    doc.text('PASO I: Diagnóstico', 14, finalY + 10);
    doc.setFont("times", "normal", "normal");
    doc.text('1.1 El Programa deberá contemplar un diagnóstico sobre la generación de los residuos que se produce e \n identificar una serie de aspectos de estos, tal como se plantea en el Cuadro 1. ', 14, finalY + 20);
    doc.setFont("times", "bold", "bold");
    doc.text('CUADRO 1', width / 2, finalY + 35, { align: 'center' });
    doc.text('GENERACIÓN DE RESIDUOS', width / 2, finalY + 41, { align: 'center' });
    doc.autoTable(
        {
            startY: finalY + 50,
            html: '#cuadro1Table',
            theme: 'grid',
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [223, 220, 219],
                textColor: 0,
                fontSize: 12,
            },
            bodyStyles: {
                fillColor: [255, 255, 255],
                textColor: 0,
            },
        }
    );

    //cuadro 2
    doc.addPage();
    finalY = 10;
    doc.setFont("times", "normal", "normal");
    doc.text('1.2 Con base en el diagnóstico, identificar las principales debilidades en el manejo actual de los residuos y \n definir los desafíos que se plantean para alcanzar una adecuada gestión integral de los residuos. Para ello \n se deberá completar el Cuadro 2.', 14, finalY + 10);
    doc.setFont("times", "bold", "bold");
    doc.text('CUADRO 2', width / 2, finalY + 28, { align: 'center' });
    doc.text('IDENTIFICACION DE DEBILIDADES Y DESAFÍOS DESDE \n LA JERARQUIZACIÓN DE LOS RESIDUOS', width / 2, finalY + 34, { align: 'center' });
    doc.autoTable(
        {
            startY: finalY + 43,
            html: '#cuadro2Table',
            theme: 'grid',
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [223, 220, 219],
                textColor: 0,
                fontSize: 12,
            },
            bodyStyles: {
                fillColor: [255, 255, 255],
                textColor: 0,
            },
        }
    );

    //cuadro 3
    //doc.addPage();
    //var finalY = 10;
    var finalY = doc.lastAutoTable.finalY || 10;
    doc.setFont("times", "bold", "bold");
    doc.text('PASO II: Diseño del Programa', 14, finalY + 20);
    doc.setFont("times", "normal", "normal");
    doc.text('Con base en los resultados del diagnóstico se deberá elaborar un programa que contenga una serie de \nacciones que involucren necesariamente: estrategias para la prevención en la fuente, minimización en la \ngeneración de residuos, la reutilización, la valorización y la disposición ambientalmente segura de los \nmismos. El Programa deberá contener la siguiente información:', 14, finalY + 30);
    doc.setFont("times", "bold", "bold");
    doc.text('CUADRO 3', width / 2, finalY + 55, { align: 'center' });
    doc.text('PROGRAMA DE RESIDUOS POR PARTE DE LOS GENERADORES', width / 2, finalY + 61, { align: 'center' });
    doc.autoTable(
        {
            startY: finalY + 70,
            html: '#cuadro3Table',
            theme: 'grid',
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [223, 220, 219],
                textColor: 0,
                fontSize: 12,
            },
            bodyStyles: {
                fillColor: [255, 255, 255],
                textColor: 0,
            },
        }
    );

    //cuadro 4
    doc.addPage();
    var finalY = 10;
    doc.setFont("times", "bold", "bold");
    doc.text('PASO III: Seguimiento y monitoreo', 14, finalY + 10);
    doc.setFont("times", "normal", "normal");
    doc.text('El Programa deberá contar con un mecanismo de seguimiento y monitoreo anual, por medio del cual se \npermita evaluar anualmente las actividades y metas establecidas en el Programa. De esta manera se podrán \nidentificar los avances y logros del mismo.', 14, finalY + 20);
    doc.setFont("times", "bold", "bold");
    doc.text('CUADRO 4', width / 2, finalY + 39, { align: 'center' });
    doc.text('SEGUIMIENTO Y MONITOREO ANUAL', width / 2, finalY + 45, { align: 'center' });
    doc.autoTable(
        {
            startY: finalY + 54,
            html: '#cuadro4Table',
            theme: 'grid',
            styles: {
                lineColor: [0, 0, 0],
                lineWidth: 0.1,
            },
            headStyles: {
                fillColor: [223, 220, 219],
                textColor: 0,
                fontSize: 12,
            },
            bodyStyles: {
                fillColor: [255, 255, 255],
                textColor: 0,
            },
        }
    );

    doc.save("Anexo II - Formato para Programa de Gestion Integral de Residuos por parte de los generadores.pdf");
}