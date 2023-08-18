import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archiblad',
            description: 'Mon meilleur ami depuis tout petit !',
            createdDate: new Date(),
            snaps: 6,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            snapped: false
        },
        {
            id: 2,
            title: 'TeddyBear',
            description: 'Mon ami depuis tout petit !',
            createdDate: new Date(),
            snaps: 3,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            snapped: true,
            location: 'la campagne'
        },
        {
            id: 3,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snapped: false,
            snaps: 100,
            location: 'la montagne'
        },
        {
            id: 4,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 29,
            snapped: true
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById( faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(faceSnap){
            return faceSnap;
        }else{
            throw new Error('FaceSnap not found!');
        }
    }

    snapFaceSnapById( faceSnapId: number): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        if(faceSnap){
            if(faceSnap.snapped){
                faceSnap.snaps--;
                faceSnap.snapped = false;
            }else{
                faceSnap.snaps++;
                faceSnap.snapped = true;
            }
        }
    }

    addSnapFace(formValue: { title: string, description: string, imageUrl: string, location?: string }): void {
        this.faceSnaps.push({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
            snapped: false
        });
    }

    /*snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }*/
}