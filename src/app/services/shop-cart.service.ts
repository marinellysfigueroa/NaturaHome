import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductI } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {
  private shopCartCollection: AngularFirestoreCollection<ProductI>;
  private all: Observable<ProductI[]>;
  private total : Number;

  constructor(db: AngularFirestore) { 
    this.shopCartCollection = db.collection<ProductI>('shop_cart');
    this.all = this.shopCartCollection.snapshotChanges().pipe(
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
