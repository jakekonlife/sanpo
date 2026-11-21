// 吃喝精选（富国岛）。跟景点分开放：不进首页景点推荐、扭蛋、挑一挑和「帮我排」，有自己的「吃喝」列表和地图图钉。
// kind: cafe 咖啡 / food 吃饭 / seafood 海鲜 / bar 喝一杯 / sweet 甜点
// tags 用景点那套（eat sit sun view water rain），心情筛选和搜索照样能用
// g：Google 评分快照（2026-11-19 在 Google Maps 查的）。r 评分 / n 评价数 / good、bad 是对评价的转述（不是原文），没看到明显吐槽的就不写 bad
// dish 推荐点什么（来自评价里最常被提到的菜），hours 当天查到的营业时间，可能会变
var EATS_AT = '2026-11-19';
// 这座城市的吃喝类别，和吃喝页「附近找找」的按钮（[类别, 按钮文字, 搜什么]）
var EAT_KINDS = {cafe:'咖啡', food:'吃饭', seafood:'海鲜', bar:'喝一杯', sweet:'甜点'};
var EAT_QUICK = [['cafe','咖啡','cafe'],['food','吃饭','restaurant'],['seafood','海鲜','seafood restaurant'],['bar','喝一杯','bar'],['sweet','甜点','dessert']];
var EATS = [
  // ───── 阳东镇一带 ─────
  {id:'e_sicrab', zh:'Si’s 螃蟹屋', jp:'Si’s Crab House Seafood Restaurant', kind:'seafood', area:'阳东镇 · 夜市旁', zone:'town', tags:['eat','rain'], best:['pm','night'], mins:75, lat:10.2167849, lng:103.9600109,
   hours:'11:00 开门', dish:'蒜香黄油酱螃蟹、蟹肉炒饭，酱汁配法棍',
   blurb:'夜市旁边的螃蟹馆，整锅海鲜淋上酱汁上桌，楼下还有一间生活小店。', tip:'离夜市走两分钟，逛夜市之前先来吃一顿。',
   g:{r:4.3, n:1845, good:'海鲜新鲜，酱汁够味又不会太重，份量足；店里绿植多、通风，服务常被称赞。'}},
  {id:'e_rakhoi', zh:'出海海鲜馆', jp:'Ra Khoi Restaurant Phu Quoc', kind:'seafood', area:'阳东镇 · 30/4 路', zone:'town', tags:['eat','rain'], best:['pm','night'], mins:90, lat:10.2137118, lng:103.9643236,
   hours:'10:00–23:00', dish:'鲱鱼沙拉（自己用米纸包）、琵琶虾、海鲜火锅',
   blurb:'当地人也会来的大型海鲜馆，空间宽敞，适合一群人点一桌。', tip:'鲱鱼沙拉（gỏi cá trích）是富国岛招牌，店员会教你怎么包。',
   g:{r:3.9, n:4283, good:'海鲜新鲜、上菜快，服务员会帮忙剥虾、教你用米纸包鱼。', bad:'有人说服务员英文不太通，点菜要靠比划或翻译软件。'}},
  {id:'e_xinchao', zh:'Xin Chào 海景餐厅', jp:'Xin Chao seafood restaurant Phu Quoc', kind:'seafood', area:'阳东镇 · 海边', zone:'town', tags:['eat','sun'], best:['sunset','night'], mins:90, lat:10.2121952, lng:103.9590413,
   dish:'鲱鱼沙拉、石斑鱼、扇贝',
   blurb:'阳东海边的大露台餐厅，看着日落吃海鲜，离夜市大约三百米。', tip:'想要靠海的位子就在日落前到，吃完散步去夜市刚好。',
   g:{r:4.2, n:5050, good:'日落和海景是最大卖点，鲱鱼沙拉和石斑鱼最常被点名；一大桌人点下来价格也算合理。'}},
  {id:'e_bunken', zh:'鱼咖喱米线 Bún kèn', jp:'Bún Kèn Út Lượm', kind:'food', area:'阳东镇 · 30/4 路', zone:'town', tags:['eat'], best:['am'], mins:30, lat:10.2142771, lng:103.9624922,
   hours:'早上 6 点开门', dish:'一碗 bún kèn',
   blurb:'富国岛一带才有的早餐：米线配鱼肉椰奶咖喱汤，加青木瓜丝和香草。', tip:'早上去，卖完就收。店在 Bún Mắm Dung Hà 里面。',
   g:{r:4.3, n:918, good:'不少游客说是这趟吃到最好吃的一碗，清爽不腻，很适合热天。'}},
  {id:'e_anba', zh:'ANBA 咖啡', jp:'ANBA COFFEE Phu Quoc', kind:'cafe', area:'阳东镇 · 长滩路', zone:'town', tags:['sit','rain'], best:['am','pm'], mins:60, lat:10.197193, lng:103.9689778,
   hours:'7:30 开门', dish:'果昔碗、芒果冰沙、椰子冰淇淋',
   blurb:'长滩路上树很多的木头小院咖啡，有冷气也有户外座。', tip:'在 Kingkong 超市旁边；中午太热或下雨时来躲一下。',
   g:{r:4.6, n:1436, good:'被树围着、很放松，果昔碗和早午餐受欢迎；店员友善，有冷气。'}},
  {id:'e_spice', zh:'Spice House 海边餐厅', jp:'The Spice House Restaurant at Cassia Cottage Phu Quoc', kind:'food', area:'长滩 · Cassia Cottage', zone:'town', tags:['eat','sun'], best:['sunset','night'], mins:90, lat:10.1983012, lng:103.9634449,
   hours:'可以订位', dish:'越南煎饼、熔岩蛋糕',
   blurb:'藏在度假村里的海边餐厅，常被说是岛上最浪漫的晚餐地点之一。', tip:'日落时段的海边桌最抢手，先订位。',
   g:{r:4.7, n:761, good:'日落海景和氛围很浪漫，越南菜做得精致；有人提前请店员布置了纪念日晚餐。'}},
  {id:'e_ocsen', zh:'OCSEN 海滩酒吧', jp:'OCSEN Beach Bar & Club', kind:'bar', area:'长滩', zone:'town', tags:['sit','sun'], best:['sunset','night'], mins:120, lat:10.1935371, lng:103.9642256,
   hours:'营业到凌晨 1 点', dish:'鸡尾酒、春卷',
   blurb:'长滩上的懒人沙发海滩酒吧，日落后有篝火，晚上 10 点有火舞表演。', tip:'晚上入场要收一点费用；想要水边的豆袋沙发就早点到。',
   g:{r:4.5, n:4785, good:'看日落和晚上十点的火舞是重点，沙发舒服、海风凉，员工英文好。'}},
  {id:'e_thaonhi', zh:'咸宁海上餐厅 Thảo Nhi', jp:'Nhà bè Thảo Nhi Hàm Ninh', kind:'seafood', area:'东海岸 · 咸宁渔村', zone:'town', tags:['eat','view'], best:['am','pm'], mins:90, lat:10.1771091, lng:104.0481958,
   hours:'24 小时', dish:'蒜炒皮皮虾、鱿鱼、海鲜饭',
   blurb:'咸宁渔村的木筏餐厅，评价不多但几乎都是高分，像是渔村里的私房小店。', tip:'逛咸宁渔村时顺便来吃。',
   g:{r:4.8, n:123, good:'海鲜很新鲜，海景好，老板很热情，被说是渔村里的隐藏好店。'}},
  // ───── 南岛 ─────
  {id:'e_bemap', zh:'胖胖蟹肉粗面', jp:'Bánh Canh Ghẹ Bé Mập - Fat Crab Noodle Soup', kind:'food', area:'南岛 · 安泰新城', zone:'south', tags:['eat'], best:['am','pm'], mins:40, lat:10.037516, lng:104.0108877,
   hours:'早上 6 点开门', dish:'蟹肉粗米面（bánh canh ghẹ）',
   blurb:'一碗粗米面里放整只蟹，是富国岛常见的吃法；店在安泰的新城区。', tip:'离日落小镇和缆车站都不远，去之前先来吃一碗。',
   g:{r:4.7, n:497, good:'蟹肉粗面最常被点名，店员热情，座位通风。'}},
  {id:'e_bup', zh:'BÚP 海鲜', jp:'BUP Seafood Phu Quoc', kind:'seafood', area:'南岛 · 安泰', zone:'south', tags:['eat'], best:['pm','night'], mins:90, lat:10.0738336, lng:103.9977777,
   dish:'烤鱼、带籽鱿鱼、鲱鱼椰子沙拉、海鲜火锅',
   blurb:'老板很用心的海鲜馆，按季节进当地海鲜，做法清爽、突出原味。', tip:'店在一个还很空的新社区里，别被街景吓到。',
   g:{r:4.2, n:960, good:'常被说是岛上最好的海鲜馆之一，海鲜新鲜，香草用得恰到好处。', bad:'所在的新区几乎没店，晚上有点冷清；也有人觉得岛上整体比岘港等地贵。'}},
  {id:'e_sanato', zh:'Sunset Sanato 海滩俱乐部', jp:'Sunset Sanato Beach Club', kind:'bar', area:'南岛 · 长滩南段', zone:'south', tags:['sun','view'], best:['sunset'], mins:90, lat:10.1531399, lng:103.9731362,
   hours:'9 点开门', dish:'入场附送的椰子',
   blurb:'海边摆满大型装置艺术的海滩俱乐部，傍晚来拍照看日落。', tip:'日落前一小时到，才有时间拍照。',
   g:{r:4.0, n:2696, good:'日落很美，装置艺术拍照好看。', bad:'不少人说没有网上照片好看，沙滩窄；入场费偏贵（含一颗椰子约 16 万越南盾），躺椅另外收费。'}},
  {id:'e_dugong', zh:'Chez Dugong 海滩餐厅', jp:'Chezdugong Restaurant Phu Quoc', kind:'seafood', area:'南岛 · 星沙滩', zone:'south', tags:['water','eat'], best:['am','pm'], mins:120, lat:10.0538663, lng:104.0348824,
   hours:'8 点开门', dish:'海鲜火锅、椰子咖啡',
   blurb:'星沙滩上的海滩餐厅兼酒吧，有躺椅和水上充气乐园，海水很清。', tip:'去星沙滩玩水时在这里吃饭、占躺椅。',
   g:{r:4.2, n:870, good:'海景和海水很漂亮，员工热情，还能玩水上项目。', bad:'有人遇到态度很凶的保安和员工，体验很差。'}},
  {id:'e_juliet', zh:'Juliet 咖啡甜点', jp:'Cafe Juliet & Pastries Sunset Town', kind:'sweet', area:'南岛 · 日落小镇', zone:'south', tags:['sit','eat'], best:['pm','night'], mins:45, lat:10.0304251, lng:104.0056194,
   hours:'7:30–22:30', dish:'鸡蛋咖啡、巴斯克芝士蛋糕、抹茶芒果',
   blurb:'日落小镇里的咖啡甜点店，晚上坐在这里看得到烟火。', tip:'看海之吻烟火秀前后来坐坐；吃甜点就好，正餐评价普通。',
   g:{r:4.9, n:249, good:'蛋糕和饮料好吃、值这个价，服务很好。', bad:'有人说披萨很失望，正餐不是强项。'}},
  // ───── 北岛 / 西岸 ─────
  {id:'e_ontherock', zh:'On The Rock 礁石餐厅', jp:'On The Rock Restaurant & Beach Bar Mango Bay', kind:'bar', area:'西岸 · 翁朗 Mango Bay', zone:'north', tags:['sun','view'], best:['sunset'], mins:90, lat:10.25851, lng:103.9356191,
   dish:'生蚝、海鲜拼盘、鲱鱼沙拉',
   blurb:'建在海边礁石上的餐厅酒吧，是翁朗看日落最有名的位子之一。', tip:'店家会按当天的日落时间建议你几点入座。',
   g:{r:4.3, n:484, good:'日落景色没得比，当地菜也好吃；有人雨天去还是等到了晚霞。'}},
  {id:'e_quocthien', zh:'国天海鲜（甘道）', jp:'Nha Hang Quoc Thien Ganh Dau', kind:'seafood', area:'北岛 · 甘道', zone:'north', tags:['eat','sun'], best:['pm','sunset'], mins:90, lat:10.3718885, lng:103.8385031,
   hours:'10 点开门', dish:'鲍鱼、老虎虾、炸鱿鱼、炒空心菜',
   blurb:'甘道角附近的海边海鲜馆，店面朴素，但菜好吃、价格合理。', tip:'海鲜多按时价称重，先问价再点；傍晚靠海的桌子能看日落。',
   g:{r:4.7, n:1387, good:'菜好吃、摆盘用心，价格合理，看着日落吹海风吃饭很舒服。', bad:'员工英文不太好，可以用翻译软件。'}},
  {id:'e_thubao', zh:'Thu Bao 海上餐厅', jp:'Thu Bao Seafood Floating Restaurant Rach Vem', kind:'seafood', area:'北岛 · 海星沙滩', zone:'north', tags:['eat','water'], best:['am','pm'], mins:90, lat:10.3670483, lng:103.9300311,
   hours:'8 点开门', dish:'生鱼沙拉（gỏi cá）、蒸蟹、海鲜火锅',
   blurb:'海星沙滩旁的浮筏餐厅，有吊床，可以边吃边看水里的海星。', tip:'去海星沙滩时顺便吃午饭；点套餐比单点划算。',
   g:{r:4.5, n:289, good:'海鲜非常新鲜，景色好，服务员会诚实推荐该点什么。'}}
];
if (typeof module !== 'undefined') module.exports = { EATS: EATS };
