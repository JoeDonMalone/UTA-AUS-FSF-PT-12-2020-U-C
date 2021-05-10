let db;
// create a new db request for a "BudgetDB" database.
const request = indexedDB.open("BudgetDB", 1);

request.onupgradeneeded = event => {
  // create object store called "BudgetStore" and set autoIncrement to true
  db = event.target.result;
  const dbStore = db.createObjectStore('budgetStore', {keyPath: 'index', autoIncrement: true});
  // dbStore.createIndex('index')
  
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(['budgetStore'], "readwrite");
  const dbStore = transaction.objectStore("budgetStore");
  budgetStore.Add(record);
  // create a transaction on the pending db with readwrite access
  // access your pending object store
  // add record to your store with add method.
}

function checkDatabase() {
  const transaction = db.transaction(['budgetStore'], "readwrite");
  const dbStore = transaction.objectStore("budgetStore");
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
