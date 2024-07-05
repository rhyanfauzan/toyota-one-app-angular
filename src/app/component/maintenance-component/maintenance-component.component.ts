import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';
import { MaintenanceService } from '../../service/maintenance.service';
import { Router } from '@angular/router';
import { CommonResponse } from '../../interfaces/api-response/commonresponse.interface';
import { MaintenanceResponse } from '../../interfaces/api-response/maintenance.interface';

@Component({
  selector: 'app-maintenance-component',
  templateUrl: './maintenance-component.component.html',
  styleUrl: './maintenance-component.component.css'
})
export class MaintenanceComponentComponent implements AfterViewInit, OnInit {
  @ViewChild('lottieAnimation', { static: false }) lottieAnimation!: ElementRef;

  constructor(private maintenanceService: MaintenanceService, private router: Router){}

  ngOnInit():void{
    this.maintenanceCheck();
  }

  ngAfterViewInit(): void {
    if (this.lottieAnimation && lottie && typeof lottie.loadAnimation === 'function') {
      const animation: AnimationItem = lottie.loadAnimation({
        container: this.lottieAnimation.nativeElement,
        renderer: 'svg', // Choose the renderer: svg, canvas, html
        loop: true,
        autoplay: true,
        path: 'assets/images/construction.json' // Path to your animation JSON file
      });
    }
  }

  maintenanceCheck(): void {
    this.maintenanceService.getMaintenanceResponse().subscribe(
      (response: CommonResponse<MaintenanceResponse>) => {
        if (response.data?.maintenance === false) {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error('Error fetching maintenance response:', error);
      }
    );
  }
}
