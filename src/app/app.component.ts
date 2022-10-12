import {Component} from '@angular/core';

import { FormControl } from '@angular/forms';
import * as path from 'path';
import * as fs from "fs";


//const fs = require('file-system')


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACKgENERATOR';
  name = new FormControl('');

}






