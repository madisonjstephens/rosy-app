import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
    feeds = [
        "http://ejw.sagepub.com/rss/recent.xml",
        "http://feeds.feedburner.com/FeministDailyNews",
        "http://rss.medicalnewstoday.com/womens_health-obgyn.xml"
    ];
    feed: any[] = [];

    constructor(public navCtrl: NavController) {
        
    }
    
    ngOnInit() {
        this.feeds.forEach((feed) => {
            let tempFeed = new window['google'].feeds.Feed(feed);
            tempFeed.load((result) => {
                if (!result.error) {
                    for (let i = 0; i < result.feed.entries.length; i++) {
                        let entry = result.feed.entries[i];
                        this.feed.push({
                            title: entry.title,
                            author: entry.author,
                            link: entry.link,
                            articledate: entry.publishedDate
                        });
                    }
                }
            });
        });
    }
    
    openArticle(link) {
        window.open(link);
    }
   
    get todayDate() {
        let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        
        let today = new Date();
        let day = days[today.getDay()];
        let month = months[today.getMonth()];
        let date = today.getDate();
        return day + ', ' + month + ' ' + date + this.dateSuffix(date);
    }
    
    dateSuffix(date: number) {
        if (date == 1 || date == 21 || date == 31) {
            return 'st';
        } else if (date == 2 || date == 22) {
            return 'nd';
        } else if (date == 3 || date == 23) {
            return 'rd';
        } else {
            return 'th';
        }
    }
}
