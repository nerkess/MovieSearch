import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from './movie.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        MovieComponent
    ],
    exports: [
        MovieComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
    ]
})
export class MovieModule { }
