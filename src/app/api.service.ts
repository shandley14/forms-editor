import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Form } from "./form";
import { NavigationNode } from "./navigation-node";
import { environment } from "src/environments/environment";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = environment.uri;

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getForms(): Observable<Form[]> {
    return this.http
      .get<Form[]>(apiUrl + "forms?pageSize=1000&fields=id,code,name")
      .pipe(
        tap(forms => console.log("Fetch forms")),
        catchError(this.handleError("getForms", []))
      );
  }

  getForm(id: number): Observable<Form> {
    const url = `${apiUrl}/forms/${id}`;
    return this.http.get<Form>(url).pipe(
      tap(_ => console.log(`fetched form id=${id}`)),
      catchError(this.handleError<Form>(`getForm id=${id}`))
    );
  }

  addForm(form): Observable<Form> {
    return this.http.post<Form>(apiUrl, form, httpOptions).pipe(
      tap((form: Form) => console.log(`added form w/ id=${form.id}`)),
      catchError(this.handleError<Form>("addForm"))
    );
  }

  updateForm(id, form): Observable<any> {
    const url = `${apiUrl}forms`;
    return this.http.post(url, form, httpOptions).pipe(
      tap(_ => console.log(`updated form id=${id}`)),
      catchError(this.handleError<any>("updateForm"))
    );
  }

  deleteForm(id): Observable<Form> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Form>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted form id=${id}`)),
      catchError(this.handleError<Form>("deleteForm"))
    );
  }

  getNavigationNodes(): Observable<NavigationNode[]> {
    return this.http
      .get<NavigationNode[]>(
        apiUrl + "navigationNodes?pageSize=1000&fields=id,code,name"
      )
      .pipe(
        tap(navigationNodes => console.log("Fetch navigation-nodes")),
        catchError(this.handleError("getNavigationNodes", []))
      );
  }

  getNavigationNode(id: number): Observable<NavigationNode> {
    const url = `${apiUrl}/navigationNodes/${id}`;
    return this.http.get<NavigationNode>(url).pipe(
      tap(_ => console.log(`fetched navigationNode id=${id}`)),
      catchError(this.handleError<NavigationNode>(`getNavigationNode id=${id}`))
    );
  }

  addNavigationNode(navigationNode): Observable<NavigationNode> {
    return this.http
      .post<NavigationNode>(apiUrl, navigationNode, httpOptions)
      .pipe(
        tap((navigationNode: NavigationNode) =>
          console.log(`added navigationNode w/ id=${navigationNode.id}`)
        ),
        catchError(this.handleError<NavigationNode>("addNavigationNode"))
      );
  }

  updateNavigationNode(id, form): Observable<any> {
    const url = `${apiUrl}navigation-nodes`;
    return this.http.post(url, form, httpOptions).pipe(
      tap(_ => console.log(`updated form id=${id}`)),
      catchError(this.handleError<any>("updateNavigationNode"))
    );
  }

  deleteNavigationNode(id): Observable<NavigationNode> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<NavigationNode>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted form id=${id}`)),
      catchError(this.handleError<NavigationNode>("deleteNavigationNode"))
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
