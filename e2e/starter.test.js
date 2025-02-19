describe('App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a Users screen as home screen', async () => {
    await waitFor(element(by.text('Users')))
      .toBeVisible()
      .withTimeout(3000);
  });

  it('should show network screen after tap', async () => {
    await waitFor(element(by.id('BottomTab.Network')))
      .toBeVisible()
      .withTimeout(3000);
    await element(by.id('BottomTab.Network')).tap();
    await expect(element(by.text('NetworkExample'))).toBeVisible();
  });
});
