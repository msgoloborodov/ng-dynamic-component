import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentOutletInjectorModule } from '../component-outlet';
import { DynamicDirectivesDirective } from './dynamic-directives.directive';

@NgModule({
  imports: [CommonModule],
  exports: [DynamicDirectivesDirective, ComponentOutletInjectorModule],
  declarations: [DynamicDirectivesDirective],
})
export class DynamicDirectivesModule {}
