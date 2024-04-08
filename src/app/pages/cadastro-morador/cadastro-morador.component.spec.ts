import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMoradorComponent } from './cadastro-morador.component';

describe('CadastroMoradorComponent', () => {
  let component: CadastroMoradorComponent;
  let fixture: ComponentFixture<CadastroMoradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroMoradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroMoradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
