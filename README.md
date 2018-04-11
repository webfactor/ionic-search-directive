# SearchDirective

Adds search functionality w/ history to any button. 🔍   
Use `[wf-search]` attribute on any `<button>` element.

## Installation
- Install `@webfactor/ionic-search-directive` via npm.
- Add `SearchDirectiveModule` to your Ionic module imports.

## I/O
```typescript
searchLabel?: string
```
Default: 'Suche nach'. String for display in the title and the searchbar placeholder.

```typescript
searchHistoryLabel?: string
```  
Default: 'Suchverlauf'. Title for the search history.

```typescript
searchPlaceholder?: string
``` 
Default: 'Bitte gib einen Suchbegriff ein und tippe auf die Lupe.'. Get displayed when history items are present.

```typescript
searchPlaceholderIcon?: string
```
Default: 'search'. Icon that gets displayed in the history placeholder. Use ionicons.

```typescript
(search)
```
Emits when the user searches for a term. _$event_ holds the search term.

## Example
```html
<button ion-button icon-left color="primary" 
    wf-search 
    (search)="onSearch($event)" 
    searchLabel="Suche nach Läden"
    searchPlaceholder="Bitte gib einen Suchbegriff ein und tippe auf die Lupe"
>
    <ion-icon name="search"></ion-icon>
    Suchen nach...
</button>
```

![SearchButton](https://github.com/webfactor/ionic-lib/blob/master/screenshots/search-button.png)