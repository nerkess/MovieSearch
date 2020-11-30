import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CrazyButtonModule} from 'crazy-button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    CrazyButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
