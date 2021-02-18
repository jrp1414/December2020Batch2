import { NgModule } from '@angular/core';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { MaxMinDirective } from './directives/max-min.directive';
import { UnlessDirective } from './directives/unless.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
    imports: [],
    exports: [
        ShortenPipe,
        FilterPipe,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective,
        MaxMinDirective
    ],
    declarations: [
        ShortenPipe,
        FilterPipe,
        BasicHighlightDirective,
        BetterHighlightDirective,
        UnlessDirective,
        MaxMinDirective
    ],
    providers: [],
})
export class SharedModule { }
