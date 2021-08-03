import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymap',
  templateUrl: './displaymap.component.html',
  styleUrls: ['./displaymap.component.scss']
})
export class DisplaymapComponent implements OnInit {

  lat: any;
  lng: any;
  start_end_mark = [];
  other_mark = [];
  current_mark = 0;
  lastValues: any;
  displayType = 1;
  latlng = [];
  latlngJson = [
    {
      "latitude": "16.8985",
      "longitude": "80.1033"
    },
    {
      "latitude": "16.9947",
      "longitude": "79.9750"
    },
    {
      "latitude": "17.1314",
      "longitude": "79.6336"
    },
    {
      "latitude": "17.0575",
      "longitude": "79.2684"
    },
    {
      "latitude": "17.1883",
      "longitude": "79.2000"
    },
    {
      "latitude": "17.2489",
      "longitude": "78.8968"
    },
    {
      "latitude": "17.7850",
      "longitude": "78.6867"
    },
    {
      "latitude": "17.3850",
      "longitude": "78.4867"
    }
  ];

  constructor() {
    //adding starting point
    let jsonData = JSON.stringify(this.latlngJson[0]);
    let values = this.jsonToArray(jsonData).map(x => +x);
    this.latlng.push(values);
    this.start_end_mark[0]= values;
    this.lat = values[0];
    this.lng = values[1];

    //adding destination point
    jsonData = JSON.stringify(this.latlngJson[this.latlngJson.length - 1]);
    values = this.jsonToArray(jsonData).map(x => +x);
    this.start_end_mark[1] = values;
  }

  ngOnInit() {
    setInterval(() => {
      // Api call
      // {
      //   () => this.getNext();
      // }
      this.getNext(); // comment it once api is attached
    }, 2000);
  }

  getNext() {
    if (this.current_mark < this.latlngJson.length) {
      const jsonData = JSON.stringify(this.latlngJson[this.current_mark]);
      const values = this.jsonToArray(jsonData).map(x => +x);
      this.lat = values[0];
      this.lng = values[1];
      this.latlng.push(values);
      if (this.latlng.length > 2 && (this.lat !== this.start_end_mark[1][0] && this.lng !== this.start_end_mark[1][1])) {
        //for custom marker purpose
        this.other_mark.push(values);
      }
      this.current_mark++;
    }
  }

  jsonToArray(JSON_Obj) {
    var obj = JSON.parse(JSON_Obj);
    var res = [];
    for (var i in obj)
      res.push(obj[i]);
    return res;
  }
}
