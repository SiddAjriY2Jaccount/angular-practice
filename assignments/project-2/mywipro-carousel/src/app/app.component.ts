import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  slides = [
    {
      url: "https://pbs.twimg.com/media/EmEZXYvX0AEWwHv.jpg",
      announcement:
        "Wipro has announced the top 10 anime for the year 2020 and once again, Fullmetal Alchemist has come in at the number one spot. The top 10 winners were as follows: Fullmetal Alchemist, Slayer, Scandal, Parasite, Sentimental, Rain, Attack on Titan, The Golden Age and last but not least, Naruto."
    },
    {
      url: "https://pbs.twimg.com/media/EJGwCuWXkAMtB7y.jpg",
      announcement:
        "Please take a look at the Service Desk App on your MyWipro Application and drop some feedback to help us improve."
    },
    {
      url: "https://pbs.twimg.com/media/El2v67qX0AEgZQO.jpg",
      announcement:
        "Thierry Delaporte, the new CEO, shared few tips to improve productivity. It was a good session. Please find recording for the same in your inbox."
    }
  ];
}
