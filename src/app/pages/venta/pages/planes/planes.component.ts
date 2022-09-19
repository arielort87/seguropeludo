import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent implements OnInit {
  formulario = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4)]],
    pass: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get user(): AbstractControl {
    return this.formulario.get('user')!;
  }
}
