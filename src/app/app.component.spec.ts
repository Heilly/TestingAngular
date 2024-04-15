import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from './avanzado/navbar/navbar.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NavbarComponent,
        RouterOutlet
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'pruebasUnitarias' title`, () => {
    expect(component.title).toEqual('pruebasUnitarias');
  });

  it('Debe de tener un router-outlet', () => {
    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet) );
    //const routerOutlet = document.querySelector('router-outlet');
    //console.log('routerOutlet', routerOutlet);
    //expect(routerOutlet).toBeTruthy();
    console.log('router-outlet',debugElement);

    expect(debugElement).not.toBeNull();
  });
  it('Debe de tener un link a la pagina de medicos', () => {
    const links = fixture.debugElement.queryAll( By.css('a[routerLink]'));
    const hasMedicoLink = links.some(link => link.nativeElement.getAttribute('routerLink') === '/medico');

    console.log('links', links);
    console.log('hasMedicoLink', hasMedicoLink);
    expect(hasMedicoLink).toBeTruthy()
  })
  
});
