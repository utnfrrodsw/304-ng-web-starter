import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { paramsType } from './params-type';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  params: paramsType = {
    id: '',
    name: '',
    apellido: ''
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Params: ', this.activatedRoute.snapshot.params);
    this.params = this.activatedRoute.snapshot.queryParams as paramsType;
    console.log('Query Params: ', this.activatedRoute.snapshot.queryParams);
  }

}
