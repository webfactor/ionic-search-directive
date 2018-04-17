import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { SearchModalPage } from '../pages/search-modal/search-modal';

@Directive({ selector: 'button[wf-search]' })
export class SearchButtonDirective {
  @Output() search = new EventEmitter();
  @Input() searchLabel?: string = 'Suche nach...';
  @Input() searchHistoryLabel?: string = 'Suchverlauf';
  @Input() searchPlaceholder?: string = 'Bitte gib einen Suchbegriff ein und tippe auf die Lupe.';
  @Input() searchPlaceholderIcon?: string = 'search';

  constructor(private modalCtrl: ModalController) {}

  @HostListener('click')
  presentSearchModal() {
    let modal = this.modalCtrl.create(SearchModalPage, {
      searchLabel: this.searchLabel,
      searchHistoryLabel: this.searchHistoryLabel,
      searchPlaceholder: this.searchPlaceholder,
      searchPlaceholderIcon: this.searchPlaceholderIcon
    });
    modal.onDidDismiss(term => {
      if (term) this.search.emit(term);
    });
    modal.present();
  }
}
