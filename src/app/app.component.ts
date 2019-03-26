import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './data.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooksAPIApp';
  public ISBi:boolean;
  public Title:boolean;
  public Subtitle:boolean;
  public Description:boolean;
  public CoverThumb:boolean;
  public LanguageCode:boolean;
  public Subjects:boolean;
  public Authors:boolean;
  private books = [];
  public ISB;
  public Titl;
  public Subtit;
  public Descript;
  public CoverThum;
  public LanguageCod;
  public Subject;
  public Author;
  
  constructor( public dataService: DataService){ }
  check(){
    if(!this.books[0].ISBN)
    {
     this.ISBi=false;
    }else{ this.ISBi=true;
    
  }
    if(!this.books[0].Title)
    {
      this.Title=false;
    }else{ this.Title=true;}
    if(!this.books[0].Subtitle)
    {
      this.Subtitle=false;
    }else{ this.Subtitle=true;}
    if(!this.books[0].Description)
    {
      this.Description=false;
    }else{ this.Description=true;}
    if(!this.books[0].CoverThumb)
    {
      this.CoverThumb=false;
    }else{ this.CoverThumb=true;}
    if(!this.books[0].LanguageCode)
    {
      this.LanguageCode=false;
    }else{ this.LanguageCode=true;}
    if(this.books[0].Subjects.length>0)
    {
      this.Subjects=true;
    }else{ this.Subjects=false;}
    if(this.books[0].Authors.length>0)
    {
      this.Authors=true;
    }else{ this.Authors=false;}

  }
  getinfo(val){
    this.dataService.getbooks(val).subscribe((res : {})=>{
      this.books[0] = res;
      console.log(this.books[0]);
      this.ISB=this.books[0].ISBN;
      this.Titl=this.books[0].Title;
      this.Subtit=this.books[0].Subtitle;
      this.Descript=this.books[0].Description;
      this.CoverThum=this.books[0].CoverThumb;
      this.LanguageCod=this.books[0].LanguageCode;
      this.Subject= this.books[0].Subjects;
      this.Author= this.books[0].Authors;
      this.check();
      
    });  
  }
  getvalue(value){
console.log(value);
this.getinfo(value);

}

}
