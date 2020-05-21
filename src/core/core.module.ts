import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Constants } from 'src/config/constants';
import { ApiHttpService } from 'src/app/services/api-http.service';
import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';


@NgModule({
  providers: [Constants, ApiHttpService, ApiEndpointsService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}