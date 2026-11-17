// 想去池（富国岛）。tags: walk 多走走 / sit 坐一坐 / water 下水玩 / sun 看日落 / view 看风景 / eat 吃点啥 / rain 躲躲雨
// best: am 上午 / pm 下午 / sunset 黄昏 / night 夜里
// zone: north 北岛 | town 阳东镇一带 | south 南岛
// jp 字段放越南文名字，用来在 Google Maps 里搜
var PLACES = [
  // ───── 阳东镇一带 ─────
  {id:'dinhcau', zh:'石山殿', jp:'Dinh Cậu Phú Quốc', area:'阳东镇', zone:'town', tags:['sun','view','walk'], best:['sunset'], mins:40, lat:10.21721, lng:103.95644,
   blurb:'建在海边岩石上的小庙，供奉保佑渔民出海的神明，阳东河口最上镜的地方。', tip:'免费。傍晚爬上石阶看日落，看完走两分钟就是夜市。'},
  {id:'nightmarket', zh:'阳东夜市', jp:'Chợ đêm Phú Quốc', area:'阳东镇', zone:'town', tags:['eat','walk'], best:['night'], mins:90, lat:10.21598, lng:103.96036,
   blurb:'一条街的烤海鲜、果汁、炒冰淇淋卷和珍珠摊，岛上最热闹的晚上。', tip:'海鲜先问清楚按什么称、多少钱再点；评价里常说门口不好打车，可以走远一点再叫 Grab。'},
  {id:'ddmarket', zh:'阳东早市', jp:'Chợ Dương Đông Phú Quốc', area:'阳东镇', zone:'town', tags:['eat','walk','rain'], best:['am'], mins:60, lat:10.22052, lng:103.95975,
   blurb:'当地人买菜的市场，热带水果、鱼干、编织包，比夜市便宜也更有生活感。', tip:'早上去最热闹。山竹、榴莲这类水果在这里买比较实惠。'},
  {id:'sunghung', zh:'崇兴古寺', jp:'Sùng Hưng Cổ Tự', area:'阳东镇', zone:'town', tags:['walk','sit'], best:['am','pm'], mins:30, lat:10.21488, lng:103.95979,
   blurb:'岛上最老的寺庙之一，山门对联都是汉字，后山有菩提树，夜市旁边却很安静。', tip:'免费，大约早 7 点到晚 6 点开。适合逛夜市前顺路来坐一下。'},
  {id:'fishsauce', zh:'鱼露酒厂', jp:'Nhà thùng nước mắm Khải Hoàn', area:'阳东镇', zone:'town', tags:['rain','walk'], best:['am','pm'], mins:30, lat:10.21976, lng:103.97157,
   blurb:'一排排巨大木桶里腌着凤尾鱼，富国岛鱼露就是这样做出来的，味道很冲。', tip:'别买来带上飞机：好几条评价说机场不让带，要另外付钱托运或被没收。看看就好。'},
  {id:'simwine', zh:'桃金娘酒坊', jp:'Rượu sim Bảy Gáo', area:'阳东镇', zone:'town', tags:['rain','eat'], best:['pm'], mins:30, lat:10.21478, lng:103.96747,
   blurb:'用岛上野生桃金娘果酿的 sim 酒，甜甜的，可以先试喝。', tip:'评价里有人说外面超市更便宜，想买的话先比比价。'},
  {id:'chuonchuon', zh:'蜻蜓山顶咖啡', jp:'Chuồn Chuồn Bistro & Bar', area:'阳东镇', zone:'town', tags:['view','sit','sun'], best:['pm','sunset'], mins:90, lat:10.20959, lng:103.96672,
   blurb:'小山顶上的咖啡馆，整个阳东镇和西海岸线都在脚下，下雨天坐窗边也好看。', tip:'评价普遍说风景满分、食物一般，点杯饮料（芒果奶昔被推荐）看日落就好。旅行团多。'},
  {id:'bunquay', zh:'搅拌米线', jp:'Bún quậy Kiến Xây', area:'阳东镇', zone:'town', tags:['eat','rain'], best:['am','pm','night'], mins:45, lat:10.21885, lng:103.95852,
   blurb:'富国岛特色 bún quậy：现打的虾滑鱼饼加米线，酱料自己在台子上调。', tip:'人多时要等二三十分钟。酱料（青柠、辣椒、糖、盐）自己调，调得好吃全靠自己。'},
  {id:'museum', zh:'根源博物馆', jp:'Bảo tàng Cội Nguồn', area:'阳东镇 · 长滩路', zone:'town', tags:['rain','view'], best:['am','pm'], mins:60, lat:10.19285, lng:103.96732,
   blurb:'私人博物馆，六层红砖楼，贝壳、陶罐、老照片，楼顶看得到街道和海。', tip:'门票约 5 万越南盾。评价两极：有人觉得有趣，有人嫌旧、有点乱。下雨天的好去处。'},
  {id:'longbeach', zh:'长滩看日落', jp:'Bãi Trường Phú Quốc', area:'长滩', zone:'town', tags:['sun','water','sit'], best:['sunset'], mins:90, lat:10.18139, lng:103.96704,
   blurb:'西岸近 20 公里的长沙滩，岛上看海上日落最经典的地方。', tip:'大段沙滩被度假村占着，公共入口不多；找家海边酒吧点杯东西坐着最省事。'},
  {id:'hamninh', zh:'咸宁渔村', jp:'Làng chài Hàm Ninh', area:'东海岸', zone:'town', tags:['eat','view','walk'], best:['pm','sunset'], mins:120, lat:10.18093, lng:104.04846, book:false,
   blurb:'东海岸的老渔村，长长的木栈桥伸进海里，两边都是现捞现煮的海鲜餐厅。', tip:'这里的花蟹有名。海鲜干货不算便宜，先问价。东边看不到海上日落，但傍晚的光很温柔。'},
  {id:'suoitranh', zh:'草溪瀑布', jp:'Khu du lịch Suối Tranh', area:'岛中部', zone:'town', tags:['walk','water'], best:['am'], mins:90, lat:10.17666, lng:104.01252,
   blurb:'林子里的一条小溪和小瀑布，走一段上坡路，可以泡脚玩水。', tip:'门票约 6 万越南盾。瀑布不大，有人觉得不值；雨季刚过水会多一点。小心蚊虫，路上有人见过小蛇。'},

  // ───── 南岛 ─────
  {id:'sunsettown', zh:'日落小镇', jp:'Sunset Town Phú Quốc', area:'南岛 · 安泰', zone:'south', tags:['walk','sun','view'], best:['sunset','night'], mins:150, lat:10.0269, lng:104.00792,
   blurb:'彩色的地中海风小镇，红窗白墙、钟楼和海港，傍晚整片海都是金色的。', tip:'白天热、很多店没开，傍晚去最好：看完日落接着看海之吻烟火秀。摩托车要停到 Sun World 指定停车场。'},
  {id:'kissbridge', zh:'接吻桥', jp:'Kiss Bridge Phú Quốc', area:'南岛 · 日落小镇', zone:'south', tags:['sun','view','walk'], best:['sunset'], mins:45, lat:10.02803, lng:104.00379,
   blurb:'两段不相连的桥伸向海面，中间留一道缝，日落时站在两端隔空亲一下。', tip:'评价里有人傍晚五点半到时已经关了，日落前早点去。天气不好就看不到日落。'},
  {id:'kissofsea', zh:'海之吻烟火秀', jp:'Kiss of the Sea show', area:'南岛 · 日落小镇', zone:'south', tags:['view','sit'], best:['night'], mins:75, lat:10.0277, lng:104.00605, book:true,
   blurb:'海上的大型水幕灯光秀，最后烟火就在头顶炸开，评价里很多人说是岛上晚上的首选。', tip:'评价里说 21:30 开演、22:00 左右放烟火；先在网上查当天场次买票，很多酒店会送票。坐太前面可能被灯光晃眼。下小雨通常照常演。'},
  {id:'cablecar', zh:'香岛跨海缆车', jp:'Cáp treo Hòn Thơm', area:'南岛 · 安泰', zone:'south', tags:['view','water'], best:['am','pm'], mins:240, lat:10.02697, lng:104.00724,
   blurb:'约 7.9 公里的跨海缆车，脚下是蓝绿色的海和渔船，坐到香岛（Hòn Thơm）玩水。', tip:'缆车分几个时段开，中午会停一段，出发前查官网时段。提前在网上买票通常更便宜。'},
  {id:'anthoi', zh:'安泰群岛浮潜', jp:'Hòn Móng Tay Phú Quốc', area:'南岛 · 离岛', zone:'south', tags:['water','view'], best:['am'], mins:420, lat:9.90771, lng:104.02211, book:true,
   blurb:'从安泰坐船跳岛，指甲岛（Hòn Móng Tay）的海水清到能看见鱼在脚边游。', tip:'一般要报半天到一天的跳岛团，提前订。风浪大时会取消。带防晒和防水袋。'},
  {id:'baisao', zh:'星沙滩', jp:'Bãi Sao Phú Quốc', area:'南岛 · 东岸', zone:'south', tags:['water','sit'], best:['am','pm'], mins:180, lat:10.05726, lng:104.03639,
   blurb:'常被叫作岛上沙子最白、最细的海滩，浅浅的蓝绿色海水。', tip:'快到时有两条路：评价说右边那条有人收 6 万越南盾，左边没有指示牌的才是免费的路。近岸偶尔有垃圾，走远一点比较干净。'},
  {id:'khem', zh:'凯姆海滩', jp:'Bãi Khem Phú Quốc', area:'南岛 · 东岸', zone:'south', tags:['water','sit','walk'], best:['am','pm'], mins:150, lat:10.03668, lng:104.03104,
   blurb:'白沙、浪小、很平缓，椰子树下可以躺着不花钱。', tip:'一部分被度假村包着。有人说水里偶有漂浮垃圾，有人说已经清干净了，看运气。'},
  {id:'hoquoc', zh:'护国禅院', jp:'Thiền viện Trúc Lâm Hộ Quốc', area:'南岛 · 东岸', zone:'south', tags:['view','walk','sit'], best:['am'], mins:60, lat:10.11013, lng:104.02889,
   blurb:'依山面海的大寺院，从回廊和宝塔往外看，是一整片热带山林和大海。', tip:'预留一小时慢慢走。进寺穿过膝裤子、别穿太露的上衣。上午光线好，人也少。'},
  {id:'prison', zh:'富国岛监狱', jp:'Nhà tù Phú Quốc', area:'南岛', zone:'south', tags:['rain','walk'], best:['am','pm'], mins:60, lat:10.04436, lng:104.01801,
   blurb:'越战时期关押战俘的监狱遗址，铁丝网和还原场景很沉重，也能了解这座岛的历史。', tip:'免费入场。部分还原场景比较写实，不喜欢可以跳过室内区。'},
  {id:'sonasea', zh:'Sonasea 夜市', jp:'Sonasea Night Market Phu Quoc', area:'南岛 · 长滩南段', zone:'south', tags:['eat','walk'], best:['night'], mins:75, lat:10.13039, lng:103.98286,
   blurb:'靠近南边度假村的新夜市，整齐、不挤，吃东西、按摩、买纪念品都方便。', tip:'大约下午 5 点后才热闹，白天几乎不开。规模比阳东夜市小，但有人说价格更实在。'},

  // ───── 北岛 ─────
  {id:'grandworld', zh:'大世界水城', jp:'Grand World Phú Quốc', area:'北岛', zone:'north', tags:['walk','view','eat'], best:['sunset','night'], mins:150, lat:10.32832, lng:103.86276,
   blurb:'彩色房子沿着运河排开，可以坐贡多拉小船，晚上有开场秀。', tip:'评价里说晚上 21:30 左右有表演，看完可以坐 17 路公交回阳东镇。适合拍照，买东西就算了。'},
  {id:'vinwonders', zh:'VinWonders 乐园', jp:'VinWonders Phú Quốc', area:'北岛', zone:'north', tags:['walk','rain','water'], best:['am','pm'], mins:360, lat:10.34073, lng:103.85405,
   blurb:'越南最大的主题乐园，城堡、水上乐园和一座很大的水族馆。', tip:'提前网上买票。评价里说水族馆 14:00 有美人鱼表演，13:00 去占位子。门票常含餐券。'},
  {id:'safari', zh:'珍珠野生动物园', jp:'Vinpearl Safari Phú Quốc', area:'北岛', zone:'north', tags:['walk'], best:['am'], mins:300, lat:10.33704, lng:103.89145,
   blurb:'半开放式动物园，坐车看犀牛和狮子，还可以自己喂长颈鹿。', tip:'16:30 关门，尽早去。先坐免费的环园巴士一圈再决定要不要付费电瓶车。穿好走的鞋。'},
  {id:'baidai', zh:'长白滩', jp:'Bãi Dài Phú Quốc', area:'北岛', zone:'north', tags:['water','sun','sit'], best:['pm','sunset'], mins:150, lat:10.33806, lng:103.84862,
   blurb:'北岛西岸长长的白沙滩，海水清，傍晚看日落。', tip:'大部分属于 Vingroup 度假村，有人被保安拦过。评价建议从 Grand World 附近的公共区域走进去，早点去浪比较小。'},
  {id:'ganhdau', zh:'甘道角', jp:'Mũi Gành Dầu Phú Quốc', area:'北岛 · 最北端', zone:'north', tags:['sun','view','sit'], best:['sunset'], mins:90, lat:10.37416, lng:103.84048,
   blurb:'岛的西北角，还很原始的渔村和石滩，天晴时能看见对面的柬埔寨。', tip:'咖啡馆附近有点乱，往石滩旁的木栈桥那边走更好看。吃的选择不多，以海鲜为主。'},
  {id:'rachvem', zh:'海星沙滩', jp:'Rạch Vẹm Starfish Beach', area:'北岛 · 东北岸', zone:'north', tags:['water','walk'], best:['am'], mins:150, lat:10.37204, lng:103.93732,
   blurb:'浅浅的海水里躺着一只只红色海星，路还没怎么开发，很野。', tip:'下车的地方海星不多：沿海岸往北走约 20 分钟，或者讲价坐船。海星看看就好，别拿出水面。'},
  {id:'pepper', zh:'胡椒农场', jp:'Pepper Farm Phu Quoc (The Countryside)', area:'北岛 · 去海星滩路上', zone:'north', tags:['walk','eat'], best:['am','pm'], mins:60, lat:10.32814, lng:103.95513,
   blurb:'家庭小农场，导游带着看胡椒藤和果树，试吃各种胡椒，鸡鹅猫狗到处跑。', tip:'评价说不用预约，短导览约 30–45 分钟、每人约 11 万越南盾，含试吃和饮料，不太推销。还有烹饪课。'},
  {id:'onglang', zh:'翁朗海滩', jp:'Bãi Ông Lang Phú Quốc', area:'西岸 · 阳东以北', zone:'north', tags:['sun','water','sit'], best:['sunset'], mins:120, lat:10.26987, lng:103.92718,
   blurb:'人很少的安静海滩，水比长滩清，日落非常漂亮。', tip:'门票约 5 万越南盾。没有餐厅、淋浴，厕所也简陋，自带水和零食。'}
];

var QUESTS = [
  '点一杯越南滴漏咖啡，等它一滴一滴滴完',
  '在路边摊吃一碗米粉，用越南语说一句 Cảm ơn（谢谢）',
  '买一个椰子，喝完让老板劈开吃椰肉',
  '在海边坐到太阳完全落进海里',
  '光脚在沙滩上走一千步',
  '找一只海边的狗，陪它玩五分钟',
  '试一种没吃过的热带水果（山竹、红毛丹、释迦都行）',
  '坐一次 Grab 摩托，感受一下海风',
  '在夜市挑一个最奇怪的海鲜问问价钱（不一定要买）',
  '尝一小杯桃金娘酒（sim）',
  '拍一张有渔船的照片',
  '在吊床上躺够二十分钟',
  '数出一百万越南盾，当一次百万富翁',
  '捡一个好看的贝壳，看完放回沙滩',
  '喝一杯现榨甘蔗汁',
  '给未来的自己写一张明信片'
];

if (typeof module !== 'undefined') module.exports = { PLACES: PLACES, QUESTS: QUESTS };
