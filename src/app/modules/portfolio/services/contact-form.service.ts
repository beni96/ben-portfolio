import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, last, retry, tap } from 'rxjs/operators';
import { HttpMethod, IHttpHeaders, IHttpRequest } from '../interfaces/http';
import { SendEmailRequest } from '../interfaces/contact';

const DEFAULT_HEADERS: IHttpHeaders = { Accept: 'application/json' };

const DEFAULT_METHOD: HttpMethod = 'POST';

const DEFAULT_URL = 'https://formspree.io/f/xwkwwjpr';

/**
 * Provides client/server communication interface via HTTP client.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private retryCount = 1;

  constructor(private http: HttpClient) {}

  sendRequest<T>(request: IHttpRequest, retryCount = this.retryCount) {
    const { method, url, options } = request;
    return this.http.request<T>(method, url, options).pipe(
      retry(retryCount),
      tap((respone) =>
        console.log(`HttpService.request \nrequest: ${JSON.stringify(request, null, 2)} \nresponse: ${JSON.stringify(respone, null, 2)}`)
      ),
      last(),
      catchError((error) => this.handleError(method, url, options, error))
    );
  }

  private handleError(method: HttpMethod, url: string, options: object, error: any) {
    console.error('Http error', { method, url, options, error });
    return throwError(error);
  }

  generateRequest(body: SendEmailRequest): IHttpRequest {
    return {
      method: DEFAULT_METHOD,
      url: DEFAULT_URL,
      options: { body, headers: DEFAULT_HEADERS },
    };
  }
}
