export 
function checkForIndexedDb() {
    window.indexedDB =
      window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  
    window.IDBTransaction =
      window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  
    if (!window.indexedDB) {
      console.log("Your browser doesn't support a stable version of IndexedDB.");
      return false;
    }
    return true;
  }

//   function checkForIndexedDb() {
//     window.indexedDB =
//       window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  
//     window.IDBTransaction =
//       window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
//     window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
  
//     if (!window.indexedDB) {
//       console.log("Your browser doesn't support a stable version of IndexedDB.");
//       return false;
//     }
//     return true;
//   }