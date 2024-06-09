import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuController, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline, settingsSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, personOutline, personSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, bagHandle, bagHandleOutline, homeOutline, cartOutline, cartSharp, homeSharp ,appsOutline,appsSharp} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {

  appStorage = localStorage;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home', role: 'all' },
    { title: 'Profile', url: '/profile', icon: 'person', role: 'all' },
    { title: 'Products', url: '/products', icon: 'cart', role: 'all' },
    { title: 'Events', url: '/events', icon: 'archive', role: 'all' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart', role: 'all' },
    { title: 'Categories', url: '/categories', icon: 'apps', role: 'admin' },
    { title: 'Workshops', url: '/workshop', icon: 'settings', role: 'all' },

  ];

  constructor(private menuCtrl: MenuController, private router: Router) {
    addIcons({ settingsOutline, settingsSharp, bagHandle, bagHandleOutline, homeSharp, homeOutline, cartOutline, cartSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, personOutline, personSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp ,appsOutline,appsSharp});
  }
    
  signOut() {
    this.menuCtrl.enable(true);
    localStorage.clear()
    this.router.navigate(["/login"])
  }

}
