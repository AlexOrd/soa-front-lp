import { Component, OnInit } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  comments: any[] = [
    {
      text: 'I made $10k in the first few months of signing up with homeIQ... it works!',
      companyLabel: '../../assets/author-label1.svg',
      name: 'Mike Keil',
      companyName: 'Goldstar Mortgage',
      photo: '../../assets/photo1.svg'
    },
    {
      text: 'Excellent tool. I have received 5 refis by offering this to my clients',
      companyLabel: '../../assets/author-label5.svg',
      name: 'Michael Woods',
      companyName: 'Movement Mortgage',
      photo: '../../assets/photo2.svg'
    },
    {
      text: 'HomeIQ changes the way we communicate effectively with our clients',
      companyLabel: '../../assets/author-label6.svg',
      name: 'Sonia McClellin',
      companyName: 'homeowners Financial',
      photo: '../../assets/photo3.svg'
    },
    {
      text: 'One of the best tools to grow your Realtor network.',
      companyLabel: '../../assets/author-label2.svg',
      name: 'James Frazier',
      companyName: 'Impact Home Loans',
      photo: '../../assets/photo4.svg'
    },
  ]
  
  videoComments: any[] = [
    {
      filePath: '../../',
      companyLabel: '../../assets/author-label1.svg',
      name: 'Mike Klein',
      companyName: 'Goldstar Mortgage'
    },
    {
      filePath: '../../',
      companyLabel: '../../assets/author-label2.svg',
      name: 'James Frazier',
      companyName: 'Impact Home Loans'
    },
    {
      filePath: '../../',
      companyLabel: '../../assets/author-label3.svg',
      name: 'Anthony Bitmayl',
      companyName: 'Goldstar Mortgage'
    },
    {
      filePath: '../../',
      companyLabel: '../../assets/author-label4.svg',
      name: 'Kyle Brown',
      companyName: 'Homeowners Financial Group'
    },
  ]
  
  companies: any[] = [
    {
      label: '../../assets/company1.svg'
    },
    {
      label: '../../assets/company2.svg'
    },
    {
      label: '../../assets/company3.svg'
    },
    {
      label: '../../assets/company4.svg'
    },
    {
      label: '../../assets/company5.svg'
    },
    {
      label: '../../assets/company6.svg'
    },
  ]
  // videoUrl = 'https://www.youtube.com/watch?v=1ozGKlOzEVc.'
  // safeURL: any;
  // constructor(videoURL: string, private _sanitizer: DomSanitizer){
  //   this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(videoURL);
//  }
  ngOnInit(): void {
  }

}
