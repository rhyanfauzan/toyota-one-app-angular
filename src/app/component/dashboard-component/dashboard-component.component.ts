import { Component, ViewChild } from '@angular/core';
import { AppCardList } from '../../interfaces/common/appcardlist.interface';
import { ProgressbarComponentComponent } from '../partial/progressbar-component/progressbar-component.component';
import { AuthServiceService } from '../../service/auth-service.service';
import { User } from '../../interfaces/api-response/loginresponse.interface';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.css'
})
export class DashboardComponentComponent {
  imageUrls: string[] = [
    'https://tmna.aemassets.toyota.com/is/image/toyota/Carousel%20Banner%20Image%204.1:16x7Large?fmt=webp&_ts=1719253378902',
    'https://dealerimages.dealereprocess.com/image/upload/2756835',
    'https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/eee9d4ed-60db-4c2c-87bf-eba5c58633a6.jpg',
  ];
  cards: AppCardList[] = [];
  isLoading: boolean = false;
  message!: string;
  User!: User;
  searchAppTitle: string = '';
  @ViewChild(ProgressbarComponentComponent) progressComponent!: ProgressbarComponentComponent;
  filteredCards = [...this.cards];

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.fetchCards();
    this.User = this.authService.getUserLocalStorage();
  }

  private fetchCards(): void {
    this.cards = this.getCardsData();
    this.filteredCards = [...this.cards];
  }

  private getCardsData(): AppCardList[] {
    return [
      {
        imageUrl: 'assets/images/3in1.png',
        title: '3in1 App',
        description: 'Description or additional information about Application 1.',
        redirectUrl: 'http://umwtportal/tcs'
      },
      {
        imageUrl: 'assets/images/calendar.png',
        title: 'Calendar',
        description: 'Description or additional information about Application 1.',
        redirectUrl: 'http://umwtportal/tcs'
      },
      {
        imageUrl: 'assets/images/play.png',
        title: 'Google Play',
        description: 'Description or additional information about Application 1.',
        redirectUrl: 'http://umwtportal/tcs'
      },
      {
        imageUrl: 'assets/images/calendar.png',
        title: 'Calendar',
        description: 'Description or additional information about Application 1.',
        redirectUrl: 'http://umwtportal/tcs'
      },
      {
        imageUrl: 'assets/images/play.png',
        title: 'Google Play',
        description: 'Description or additional information about Application 1.',
        redirectUrl: 'http://umwtportal/tcs'
      },
    ];
  }

  onSearch(): void {
    const searchAppTitle = this.searchAppTitle.toLowerCase();
    this.filteredCards = this.cards.filter(card =>
      card.title.toLowerCase().includes(searchAppTitle)
    );
  }

  handleLoginClick(cardTitle: string, redirectUrl: string) {
    this.message = `Processing to open ${cardTitle}`;
    this.isLoading = true;
    this.progressComponent.playAnimate(this.isLoading);
    setTimeout(() => {
      this.isLoading = false;
      window.open(redirectUrl, '_blank');
    }, 1500);
  }
}
