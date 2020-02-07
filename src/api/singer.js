import jsonp from '../common/js/jsonp'
import { commonParams,options} from './config'
import axios from 'axios'

export function getSingerList(){
    const url = "/api/getSingerList"
    const data = Object.assign({},commonParams,{
        '-': 'getUCGI'+(Math.random()+"").replace("0.",""),
        'g_tk': 5381,
        'loginUin': 0,
        'hostUin': 0,
        'format': 'jsonp',
        'inCharset': 'utf8',
        'outCharset': 'utf-8',
        'notice': 0,
        'platform': 'yqq.json',
        'needNewCode': 0,
        'data': {
            "comm":{
                "ct":24,
                "cv":0
            },
            "singerList":{
                "module":"Music.SingerListServer",
                "method":"get_singer_list",
                "param":{
                    "area":-100,
                    "sex":-100,
                    "genre":-100,
                    "index":-100,
                    "sin":0,
                    "cur_page":1
                }
            }
        }
    })

    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}

/*

g_tk: 5381
inCharset: utf8
outCharset: utf-8
notice: 0
format: json
-: getUCGI2724182053321207
loginUin: 0
hostUin: 0
platform: yqq.json
needNewCode: 0
data: {"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}



-: getUCGI8598476255848693
g_tk: 5381
loginUin: 0
hostUin: 0
format: json
inCharset: utf8
outCharset: utf-8
notice: 0
platform: yqq.json
needNewCode: 0
data: {"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}
*/