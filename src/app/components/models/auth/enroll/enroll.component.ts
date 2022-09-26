import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss']
})
export class EnrollComponent implements OnInit {

  constructor(private activateRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        console.log(params);
        
      }
    )
  }

}
