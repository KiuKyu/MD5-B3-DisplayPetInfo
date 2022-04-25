import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'Pomeranian',
    image: 'https://file.hstatic.net/1000104513/file/flouffy-jxnpry3jpsq-unsplash_4921870f69d446e882fdc2e0333d8f78_grande.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
