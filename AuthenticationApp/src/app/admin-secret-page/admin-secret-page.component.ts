import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-admin-secret-page',
  templateUrl: './admin-secret-page.component.html',
  styleUrls: ['./admin-secret-page.component.css']
})
export class AdminSecretPageComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
  }

}
