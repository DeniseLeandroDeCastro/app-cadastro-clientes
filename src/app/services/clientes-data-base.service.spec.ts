import { TestBed } from '@angular/core/testing';

import { ClientesDataBaseService } from './clientes-data-base.service';

describe('ClientesDataBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientesDataBaseService = TestBed.get(ClientesDataBaseService);
    expect(service).toBeTruthy();
  });
});
