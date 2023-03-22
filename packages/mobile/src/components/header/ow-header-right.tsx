import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OWButtonIcon from '../button/ow-button-icon';
import { useTheme } from '@src/themes/theme-provider';
import { observer } from 'mobx-react-lite';
import { useStore } from '@src/stores';
interface IOWHeaderRightProps {
  onTransaction: () => void;
  onScan: () => void;
}
const OWHeaderRight = observer(
  ({ onTransaction, onScan }: IOWHeaderRightProps) => {
    const { colors } = useTheme();
    const { notificationStore } = useStore();
    return (
      <View style={styles.btnContainer}>
        <OWButtonIcon
          style={styles.btnHistory}
          sizeIcon={24}
          onPress={onTransaction}
          name={
            notificationStore?.getReadNotifications?.length >=
            notificationStore?.getTotal
              ? 'history-1'
              : 'history'
          }
          colorIcon={colors['purple-700']}
        />
        <OWButtonIcon
          style={styles.btnScan}
          colorIcon={colors['purple-700']}
          sizeIcon={24}
          onPress={onScan}
          name="scan"
        />
      </View>
    );
  }
);

export default OWHeaderRight;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    flex: 1
  },
  btnHistory: {
    width: '50%'
  },
  btnScan: {
    paddingRight: 20,
    width: '50%'
  }
});
