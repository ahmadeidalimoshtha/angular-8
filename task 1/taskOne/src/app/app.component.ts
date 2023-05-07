import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  @ViewChild('tableRef') tableRef :ElementRef | undefined; 
  //@ViewChild('imageRef') imageRef :ElementRef | undefined; 
  title = 'taskOne';
  //table info 
  
  tableInfo = [  
    {NameEn: 'Apple', NameAr: 'تفاحة',image:'../assets/apple.jpg' },  
    {NameEn: 'Orange', NameAr: 'برتقال',image:'../assets/orange.jpg'  },  
    {NameEn: 'Tomato', NameAr: 'طماطم',image:'../assets/tomato.jpg'  },  
    {NameEn: 'Apple', NameAr: 'تفاحة',image:'../assets/apple.jpg' },  
    {NameEn: 'Orange', NameAr: 'برتقال',image:'../assets/orange.jpg'  },  
    {NameEn: 'Tomato', NameAr: 'طماطم',image:'../assets/tomato.jpg'  },  
    {NameEn: 'Apple', NameAr: 'تفاحة',image:'../assets/apple.jpg' },  
    {NameEn: 'Orange', NameAr: 'برتقال',image:'../assets/orange.jpg'  },  
    {NameEn: 'Tomato', NameAr: 'طماطم',image:'../assets/tomato.jpg'  },  
    {NameEn: 'Apple', NameAr: 'تفاحة',image:'../assets/apple.jpg' },  
    {NameEn: 'Orange', NameAr: 'برتقال',image:'../assets/orange.jpg'  },  
    {NameEn: 'Tomato', NameAr: 'طماطم',image:'../assets/tomato.jpg'  },  
    {NameEn: 'Mango', NameAr: 'منجا',image:'../assets/mango.jpg'  }  
  ];  

  public saveAsPDF(): void {
    html2canvas(this.tableRef?.nativeElement).then((canvas) => {
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p','pt', [canvas.width, canvas.height]);
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, canvas.width, canvas.height);
      PDF.save('tableInfo.pdf');
    });}



  makepdf(){
    html2canvas(this.tableRef?.nativeElement).then((canvas) => {
      let pdf = new jsPDF('p','pt', [canvas.width, canvas.height]);
      pdf.html(this.tableRef?.nativeElement,{
        callback:(pdf) => {
          pdf.save('tableInfo.pdf')
        }
      })
         })
   
  }









  // public downloadAsPDF() {
  //   const doc = new jsPDF();
   
  //   const pdfTable = this.tableRef?.nativeElement;
   
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
     
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).open(); 
     
  // }
  // saveAsPDF(){
  //   let pdfTable = new jsPDF();  
  //   pdfTable.autoTable(columns, data);
  // //  pdfTable.addImage(this.imageRef?.nativeElement);
  //  // pdfTable.addField(this.tableRef?.nativeElement);
  
  //   pdfTable.save('pdfTable.pdf');  
  // }


  // generatePDF() {
  //   const doc = new jsPDF('p', 'pt', 'a4');
  //   const img = new Image();
  //   img.src = this.imageRef?.nativeElement.currentSrc;
  //   img.onload = () => {
  //     doc.addImage(img, 'JPG', 15, 15, 180, 160);
  //     doc.html(this.tableRef?.nativeElement.innerHTML);  
  //     doc.save('document.pdf');
  //   };
    
  // }
}
