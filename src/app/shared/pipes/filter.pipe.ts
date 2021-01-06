import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText:string ): Product[] {
    if (filterText.length<3) {
      return value;
    }
  }

}
