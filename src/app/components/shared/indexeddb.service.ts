import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {

  private dbName = 'MyTestDB';
  private dbVersion = 1;
  private db!: IDBDatabase;
  constructor() { 
    this.initDB();
  }

  private initDB() {
    const request = indexedDB.open(this.dbName, this.dbVersion);

    request.onerror = () => {
      console.error('IndexedDB Error', request.error);
    };

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { autoIncrement: true });
      }
    };

    request.onsuccess = (event: Event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
      console.log('IndexedDB initialized');
    };
  }

  addUser(user: {fname: string, lname: string, mobileNo: number, emailId: string, password: string, country: string, state: string, city: string}): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction('users', 'readonly');
      const store = transaction.objectStore('users');

      const request = store.openCursor();
      let exist = false;

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          if (cursor.value.fname === user.fname) {
            exist = true;
            reject(new Error(`User with name ${user.fname} already exists!`));
            return;
          }
          cursor.continue();
        } else {
          if (!exist) {
            const writeTx = this.db.transaction('users', 'readwrite');
            const writeStore = writeTx.objectStore('users')
            const addRequest = writeStore.add(user);

            addRequest.onsuccess = () => resolve();
            addRequest.onerror = () => reject(addRequest.error);  
          }
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  getUser(emailId: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['users'], 'readonly');
      const store = transaction.objectStore('users');
      const request = store.openCursor();

      request.onsuccess = (event) => {
        console.log(event);
        const cursor = (event.target as IDBRequest).result;
        if(cursor) {
          if ((cursor.value.emailId === emailId) || (cursor.value.password === password)) {
            console.log(cursor.key, cursor.value);
            resolve(cursor.value);
            cursor.continue();
            return;
          }
          // cursor.continue();
        } else (
          resolve(null)
        )
      };
      request.onerror = () => reject(request.error);
    });
  }
}
