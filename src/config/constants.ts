// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://localhost:44305/api';
    public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}