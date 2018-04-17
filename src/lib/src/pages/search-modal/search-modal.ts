import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import * as _ from 'lodash';

@Component({
    selector: 'page-search-modal',
    templateUrl: 'search-modal.html'
})
export class SearchModalPage {
    searchLabel: string = '';
    searchHistoryLabel: string = '';
    searchPlaceholder: string = '';
    searchPlaceholderIcon: string = '';
    term: string = '';
    history: string[] = [];

    constructor(
        private viewCtrl: ViewController,
        private storage: Storage,
        private navParams: NavParams
    ) {
        this.getHistory();
        this.searchLabel = navParams.get('searchLabel');
        this.searchHistoryLabel = navParams.get('searchHistoryLabel');
        this.searchPlaceholder = navParams.get('searchPlaceholder');
        this.searchPlaceholderIcon = navParams.get('searchPlaceholderIcon');
    }

    private getHistory() {
        this.storage
            .get('searchHistory')
            .then(value => (value ? (this.history = value) : (this.history = [])))
            .catch(() => (this.history = []));
    }

    dismissModal(data: any) {
        this.viewCtrl.dismiss(data || null);
    }

    search() {
        if (_.includes(this.history, this.term)) {
            this.removeHistoryItem(this.history.indexOf(this.term));
        }

        this.history.splice(0, 0, this.term);
        this.persistHistory();

        this.dismissModal(this.term);
    }

    removeHistoryItem(index: number, event?: any) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        this.history.splice(index, 1);
        this.persistHistory();
    }

    restoreHistoryItem(index) {
        this.term = this.history[index];
        this.removeHistoryItem(index);
        this.search();
    }

    public persistHistory() {
        this.storage.set('searchHistory', this.history);
    }
}
