import { Text, TouchableOpacity, View, Image } from 'react-native'
import { s } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

type RecentProps = {
  data: {
    title: string
    cover?: string
  }
}

export function Recent({ data }: RecentProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.7}>
      <Image source={{ uri: data.cover }} style={s.cover} />
      <View style={s.content}>
        <Feather name='file-text' size={32} color={colors.gray[300]} style={s.icon} />
        <Text style={s.title} numberOfLines={2}>{data.title}</Text>
      </View>
      
    </TouchableOpacity>
  )
}