import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public componentClassPrefix: string = 'footerComponent';


  public footerData = [
    { label: "Our Company Sites", links: ['Rocket Mortgage', 'Rocket Loans', 'Rocket Homes', 'Rocket Auto', 'Rocket Solar'] }, 
    { label: "Rocket Mortgagae", links: ['Your Loans', 'Legal Info', 'FAQs', 'Refer A Friend'] }, 
    { label: "About Us", links: ['Rocket Mortgagae', 'Careers', 'Disclosures And Licenses', 'Terms Of Use', 'Email and text Policy', 'Privacy Policy', 'Social Impact'] }, 
    { label: "Support", links: ['Share Your Screen', 'Opt Out', 'Site Accessibility'] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
