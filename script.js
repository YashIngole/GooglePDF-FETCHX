let trustedURL;
if (window.trustedTypes && trustedTypes.createPolicy) {
    const policy = trustedTypes.createPolicy('myPolicy', {
        createScriptURL: (input) => {
            return input;
        }
    });
    trustedURL = policy.createScriptURL('https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js');
} else {
    trustedURL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js';
}

let jspdf = document.createElement("script");
jspdf.onload = function() {
    let pdf;
    let elements = document.getElementsByTagName("img");

    for (let i = 0; i < elements.length; i++) {
        let img = elements[i];
        if (!/^blob:/.test(img.src)) {
            continue;
        }
        let canvasElement = document.createElement('canvas');
        let con = canvasElement.getContext("2d");
        canvasElement.width = img.width;
        canvasElement.height = img.height;
        con.drawImage(img, 0, 0, img.width, img.height);
        let imgData = canvasElement.toDataURL("image/jpeg", 1.0);

        // Determine the orientation based on the aspect ratio
        let orientation = (img.width > img.height) ? 'landscape' : 'portrait';

      
        if (i === 0) {
            pdf = new jsPDF(orientation);
        } else {
            pdf.addPage(orientation);
        }

  
        let pageWidth = pdf.internal.pageSize.width;
        let pageHeight = pdf.internal.pageSize.height;

     
        let imgAspect = img.width / img.height;
        let pageAspect = pageWidth / pageHeight;

        let imgWidth, imgHeight;
        if (imgAspect > pageAspect) {
         
            imgWidth = pageWidth;
            imgHeight = pageWidth / imgAspect;
        } else {
            
            imgHeight = pageHeight;
            imgWidth = pageHeight * imgAspect;
        }

        let x = (pageWidth - imgWidth) / 2;
        let y = (pageHeight - imgHeight) / 2;

    
        pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
    }


    pdf.save("download.pdf");
};
jspdf.src = trustedURL;
document.body.appendChild(jspdf);
