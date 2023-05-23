import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

interface Styles {
  container: ViewStyle;
  btn: (name: string, activeTab: string) => ViewStyle;
  btnText: (name: string, activeTab: string) => TextStyle;
}
//@ts-ignore
const styles = StyleSheet.create<Styles>({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.primary : '#F3F4F8',
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: 'DMMedium',
    fontSize: SIZES.small,
    color: name === activeTab ? '#C3BFCC' : '#AAA9B8',
  }),
});

export default styles;
