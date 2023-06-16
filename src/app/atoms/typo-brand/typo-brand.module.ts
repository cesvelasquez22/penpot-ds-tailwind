import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypoBrandComponent } from './typo-brand.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TypoBrandComponent }];

@NgModule({
  declarations: [TypoBrandComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TypoBrandModule {}
