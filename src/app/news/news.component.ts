import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface News {
  categoryType?: string,
  description?: string,
  fullUrl?: string,
  id?: number,
  publishedDate?: number,
  title?: string,
  titleImageUrl?: string,
  url?: string
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<News[]>('https://webapi.autodoc.ru/api/news/1/10/')
      .subscribe(news =>  {
        this.news = news
        console.log(news)
      })
  }

}
