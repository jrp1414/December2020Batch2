import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/services/product';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterText: string, ...filterColumns: string[]): any[] {
    // debugger; 
    if (filterText.length < 3) {
      return list;
    }
    // return list.filter((abc)=>
    //     (abc.productName.toLowerCase().indexOf(filterText.toLowerCase()) != -1) 
    //     || 
    //     (abc.productCode.toLowerCase().indexOf(filterText.toLowerCase()) != -1));

    let tempList: any[] = [];
    for (const column of filterColumns) {
      var filtered = list.filter((obj) => obj[column].toLowerCase().indexOf(filterText.toLowerCase()) != -1);
      // Array.prototype.push.apply(tempList,filtered);
      tempList =[...tempList,...filtered];
      // tempList.push(filtered);
    }

    return tempList;
  }
}
// export class FilterPipe implements PipeTransform {

//   transform(products: Product[], filterText:string ): Product[] {
//     if (filterText.length<3) {
//       return products;
//     }
//     return products.filter((abc)=>
//         (abc.productName.toLowerCase().indexOf(filterText.toLowerCase()) != -1) 
//         || 
//         (abc.productCode.toLowerCase().indexOf(filterText.toLowerCase()) != -1));
//   }
// }

// TestFunc(1);
// TestFunc(1,2);
// TestFunc(1,2,3);
// function TestFunc(...params){

// }


