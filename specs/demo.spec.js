describe('App screen', () => {
  beforeAll(async () => {
    await device.launchApp({
      launchArgs: { detox: true },
      permisions: { userTracking: 'YES' },
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display basic text', async () => {
    await expect(element(by.id('app-text'))).toBeVisible();
  });
});
