# Angular Basics

## Introduction to Angular
Angular is a **TypeScript-based framework** for building **web applications**. It provides a structured approach to developing dynamic single-page applications (SPAs).

### Features of Angular:
- **Component-Based Architecture**: Applications are built using reusable components.
- **Two-Way Data Binding**: Syncs data between the model and view.
- **Directives**: Extends HTML with custom behavior.
- **Dependency Injection**: Manages services efficiently.
- **Routing**: Enables navigation between pages.

---

## Setting Up an Angular Project

### Install Angular CLI
```sh
npm install -g @angular/cli
```

### Create and Run a New Angular Project
```sh
ng new my-angular-app
cd my-angular-app
ng serve
```

This will start the development server at `http://localhost:4200/`.

---

## Angular Components
Angular applications are built using components.

### Creating a Component
```sh
ng generate component my-component
```

### Component Structure
A component consists of:
- **HTML Template (`.html`)** - Defines the UI.
- **TypeScript File (`.ts`)** - Defines the logic.
- **CSS/SCSS File (`.css` or `.scss`)** - Defines styles.

### Example Component:
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello, Angular!</h1>',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {}
```

To use this component in another file:
```html
<app-hello></app-hello>
```

---

## Data Binding in Angular
Angular supports different types of data binding:

### 1. **Interpolation (`{{ }}`)**
```html
<p>{{ message }}</p>
```
```ts
export class AppComponent {
  message = "Hello, Angular!";
}
```

### 2. **Property Binding (`[property]`)**
```html
<input [value]="username">
```

### 3. **Event Binding (`(event)`)**
```html
<button (click)="sayHello()">Click Me</button>
```
```ts
sayHello() {
  alert("Hello, Angular!");
}
```

### 4. **Two-Way Binding (`[(ngModel)]`)**
Requires importing `FormsModule` in `app.module.ts`:
```ts
import { FormsModule } from '@angular/forms';
```
Then in HTML:
```html
<input [(ngModel)]="username">
<p>You entered: {{ username }}</p>
```

---

## Angular Directives
Directives modify HTML elements' behavior.

### **Structural Directives** (`*ngIf`, `*ngFor`)
```html
<p *ngIf="isVisible">This text is conditionally visible.</p>
```
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

### **Attribute Directives** (`[ngStyle]`, `[ngClass]`)
```html
<p [ngStyle]="{'color': 'blue'}">Styled Text</p>
```

---

## Angular Services and Dependency Injection
Services provide shared functionality across components.

### Creating a Service
```sh
ng generate service my-service
```

### Example Service (`my-service.service.ts`):
```ts
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class MyService {
  getMessage() {
    return "Hello from Service!";
  }
}
```

### Using the Service in a Component
```ts
import { MyService } from './my-service.service';
export class MyComponent {
  constructor(private myService: MyService) {}
  message = this.myService.getMessage();
}
```

---

## Angular Routing
Angular provides a built-in routing module for navigation.

### Enable Routing in `app.module.ts`
```ts
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### Adding Navigation Links
```html
<a routerLink="/home">Home</a>
<a routerLink="/about">About</a>
```

### Displaying Routed Content
```html
<router-outlet></router-outlet>
```

---

## Forms in Angular

### Template-Driven Forms (Simple Approach)
```html
<form #userForm="ngForm" (ngSubmit)="submitForm(userForm)">
  <input name="username" ngModel required>
  <button type="submit">Submit</button>
</form>
```

### Reactive Forms (Advanced Approach)
```ts
import { FormGroup, FormControl } from '@angular/forms';

export class AppComponent {
  userForm = new FormGroup({
    username: new FormControl('')
  });
}
```

```html
<form [formGroup]="userForm">
  <input formControlName="username">
</form>
```

---

## HTTP Requests in Angular
Angular uses `HttpClient` for making API requests.

### Enable `HttpClientModule` in `app.module.ts`
```ts
import { HttpClientModule } from '@angular/common/http';
@NgModule({ imports: [HttpClientModule] })
export class AppModule {}
```

### Example GET Request
```ts
import { HttpClient } from '@angular/common/http';
export class MyComponent {
  constructor(private http: HttpClient) {}
  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => console.log(data));
  }
}
```

---

## Angular State Management (NgRx)
NgRx is used for managing global state in Angular applications.

### Install NgRx
```sh
npm install @ngrx/store
```

### Define a Reducer
```ts
import { createReducer, on } from '@ngrx/store';
const initialState = { count: 0 };
export const counterReducer = createReducer(
  initialState,
  on({ type: 'increment' }, (state) => ({ count: state.count + 1 }))
);
```

### Use the Store in Components
```ts
import { Store } from '@ngrx/store';
export class CounterComponent {
  constructor(private store: Store<{ count: number }>) {}
  increment() {
    this.store.dispatch({ type: 'increment' });
  }
}
```

---

## Conclusion
Angular is a **powerful framework** for building scalable web applications. Mastering **components, directives, services, routing, forms, and state management** will help in developing robust applications efficiently.

