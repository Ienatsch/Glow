import { Injectable } from '@angular/core';
import { UrlBuilder } from '../../config/url-builder';
import { QueryStringParameters } from '../../config/query-string-parameters';
import { Constants } from '../../config/constants';

@Injectable()
export class ApiEndpointsService {
  constructor( private constants: Constants ) { }

  /* #region URL CREATOR */
  // URL
  private createUrl(
    action: string, 
    isMockAPI: boolean = false
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this.constants.API_MOCK_ENDPOINT :   
      this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string, 
    queryStringHandler?: 
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT, 
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
  
  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(
    action: string, 
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,  
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
  /* #endregion */

  public getUserEndpoint(): string {
    return this.createUrl('user');
  }

  public getFeedingEndpoint(): string {
    return this.createUrl('feeding');
  }
}