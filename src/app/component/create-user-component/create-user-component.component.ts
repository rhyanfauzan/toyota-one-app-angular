import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { CreateUserRequest } from '../../interfaces/api-request/createuserrequest.interface';
import { AlertComponentComponent } from '../partial/alert-component/alert-component.component';

@Component({
  selector: 'app-create-user-component',
  templateUrl: './create-user-component.component.html',
  styleUrl: './create-user-component.component.css'
})
export class CreateUserComponentComponent {
  userForm!: FormGroup;
  isLoading: boolean = false;
  message!: string;
  animationPath: string = 'assets/images/success2.json';
  @ViewChild(AlertComponentComponent) alertComponent!: AlertComponentComponent;

  // Sample data for dropdowns
  designations = ['Manager', 'Developer', 'Analyst'];
  divisions = ['IT', 'HR', 'Finance'];
  departments = ['Engineering', 'Marketing', 'Operations'];
  teams = ['Backend', 'Frontend', 'QA'];

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // Initialize FormGroup and FormControls with validators
    this.userForm = new FormGroup({
      staffId: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      team: new FormControl('', Validators.required),
      superiorEmail: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: CreateUserRequest = this.userForm.value;
      this.userService.createUserDummy(user).subscribe(response => {
        this.message = response.message;
        this.isLoading = true;
        this.alertComponent.playAnimate(this.isLoading, this.animationPath);
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      });
    }
  }
}
