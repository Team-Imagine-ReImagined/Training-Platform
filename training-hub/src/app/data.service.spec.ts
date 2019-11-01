import { TestBed } from '@angular/core/testing'

import { DataService } from './data.service'

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService)
    expect(service).toBeTruthy()
  })

  it('should fetch a list of courses from API', () => {
    const service: DataService = TestBed.get(DataService)
    expect(service.courses).not.toEqual(null)
  })
})
