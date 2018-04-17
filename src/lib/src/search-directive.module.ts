import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { StatusMessageModule } from '@webfactor/ionic-status-message';
import { IonicModule } from 'ionic-angular';

import { SearchButtonDirective } from './directives/search-button';
import { SearchModalPage } from './pages/search-modal/search-modal';

@NgModule({
    imports: [CommonModule, IonicModule, IonicStorageModule.forRoot(), StatusMessageModule],
    declarations: [SearchButtonDirective, SearchModalPage],
    exports: [SearchButtonDirective],
    entryComponents: [SearchModalPage]
})
export class SearchDirectiveModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SearchDirectiveModule,
            providers: []
        };
    }
}
