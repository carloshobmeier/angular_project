import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAvisosComponent } from './cadastro-avisos.component';

describe('CadastroAvisosComponent', () => {
  let component: CadastroAvisosComponent;
  let fixture: ComponentFixture<CadastroAvisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroAvisosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
