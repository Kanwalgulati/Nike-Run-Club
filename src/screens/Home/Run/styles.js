import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

export default styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  metricValue: {
    fontWeight: 'bold',
    fontSize: 42,
    color: 'black',
    borderBottomWidth: 1,
    marginBottom: 8,
    alignSelf:'center'
  },
  KMStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
  },
  bottomContainer: {justifyContent: 'space-between', alignItems: 'center'},
  avatarTitle: {fontSize: 28, color: '#000', fontWeight: 'bold'},
  avatarContainer: {backgroundColor: colors.startButton},
  distanceContainer: {
    padding: 8,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: colors.borderLightGrey,
    marginTop: 28,
  },
  distanceText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
});
