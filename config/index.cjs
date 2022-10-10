/* eslint-disable */

const USER_CONFIG = {

  /**

   * 公众号配置

   */

  

  // 使用的推送通道：['push-deer', 'wechat-test', 'server-chan']

  // 默认使用 【微信测试号】

  // 使用【pushDeer】请填写 push-deer

  // 使用【微信测试号】请填写 wechat-test

  // 使用【方糖服务号】请填写 server-chan

  USE_PASSAGE: 'push-deer',

  

  // 使用微信测试号时才需要填写：公众号APP_ID

  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。

  // 如果你非要填这里也行。脚本也能运行

  APP_ID: '',

  // 使用微信测试号时才需要填写：公众号APP_SECRET

  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。

  // 如果你非要填这里也行。脚本也能运行

  APP_SECRET: '',

  // 是否给文字设置多彩颜色, 和emoji不兼容

  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false

  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false

  SWITCH: {

    /** 每日天气 */

    weather: true,

    /** 节假日 */

    // 下一休息日综合提醒

    holidaytts: true,

    /** 每日N句 */

    // 金山每日一句

    CIBA: true,

    // 每日一言

    oneTalk: false,

    // 土味情话(彩虹屁)

    earthyLoveWords: true,


    // 朋友圈文案

    momentCopyrighting: false,

    // 毒鸡汤

    poisonChickenSoup: false,

    // 古诗古文

    poetry: false,

    /** 星座运势 */

    horoscope: false,

    /** 生日消息和节日消息 */

    birthdayMessage: true,

    // 学生课表

    courseSchedule: false,

  },

  /** 每日一言 */

  // 每日一言的内容类型

  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""

  LITERARY_PREFERENCE: '',

  /**

   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔

   */

  USERS: [

    {

      // 想要发送的人的名字

      name: '欣儿',

      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到

      // 使用其他通道时，请严格按照各个通道的教程进行填写

      id: 'PDU16764TV9MHREEi86z3lmQQR8ypCta4vgSiujLW',

      // 使用微信测试号：你想对他发送的模板消息的模板ID

      // 使用其他通道时，请填写 config/template-config.cjs 中某个想要使用的模板的id

      useTemplateId: '0001',

      // 所在省份或城市，也可以不填

      province: '',

      // 所在城市或县区

      city: '章丘',

      // 新历生日, 仅用作获取星座运势, 格式必须

      horoscopeDate: '05-09',

      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机

      horoscopeDateType: '今日',

      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。

      openUrl: 'https://wangxinleo.cn',

      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了

      festivals: [

        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号

        {

          type: '生日', name: '小仙女🍓', year: '2001', date: '05-09',

        },

        {

          type: '节日', name: '结婚纪念日', year: '2020', date: '09-03',

        },

        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号

        {

          type: '生日', name: '专专🍓', year: '2001', date: '07-03',

        },

        {

          type: '节日', name: '被搭讪纪念日', year: '2016', date: '01-25',

        }

      ],

      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了

      customizedDateList: [

        // 在一起的日子

        { keyword: 'love_day', date: '2016-01-25' },

        // 结婚纪念日

        { keyword: 'marry_day', date: '2022-09-09' },

        // 退伍日

        { keyword: 'ex_day', date: '2022-09-10' }

      ],

      // 课程表相关配置

      // 如果courseSchedule不存在或者为空（null）则认为没有课程

      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可

      // 如果courseSchedule是一个对象（如下面所示）

      courseSchedule: {

        // 单双周的基准

        benchmark: {

          // 这里设置一个日期，用来作为判断课表是否单双周的依据

          date: '2022-09-23',

          // 该日期是否为单周

          isOdd: true

        },

        // 课表

        courses: {

          // 单周课表

          // 从星期一到星期日（星期六和星期日的课表数组可不填写）

          odd: [

            // 例子，周一的课表

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ],

            // 周二

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ],

            // 周三

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ],

            // 周四

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ],

            // 周五

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ],

            // 周六

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ],

            // 周日

            [

              '08:00-09:35 高等数学',

              '09:50-11:25 高等物理'

            ]

          ],

          // 双周课表

          even: [

            [],

            [],

            [],

            [],

            [],

            [],

            []

          ]

        }

      },

    },

    {

      name: '老婆1',

      id: '',

      useTemplateId: '',

      province: '',

      city: '',

      horoscopeDate: '',

      horoscopeDateType: '',

      openUrl: 'https://wangxinleo.cn',

      festivals: [],

      customizedDateList: [],

      courseSchedule: null

    },

    {

      name: '老婆2',

      id: '',

      useTemplateId: '',

      province: '',

      city: '',

      horoscopeDate: '',

      horoscopeDateType: '',

      openUrl: 'https://wangxinleo.cn',

      festivals: [],

      customizedDateList: [],

      courseSchedule: null

    },

    {

      name: '老婆3',

      id: '',

      useTemplateId: '',

      province: '',

      city: '',

      horoscopeDate: '',

      horoscopeDateType: '',

      openUrl: 'https://wangxinleo.cn',

      
