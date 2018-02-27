import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the VgapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VgapiProvider {
  
  apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MmQ1MDZkMC1kZjM1LTAxMzQtY2FkNi0wMjQyYWMxMTAwMDYiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNDg4MjExOTQ0LCJwdWIiOiJzZW1jIiwidGl0bGUiOiJ2YWluZ2xvcnkiLCJhcHAiOiI3MmQzYWQ0MC1kZjM1LTAxMzQtY2FkNS0wMjQyYWMxMTAwMDYiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.0CJFSsvgZOumMrSBUG7m_W9Ntm2PQgNC__XeR6U7dfw';
  urlPlayerSummary;
  
  constructor(public http: HttpClient) {
    console.log('Hello VgapiProvider Provider');
    
  }

  getPlayerSummary(serverLoc, playerName) {
    this.urlPlayerSummary = 'https://api.dc01.gamelockerapp.com/shards/'+serverLoc+'/players?filter[playerNames]=' + playerName;
    
    const headerDict = {
      'Authorization': 'Bearer '+this.apiKey,
      'Accept': 'application/vnd.api+json'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
   
    return this.http.get(
      this.urlPlayerSummary,
      requestOptions
    );
  }

}

// curl--request GET \
// --url 'https://api.dc01.gamelockerapp.com/shards/sg/players?filter[playerNames]=santadoge' \
// --header 'Accept: application/vnd.api+json' \
// --header 'Authorization: Bearer '