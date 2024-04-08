import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPorteirosComponent } from './cadastro-porteiros.component';

describe('CadastroPorteirosComponent', () => {
  let component: CadastroPorteirosComponent;
  let fixture: ComponentFixture<CadastroPorteirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPorteirosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPorteirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
