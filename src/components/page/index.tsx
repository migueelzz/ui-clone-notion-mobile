import { Text, TouchableOpacity, View } from 'react-native'
import { s } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

type PageProps = {
  data: {
    id: string
    title: string
  }
}

export function Page({ data }: PageProps) {
  return (
    <View style={s.container}>
      <Feather name='chevron-right' size={20} color={colors.gray[300]} />
      <Feather name='file-text' size={20} color={colors.gray[300]} />

      <Text style={s.title}>{data.title}</Text>

      <TouchableOpacity activeOpacity={0.7}>
        <Feather name='plus' size={20} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}