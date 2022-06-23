import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employer } from '../employer';
import { FormGroup, FormControl, Validators} from '@angular/forms';
  
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  employer!: Employer;
  form!: FormGroup;

  constructor(
    public employerService: EmployerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['employerId'];
    this.employerService.find(this.id).subscribe((data: any)=>{
      this.employer = data['data'];
      console.log('this.employer',this.employer);
    });
      
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.maxLength(4),Validators.minLength(4)])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.employerService.update(this.id,this.form.value).subscribe((res:any) => {
      console.log('Update Successfully');
      this.router.navigateByUrl('employer/index')
    })
  }
}
