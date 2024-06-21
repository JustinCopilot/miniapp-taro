import { View, Slot, Navigator, NativeSlot } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleStatusChange = (res) => {
    console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
  }
  const handleNavigate = (p: any) => {
    Taro.navigateTo({
      ...p,
      url: `/xiao-c/plugin/pages/list/list?mockFlag=Y`
    });
  };
  const handleLisenReturn = (data: any) => {
    console.log('%c [ data ]', 'font-size:13px; background:pink; color:#bf2c9f;', data);
  };
  const handleChangeStatus = (status) => {
    console.log('%c [ status ]', 'font-size:13px; background:pink; color:#bf2c9f;', status);
  }

  const handleLog = (res) => {
    console.log('fff: ', res);
  }


  return (
    <View className='index'>
      {/* @ts-ignore */}
      <clife-ai-helper-enter
        props={{
          env: 'itest',
          appType: 2,
          mobile: '18611111111',
          requestAppUserCode: () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve('1234567890')
              }, 1000)
            })
          },
          onChangeStatus: handleChangeStatus,
          onNavigate: handleNavigate,
          redirect: {
            name: 'chat',
            microAppUuid: '1e6662e2-8174-4bea-9991-0c4dce21f643'
          },
          onLisenReturn: handleLisenReturn
        }}
        bindmyevent='handleLog'
      >
        {/* <Slot><View>AI智能回访总结</View></Slot> */}
        {/* @ts-ignore */}
      </clife-ai-helper-enter>
      <Navigator url='/xiao-c/plugin/pages/list/list'>测试跳转插件列表</Navigator>
      <Navigator url='/xiao-c/sub-beauty/pages/training_list/index'>测试跳转插件内训列表</Navigator>
    </View >
  )
}
