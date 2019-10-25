import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductI } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productCollection: AngularFirestoreCollection<ProductI>;
  private all: Observable<ProductI[]>;

  constructor(db: AngularFirestore) {
    this.productCollection = db.collection<ProductI>('products');
    this.all = this.productCollection.snapshotChanges().pipe(
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
  /*otros metdos para pasar al servicio de productos*/
  getProduct(id: string){
    return this.productCollection.doc<ProductI>(id).valueChanges();
  }

  updateProduct(product:ProductI, id: string){
    return this.productCollection.doc(id).update(product);
  }
  addProduct(product: ProductI)
  {
    return this.productCollection.add(product);
  }
  deleteProduct(id: string)
  {
    return this.productCollection.doc(id).delete();
  }
}
