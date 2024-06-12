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
      <Navigator url='/xiao-c/sub-ai-main/pages/foo/index'>测试跳转xiao-c/pages/foo/index</Navigator>
    </View>
  )
}
