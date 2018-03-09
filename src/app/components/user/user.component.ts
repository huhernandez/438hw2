import { Component, OnInit } from '@angular/core';

import {SquaddataService} from '../../services/squaddata.service';

import { SquadMember} from '../../models/squad-member';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  squadMembers: SquadMember[];
  constructor(private SquadService: SquaddataService ) { 
    console.log('constructor works');
  }

  ngOnInit() {
    console.log('onInit works');
  }
  
  getSquadMembers() {
    this.SquadService.getSquad().subscribe(
      data => this.squadMembers = data
      );
  }

}
