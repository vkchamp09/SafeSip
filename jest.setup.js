/* eslint-env jest */
jest.mock('react-native-webview', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockWebView = props => React.createElement(View, props, props.children);
  return {
    WebView: MockWebView,
    default: MockWebView,
  };
});

jest.mock('react-native-bluetooth-classic', () => ({
  default: {
    requestEnable: jest.fn().mockResolvedValue(true),
    isBluetoothEnabled: jest.fn().mockResolvedValue(true),
    getBondedDevices: jest.fn().mockResolvedValue([]),
    startDiscovery: jest.fn().mockResolvedValue([]),
    cancelDiscovery: jest.fn().mockResolvedValue(true),
    connectToDevice: jest.fn().mockResolvedValue({
      isConnected: jest.fn().mockResolvedValue(true),
      disconnect: jest.fn().mockResolvedValue(true),
      write: jest.fn().mockResolvedValue(true),
      onDataReceived: jest.fn(),
    }),
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => {
  const store = {};
  const api = {
    getItem: jest.fn(async k => (k in store ? store[k] : null)),
    setItem: jest.fn(async (k, v) => {
      store[k] = v;
    }),
    removeItem: jest.fn(async k => {
      delete store[k];
    }),
    clear: jest.fn(async () => {
      Object.keys(store).forEach(k => delete store[k]);
    }),
    getAllKeys: jest.fn(async () => Object.keys(store)),
    multiGet: jest.fn(async ks => ks.map(k => [k, store[k] ?? null])),
    multiSet: jest.fn(async kv => kv.forEach(([k, v]) => (store[k] = v))),
    multiRemove: jest.fn(async ks => ks.forEach(k => delete store[k])),
  };
  return { __esModule: true, default: api, ...api };
});
