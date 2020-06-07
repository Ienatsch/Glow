import { Component, OnInit } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service';
import { ApiHttpService } from '../services/api-http.service';

@Component({
  selector: 'glow-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent implements OnInit  {

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService) { }

  ngOnInit() {
    this.apiHttpService.get(this.apiEndpointsService.getUserEndpoint()).subscribe((result) => {
      
    });
  }

}
