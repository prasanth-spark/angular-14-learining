import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employer } from '../employer';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  employer!: Employer;

  constructor(public employerService: EmployerService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =(this.route.snapshot.params['employerId'])? 1 : 2;
        
    this.employerService.find(this.id).subscribe((data: any)=>{
      this.employer = data['data'];
      console.log('employer Details', this.employer);      
    });
  }

}
