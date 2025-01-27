"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
const styles = _reactNative.StyleSheet.create({
  content: {
    overflow: 'hidden'
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  header: {
    backgroundColor: '#f5f5f7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    height: 80
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  indicator: {
    marginLeft: 12
  }
});
exports.styles = styles;
//# sourceMappingURL=styles.js.map