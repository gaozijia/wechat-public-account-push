export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxe6e0558a2a9a40ae",
    // 公众号appSecret
    appSecret: "d2Dd3VgpVm0EjhhbZf1LQFBRXCmQYPdon3GlYiakDH8",
    // 模板消息id
    templateId: "o237a6c0DonWaEyKf-xkOSmbTbUo",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o237a6c0DonWaEyKf-xkOSmbTbUo"],
     
    // 信息配置
    ewai: "  ",
    // 所在省份
    province: "河北",
    // 所在城市
    city: "保定",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "李太阳", "year": "1998", "date": "08-25", "r": 'new'},
   
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-06-01",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
