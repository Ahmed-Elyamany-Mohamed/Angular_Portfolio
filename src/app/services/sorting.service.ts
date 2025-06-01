import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  constructor() {}
  // sort(array: any[], property: string, order: 'asc' | 'desc' = 'asc'): any[] {
  //   return array.sort((a, b) => {
  //     if (a[property] < b[property]) {
  //       return order === 'asc' ? -1 : 1;
  //     }
  //     if (a[property] > b[property]) {
  //       return order === 'asc' ? 1 : -1;
  //     }
  //     return 0;
  //   });

  // }

  sort(array: any[], method: string): any[] {
    const sortedArray = [...array];
    if (!sortedArray[0]?.date) {
      console.warn('Missing date fields:', sortedArray);
      return sortedArray;
    }

    switch (method) {
      case 'latest':
        return sortedArray.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      case 'oldest':
        return sortedArray.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      default:
        return sortedArray;
    }
  }
}
