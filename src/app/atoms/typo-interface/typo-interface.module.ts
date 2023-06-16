import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypoInterfaceComponent } from './typo-interface.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: TypoInterfaceComponent }];

@NgModule({
  declarations: [TypoInterfaceComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TypoInterfaceModule {}
