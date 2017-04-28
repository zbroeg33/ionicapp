import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Reviews {

  data: any;


  constructor(public http: Http) {
    this.data = null;
  }

  getReviews(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {


      this.http.get('http://34.200.253.221:8080/api/reviews')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  updateReviews(){

    return new Promise(resolve => {


      this.http.get('http://34.200.253.221:8080/api/reviews')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }


  createReview(review){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://34.200.253.221:8080/api/reviews', JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteReview(id){

    this.http.delete('http://34.200.253.221:8080/api/reviews/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

}
