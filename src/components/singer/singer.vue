<template>
  <div class="singer"></div>
</template>

<script type="text/ecmascript-6">

import {getSingerList} from '../../api/singer.js'
import {ERR_OK} from '../../api/config'

import axios from 'axios'

export default {
  data(){
    return {
      singers:[]
    }
  },
  created(){
    this._getSingerList()
  },
  methods:{
    _getSingerList(){
      // qq音乐数据获取方式
      getSingerList().then((res)=>{
        if(res.code===ERR_OK){
          console.log('从qq音乐获取的歌手列表数据')
          console.log(res.data)
        }
      })

    // axios.get('http://localhost:3000/top/artists',{
    //   'offset':0,
    //   'limit':30
    // }).then(function(res){
        // console.log('从网易云获取的歌手列表数据')
    //   console.log(res)
    // })

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%    
</style>