import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'add-review-page',
  templateUrl: 'add-review-page.html'
})
export class AddReviewPage {

  title: any;
  description: any;
  howmany: any;

  constructor(public viewCtrl: ViewController) {

  }

  save(): void {

    let review = {
      title: this.title,
      description: this.description,
      howmany: this.howmany,
    };

    this.viewCtrl.dismiss(review);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }
}
