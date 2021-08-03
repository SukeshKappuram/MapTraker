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
  latlng = [];
  latlngJson = [
    {
      "latitude": "17.39913952159207", "longitude": "78.50626926257453"
    },
    {
      "latitude": "17.397738315419932", "longitude": "78.50464330108838"
    },
    {
      "latitude": "17.397051002153813", "longitude": "78.50392303860723"
    },
    {
      "latitude": "17.396099832642925", "longitude": "78.50319004328982"
    },
    {
      "latitude": "17.395834441687292", "longitude": "78.50351872040119"
    },
    {
      "latitude": "17.39547254430894", "longitude": "78.50384739751254"
    },
    {
      "latitude": "17.39553763030646", "longitude": "78.50396368336156"
    },
    {
      "latitude": "17.39495557519329", "longitude": "78.50447197600903"
    },
    {
      "latitude": "17.394664546942018", "longitude": "78.5049040247594"
    },
    {
      "latitude": "17.394543285033983", "longitude": "78.50520900034789"
    },
    {
      "latitude": "17.394470527850572", "longitude": "78.50546314667163"
    },
    {
      "latitude": "17.394397770638204", "longitude": "78.50584436615723"
    },
    {
      "latitude": "17.394397770638204", "longitude": "78.50650514659897"
    },
    {
      "latitude": "17.394325013396905", "longitude": "78.5069626099817"
    },
    {
      "latitude": "17.394252256126652", "longitude": "78.50752173189393"
    },
    {
      "latitude": "17.39420375126375", "longitude": "78.50808085380616"
    },
    {
      "latitude": "17.394130993945254", "longitude": "78.50851290255652"
    },
    {
      "latitude": "17.393907481033327", "longitude": "78.51059686745832"
    },
    {
      "latitude": "17.393933733799706", "longitude": "78.51054279672061"
    },
    {
      "latitude": "17.393872304424505", "longitude": "78.51085393297565"
    },
    {
      "latitude": "17.393728969135488", "longitude": "78.51087539064841"
    },
    {
      "latitude": "17.39338086868024", "longitude": "78.51087539064841"
    },
    {
      "latitude": "17.392899669901226", "longitude": "78.51086466181204"
    },
    {
      "latitude": "17.39255156786768", "longitude": "78.5108861194848"
    },
    {
      "latitude": "17.392284947290246", "longitude": "78.51087678657618"
    },
    {
      "latitude": "17.39123731433257", "longitude": "78.51101468601176"
    },
    {
      "latitude": "17.391125276515538", "longitude": "78.51102086521315"
    },
    {
      "latitude": "17.39106041248483", "longitude": "78.51103322361594"
    },
    {
      "latitude": "17.39104861899844", "longitude": "78.51103322361557"
    },
    {
      "latitude": "17.390883510442226", "longitude": "78.51106411962252"
    },
    {
      "latitude": "17.3906476408177", "longitude": "78.51110737403222"
    },
    {
      "latitude": "17.39048253189959", "longitude": "78.51113209083778"
    },
    {
      "latitude": "17.390388183879466", "longitude": "78.51113209083778"
    },
    {
      "latitude": "17.39030562932195", "longitude": "78.51114444924056"
    },
    {
      "latitude": "17.390170003896582", "longitude": "78.51114444924056"
    },
    {
      "latitude": "17.390046171898653", "longitude": "78.51115680764335"
    },
    {
      "latitude": "17.389910546280927", "longitude": "78.51115680764335"
    },
    {
      "latitude": "17.389751333450363", "longitude": "78.51117534524187"
    },
    {
      "latitude": "17.389556739827796", "longitude": "78.51117534524187"
    },
    {
      "latitude": "17.38942111384724", "longitude": "78.51119388284603"
    },
    {
      "latitude": "17.389267797400326", "longitude": "78.51119388284603"
    },
    {
      "latitude": "17.38909089364807", "longitude": "78.51119388284603"
    },
    {
      "latitude": "17.389004353276327", "longitude": "78.5112074974386"
    },
    {
      "latitude": "17.388884781084247", "longitude": "78.51120370051154"
    },
    {
      "latitude": "17.388790572635447", "longitude": "78.51120370051154"
    },
    {
      "latitude": "17.38870723435183", "longitude": "78.51118471587627"
    },
    {
      "latitude": "17.388616649209602", "longitude": "78.51118471587402"
    },
    {
      "latitude": "17.388366634007216", "longitude": "78.51116573123875"
    },
    {
      "latitude": "17.38823619115731", "longitude": "78.51115813738463"
    },
    {
      "latitude": "17.388214450673285", "longitude": "78.51116193431169"
    },
    {
      "latitude": "17.388084007714873", "longitude": "78.51115054353053"
    },
    {
      "latitude": "17.38799342226305", "longitude": "78.51113915275076"
    },
    {
      "latitude": "17.387841238618698", "longitude": "78.51112016811548"
    },
    {
      "latitude": "17.387718042242458", "longitude": "78.51109738655316"
    },
    {
      "latitude": "17.387678184573574", "longitude": "78.51110498040727"
    },
    {
      "latitude": "17.387679673604595", "longitude": "78.51109154025798"
    },
    {
      "latitude": "17.387629150101585", "longitude": "78.5111213130574"
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
      if (this.latlng.length > 2) {
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
