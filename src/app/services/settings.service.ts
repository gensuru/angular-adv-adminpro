import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    console.log('Settings Service');
    this.cambiarColor();
   }

   cambiarColor(){
    if(localStorage.getItem('color')){
      const url = localStorage.getItem('color')
      this.linkTheme.setAttribute('href', url);
    }else{
      const url = `./assets/css/colors/blue.css`;
      this.linkTheme.setAttribute('href', url);
    }
   }

   changeTheme(theme: string){
    
    const url = `./assets/css/colors/${ theme }.css`

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('color', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(){

    const links = document.querySelectorAll(".selector");

    links.forEach(elem =>{
      
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');

      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`; 
      
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }

    });
  }
}
