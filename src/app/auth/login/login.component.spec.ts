import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthorizeService } from 'src/app/services/authorize.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing'; // 1
import { LoginComponent } from './login.component';


describe('LoginComponent', () => { // 2
  beforeEach(async(() => { // 3
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
       RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        LoginComponent
      ],
      providers:[AuthorizeService]
    }).compileComponents();
  }));

  let component: LoginComponent;

  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h2 tag', () => { //6
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('User Login');
  });

  it('form invalid when empty', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    let email = fixture.componentInstance.loginForm.controls['email']; (1)
    expect(email.valid).toBeFalsy(); (2)
  });

});
