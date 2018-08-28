# Angular 6 - Mediawiki module
# Requirements

## Mediawik
* Wikiserver up-and-running in edit mode (http://host/mediawiki) and scriptpath mode (https://host/w)
* Extension::Math 
Resolves fine!
* URL protocol (http or https) determines edit or rendered mode of wikipages

## Apache
* enable SSL and http 
* Enable mod_rewrite
* Determine if render or edit mode
Move file `DOT_htaccess` to the `wgArticlePath` directory (/w) and name it `.htaccess`
* Enable CORS 
Move file `DOT_htaccess_CORS` to the `wgScriptPath` directory (/mediawiki) and name it `.htaccess`

# Angular Usage

```
<input  [(ngModel)]="art" placeholder="Mediawiki article" #article>
<button (click)="getWikiPage()">Get WIKI page</button>

<!-- The rendered wiki page-->
<media-wiki [article]="art" [debug]=true ></media-wiki>
```


# Technical info

## WIKI math

During the Math rendering, an inline code is displayed which should be suppressed.

CSS class `mwe-math-mathtml-inline` is found in Math rendering. That definition does not exist in Angular. 

Add the class in file `styles\main.sccs`

```
.mwe-math-mathml-inline {
    /* display: inline !important; */ /* stylelint-disable-line declaration-no-important */
    /* My override !! */
    display: none; 
}
```