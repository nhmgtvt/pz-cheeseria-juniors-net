import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CheesesTabComponent } from './cheeses-tab.component';

describe('CheesesTabComponent', () => {
  let component: CheesesTabComponent;
  let fixture: ComponentFixture<CheesesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheesesTabComponent],
      //provide mock data to test 'should create'
      providers: [
        { provide: MatDialog, useValue: {} },
     ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheesesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
