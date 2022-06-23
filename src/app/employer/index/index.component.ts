import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Employer } from '../employer';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  employers: Employer[] = [];

  constructor(public employerService: EmployerService) { }

  ngOnInit(): void {
    this.employerService.getAll().subscribe((data: any)=>{
      console.log('data',data);
      this.employers = data['data'];
      console.log(this.employers);
    }) 
  }

  deletePost(id:number){
    this.employerService.delete(id).subscribe(res => {
          this.employers = this.employers.filter(item => item.id !== id);
          console.log('employer deleted successfully!');
    })
  }
}
