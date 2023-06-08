import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockLoginService {
  login(username: string, password: string): Promise<boolean> {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      // Mock login logic
      const isAuthenticated = username === 'admin' && password === 'password';
      resolve(isAuthenticated);
    });
  }
}
