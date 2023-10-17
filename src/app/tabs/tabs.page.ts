import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { CommonModule } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController) { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }
}
