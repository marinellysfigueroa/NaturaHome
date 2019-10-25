import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductI } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private newCollection: AngularFirestoreCollection<ProductI>;
  private all: Observable<ProductI[]>;

  constructor(db: AngularFirestore) {
    this.newCollection = db.collection<ProductI>('new_products');
    this.all = this.newCollection.snapshotChanges().pipe(
      map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = data.id;
            return { id, ...data };
          });
        }
      )
    );
  }
  getAll()
  {
    return this.all;
  }
  
}
