'use strict';

// 1. printIndices
function printIndices(items) {
  for(const item in items){
    console.log(item);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = [];
  for (const i in items){
    if (i % 2 === 0){
      result.push(items[i]);

    }
  }
  return result;
}

// 3. smallestNItems
function smallestNItems(items, n) {
  let sortedItems = items.sort();
  let sortedNItems = sortedItems.slice(0,n);
  return sortedNItems.reverse();
}
