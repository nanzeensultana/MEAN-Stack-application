import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-hw3';
   data : any  = []
settings = {
  add:{
  confirmCreate:true
  },
  delete: {
    confirmDelete: true,
  },
  edit:{
    confirmSave: true,
  },
columns: {
  name: {
    title: 'Full Name',
    editable:false
  },
  tweet: {
    title: 'Tweet',
    editable:true
  },
  retweets: {
    title: 'ReTweets Count',
    editable:true
  },
  hearts: {
    title: 'Heart Count',
    editable:true
  },
  comments: {
    title: 'Comment Count',
    editable:true
  }

}

};

  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get('http://localhost:3000/all').subscribe((dat)=>{
      this.data=dat;

    })

  }
  onCreateConfirm(event){
    let req_data={
      "data":{
        "name":event.newData.name,
        "tweet":event.newData.tweet,
        "hearts":event.newData.hearts,
        "comments":event.newData.comments,
        "retweets":event.newData.retweets
      },
      "limit":0
    }

    this.http.post('http://localhost:3000/insert',req_data).subscribe((dat)=>{
      event.confirm.resolve();

    })
  }

  onDeleteConfirm(event){
    let req_data={
      "data":{
        "name":event.data.name
      },
      "limit":0
    }
    this.http.post('http://localhost:3000/delete',req_data).subscribe((dat)=>{
      event.confirm.resolve();

    })
  }

  onEditConfirm(event){
    let req_data={
      "data":{
        "tweet":event.newData.tweet,
        "hearts":event.newData.hearts,
        "comments":event.newData.comments,
        "retweets":event.newData.retweets
      },
      "where":{
        "name":event.data.name
      }
    }

    this.http.post('http://localhost:3000/update',req_data).subscribe((dat)=>{
      event.confirm.resolve();

    })
  }

  retweetSortAsc(){
    let req_data={
      "action":"search",
      "data":{
        "retweets":"1"
      },
      "limit":0
    }

    this.http.get('http://localhost:3000/searchRetweets').subscribe((dat)=>{
      this.data=dat

    })
  }

  TopComments(){
    this.http.get('http://localhost:3000/searchComments').subscribe((dat)=>{
      this.data=dat

    })
  }
}
