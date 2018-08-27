import { DemoModule } from './demo.module';

describe('DemoModule', () => {
  let testModule: DemoModule;

  beforeEach(() => {
    testModule = new DemoModule();
  });

  it('should create an instance', () => {
    expect(demoModule).toBeTruthy();
  });
});
