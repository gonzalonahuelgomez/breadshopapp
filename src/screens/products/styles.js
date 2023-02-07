import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Bitter-Bold',
    color: THEME.colors.title,
    padding: 10,
  },
  contentList: {
    flex: 1,
  },
  contNoStock: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNoStock: {
    fontSize: 14,
    fontFamily: 'Bitter-Regular',
    color: THEME.colors.title,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
