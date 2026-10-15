import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteEstudiantes } from './reporte-estudiantes';

describe('ReporteEstudiantes', () => {
  let component: ReporteEstudiantes;
  let fixture: ComponentFixture<ReporteEstudiantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteEstudiantes],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteEstudiantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
