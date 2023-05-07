import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
//import arabic from './arabic-normal.js'
import jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  @ViewChild('tableRef') tableRef :ElementRef | undefined; 
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
//
  public saveAsPDF(): void {
    html2canvas(this.tableRef?.nativeElement).then((canvas) => {
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p','pt', [canvas.width, canvas.height]);
      //PDF.setDPI(300); 
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, canvas.width, canvas.height);
      PDF.save('tableInfo.pdf');
    });}



  makepdf(){
    
    html2canvas(this.tableRef?.nativeElement).then((canvas) => {
      let pdf = new jsPDF('p','pt', [canvas.width, canvas.height]);
   //  const myFont =  ''
// add the font to jsPDF
//pdf.addFileToVFS("arabic.ttf", myFont);
//pdf.addFont("arabic.ttf", "arabic", "normal");
//pdf.setFont(arabic);

      pdf.html(this.tableRef?.nativeElement,{
        callback:(pdf) => {
          pdf.save('tableInfo.pdf')
        }
      })
         })
   
        }
}
