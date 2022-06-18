import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy  {

  public Editor=ClassicEditor
  data:string;
  constructor( private route: ActivatedRoute,private router: Router) { }


  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     alert(params['id']);
      
    });
  }
  getContent() {
    // this._router.navigate(['content',100],{relativeTo:this._activatedRoute})
    alert(this.data)
  }
  onChange( { editor }: ChangeEvent ) {
    this.data = editor.getData();
    console.log( this.data );
  }

}
