import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuController, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heartOutline, heartSharp, archiveOutline, archiveSharp, personOutline, personSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bagHandle, bagHandleOutline, homeOutline, cartOutline, cartSharp, homeSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Profile', url: '/folder/profile', icon: 'person' },
    { title: 'Products', url: '/products', icon: 'cart' },
    { title: 'Events', url: '/folder/events', icon: 'archive' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
  ];

  constructor(private menuCtrl: MenuController, private router: Router) {
    addIcons({ bagHandle, bagHandleOutline, homeSharp, homeOutline, cartOutline, cartSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, personOutline, personSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
    
  signOut() {
    this.menuCtrl.enable(true);
    this.router.navigate(["/login"])
  }

}
