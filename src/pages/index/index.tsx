import { View, Text, Navigator } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Navigator url='/xiao-c/plugin/pages/list/list?mockFlag=Y'>测试跳转插件列表</Navigator>
    </View>
  )
}
