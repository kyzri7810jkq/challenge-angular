import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit { 

  frmPosts: FormGroup;

  constructor() {
    this.frmPosts = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    })
  }
  

  ngOnInit() {
  }

  submitForm(e){
    e.preventDefault();
    if(this.frmPosts.status == 'INVALID'){

    }
    console.log(this.frmPosts);
  }

  get title(){
    return this.frmPosts.get('title');
  }

  get body(){
    return this.frmPosts.get('body');
  }

}
