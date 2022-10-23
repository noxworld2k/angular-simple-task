
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'psitagram';
  apiURL = 'https://dog.ceo/api/breeds/list/all';
  dogsData: any;
  dogsList: string[] = [];
  dog: string = '';
  dogImage: any;
  dogWikiUrl: string = '';



  constructor(private http: HttpClient) {}
  ngOnInit(): void{
    this.http.get(this.apiURL).subscribe((data) => {
      this.dogsData = data;
      this.dogsData = this.dogsData.message;
      this.dogsList = Object.keys(this.dogsData);
      console.log(this.dogsData);
    });
  }
  onChange(event: any){
    this.dog = event.target.value
     const apiReqUrl = `https://dog.ceo/api/breed/${this.dog}/images`;
    this.http.get(apiReqUrl).subscribe((data) => {
      this.dogImage = data;
      this.dogImage = this.dogImage.message[0];
      this.dogWikiUrl = `https://pl.wikipedia.org/wiki/${this.dog}`;
      }
    );
  }
}
