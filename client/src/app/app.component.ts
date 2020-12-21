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
    let req_data ={
      "action":"search",
      "data":{
        "runs":"1"
      },
      "limit":0
    }
    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
      this.data=dat;

    })

  }
  onCreateConfirm(event){
    let req_data={
      "action":"insert",
      "data":{
        "name":event.newData.name,
        "tweet":event.newData.tweet,
        "hearts":event.newData.hearts,
        "comments":event.newData.comments,
        "retweets":event.newData.retweets
      },
      "limit":0
    }

    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
      event.confirm.resolve();

    })
  }

  onDeleteConfirm(event){
    let req_data={
      "action":"delete",
      "where":{
        "name":event.data.name
      },
      "limit":0
    }
    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
      event.confirm.resolve();

    })
  }

  onEditConfirm(event){
    let req_data={
      "action":"update",
      "data":{
        "tweet":event.newData.tweet,
        "hearts":event.newData.hearts,
        "comments":event.newData.comments,
        "retweets":event.newData.retweets
      },
      "where":{
        "name":event.data.name
      },
      "limit":0
    }

    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
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

    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
      this.data=dat

    })
  }

  retweetSortDsc(){
    let req_data={
      "action":"search",
      "data":{
        "retweets":"-1"
      },
      "limit":0
    }

    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
      this.data=dat

    })
  }

  TopComments(){
    let req_data={
      "action":"search",
      "data":{
        "comments":"-1"
      },
      "limit":5
    }

    this.http.post('http://localhost:3000/action',req_data).subscribe((dat)=>{
      this.data=dat

    })
  }
}
