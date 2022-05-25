import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancesWikiComponent } from './finances-wiki-main/finances-wiki.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    FinancesWikiComponent,
    NavigationMenuComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinancesWikiComponent
  ]
})
export class FinancesModule { }
