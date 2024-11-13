import { colors } from '@/styles/colors'
import { StyleSheet } from 'react-native'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    padding: 16
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    flex: 1
  }
})