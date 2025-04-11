import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'princeQrCodeGenerator';
  public url: string = 'https://prince-javascript-compiler.vercel.app/';
  public myAngularxQrCode: string = this.url;
  public qrCodeDownloadLink: SafeUrl = '';
  public selectedLevel: any = 'Q';
  selectedLogo: any = ''

  public qrLevels = [
    { name: 'Q', percent: 25, image: 'assets/level-q.png' },
    { name: 'H', percent: 30, image: 'assets/level-h.png' },
    { name: 'M', percent: 15, image: 'assets/level-m.png' },
    { name: 'L', percent: 7, image: 'assets/level-l.png' }
  ];

  public logoList = [
    { image: 'assets/logonone.png' },
    { image: 'assets/logo1.png' },
    { image: 'assets/logo2.png' },
    { image: 'assets/logo3.png' },
    { image: 'assets/logo4.png' },
    { image: 'assets/logo5.png' },
    { image: 'assets/logo6.png' },
    { image: 'assets/logo7.png' },
    { image: 'assets/logo8.png' },
    { image: 'assets/logo9.png' },
    { image: 'assets/logo10.png' },
    { image: 'assets/logo11.png' },
  ]

  onChangeURL(url: SafeUrl) {
    if (this.selectedLogo) {
      const canvas: any = document.querySelector('canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const logo = new Image();
      logo.crossOrigin = 'anonymous';
      logo.src = this.selectedLogo;
      logo.onload = () => {
        const canvasSize = canvas.width;
        const logoSize = 30;
        const x = (canvasSize - logoSize) / 2;
        const y = (canvasSize - logoSize) / 2;
        ctx.drawImage(logo, x, y, logoSize, logoSize);
        const updatedUrl = canvas.toDataURL('image/png');
        this.qrCodeDownloadLink = updatedUrl;
      };
    } else {
      this.qrCodeDownloadLink = url;
    }
  }

  changeUrl(url: string) {
    this.myAngularxQrCode = url;
  }

  selectLevel(level: string) {
    this.selectedLevel = level;
  }

  clickLogo(logo: any) {
    logo === 'assets/logonone.png' ? this.selectedLogo = "" : this.selectedLogo = logo
  }
}