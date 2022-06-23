import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  
  constructor(
    public employerService: EmployerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.maxLength(4),  Validators.minLength(4)])
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
     get f(){
      return this.form.controls;
    }

    /**
   * Write code on Method
   *
   * @return response()
   */
     submit(){
      console.log(this.form.value);
      this.employerService.create(this.form.value).subscribe((res:any) => {
           console.log('Employer created successfully!');
           this.router.navigateByUrl('employer/index');
      })
    }

}
