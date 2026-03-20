import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Presentation } from './presentation.component';
import { provideRouter } from '@angular/router';

describe('Presentation Component', () => {
  let component: Presentation;
  let fixture: ComponentFixture<Presentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presentation],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Presentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el router-outlet', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
