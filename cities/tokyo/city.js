// 东京城市包。引擎只读这个文件和旁边的 places.js / photos.js / reviews.js，加城市不用改引擎。
var CITY = {
  id: 'tokyo',
  name: '东京',                 // 旅行簿里显示的名字
  title: '东京散步签',          // 海报小字、结算图副标题
  h1: 'TOKYO',                  // 海报大字、结算图大字
  stamp: 'TOKYO',               // 章上的英文（分区可以单独覆盖）
  theme: '#E9B93E',             // 进到这座城市后的底色
  tz: 540, tzName: 'Asia/Tokyo',// 时区：分钟偏移 + Open-Meteo 用的名字
  wx: [35.68, 139.76],          // 天气坐标（分区可以单独覆盖）
  sunset: '16:32',              // 天气没拿到之前先用的日落时间
  cc: 'jp',                     // 自己加地点时，OpenStreetMap 只在这个国家里找
  travel: 'transit',            // Google Maps「怎么去」用的交通方式
  search: '搜地点、街区，比如 咖啡、镰仓、谷中',
  // 分区：radius = 按半径判断你在哪一区（小半径的先比）；不在任何半径里就用 defaultZone 或当天的分区
  zoneMode: 'radius', strictZone: true, defaultZone: 'tokyo',
  zones: {
    tokyo: {name: '东京', chip: '东京', form: '东京', area: '东京', words: '东京 東京 tokyo', c: {lat: 35.68, lng: 139.76}, r: 60, wx: [35.68, 139.76], locMsg: '定位好了，按远近重新排过'},
    kamakura: {name: '镰仓', chip: '镰仓', form: '镰仓 · 江之岛', area: '镰仓', words: '镰仓 鎌倉 kamakura', c: {lat: 35.315, lng: 139.53}, r: 14, wx: [35.32, 139.55],
      stamp: 'KAMAKURA', suffix: ' · 镰仓', daytrip: '镰仓日', banner: '今天是镰仓日，推荐都换成了镰仓和江之岛。', bannerIcon: 'water', locMsg: '你在镰仓一带'}
  },
  tags: {walk: '多走走', sit: '坐一坐', water: '看看水', leaf: '看红叶', view: '看风景', eat: '吃点啥', rain: '躲躲雨'},
  icons: {
    view: '<path d="M16 2.500V7" fill="none"/><path d="M16 7l-1.500 9-5.500 12.500h4.500q2.500-6 5 0H23L17.500 16z" fill="#E9574D"/><path d="M12 15.500h8v3h-8z" fill="#fff"/>'
  },
  season: {tag: 'leaf', bonus: 0.6, why: '银杏红叶正当季', months: [11, 12]},
  review: {none: '街区和线路没有单一的 Google 评分。', bad: '差评'},
  recap: {size: 108, gap: 26},
  file: 'tokyo-sanpo',
  // 两站之间的路上时间：1.5 km 以内算走路；再远算坐电车＝等车 wait 分钟 + 前 farKm 公里每公里 perKm 分钟 + 之后每公里 farPerKm 分钟
  hop: {wait: 15, perKm: 2.2, farKm: 10, farPerKm: 1, ride: '坐车', mode: 'transit'},
  price: '100円',               // 扭蛋机上的价钱牌
  css: '.train{animation:train 16s linear infinite}@keyframes train{from{transform:translateX(-70px)}to{transform:translateX(410px)}}',
  header: `
<svg class="scene" viewBox="0 0 390 216" stroke="#173A7A" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
  <defs>
    <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="#2F6FD0" stroke="none" opacity=".4"/></pattern>
    <pattern id="wave" width="24" height="9" patternUnits="userSpaceOnUse"><path d="M0 4.5Q6 .5 12 4.5T24 4.5" fill="none" stroke="#2F6FD0" stroke-width="1.2"/></pattern>
  </defs>
  <rect width="390" height="216" fill="#EAF4FC" stroke="none"/>
  <circle cx="332" cy="74" r="17" fill="#E9B93E"/>
  <g class="cloud"><path d="M22 84a8 8 0 0 1 8-8 11 11 0 0 1 21-3 9 9 0 0 1 13 11z" fill="#fff"/></g>
  <g class="cloud b"><path d="M228 72a7 7 0 0 1 7-7 10 10 0 0 1 19-3 8 8 0 0 1 12 10z" fill="#fff"/></g>
  <path d="M96 66q4-5 8 0q4-5 8 0M300 44q3-4 6 0q3-4 6 0M146 82q3-4 6 0q3-4 6 0" fill="none" stroke="#2F6FD0"/>
  <!-- 富士山 -->
  <path d="M222 158L280 86q6-6 12 0l58 72z" fill="#2F6FD0"/>
  <path d="M266 103l14-17q6-6 12 0l14 17-8-5-6 8-6-8-6 8-6-8z" fill="#fff"/>
  <path d="M0 158q64-34 132 0z" fill="url(#dots)" stroke="none"/>
  <!-- 东京塔 -->
  <path d="M62 60v12" fill="none"/>
  <path d="M62 72l-3 34-5 22-10 30h12q6-14 12 0h12l-10-30-5-22z" fill="#E9574D"/>
  <rect x="52" y="124" width="20" height="7" rx="1" fill="#fff"/><rect x="57" y="103" width="10" height="5" rx="1" fill="#fff"/>
  <!-- 五重塔 -->
  <path d="M118 84v12" fill="none"/>
  <g fill="#FFFCF3"><rect x="109" y="100" width="18" height="10"/><rect x="107" y="116" width="22" height="10"/><rect x="105" y="132" width="26" height="10"/><rect x="103" y="148" width="30" height="10"/></g>
  <g fill="#173A7A"><path d="M102 102q16-10 32 0l-3 2h-26z"/><path d="M99 118q19-10 38 0l-3 2h-32z"/><path d="M96 134q22-10 44 0l-3 2h-38z"/><path d="M93 150q25-10 50 0l-3 2h-44z"/></g>
  <!-- 晴空塔 -->
  <path d="M178 62l-3 34-3 62h12l-3-62z" fill="#8CC3F0"/>
  <rect x="170" y="98" width="16" height="6" rx="3" fill="#fff"/><rect x="172" y="89" width="12" height="5" rx="2.5" fill="#E9B93E"/>
  <!-- 鸟居 -->
  <g fill="#E9574D"><rect x="206" y="130" width="5" height="28"/><rect x="229" y="130" width="5" height="28"/><path d="M198 122q22-6 44 0l-2 6h-40z"/><rect x="203" y="134" width="34" height="4"/></g>
  <!-- 小房子 -->
  <rect x="300" y="136" width="22" height="22" fill="#F6B9B2"/><path d="M297 136l14-11 14 11z" fill="#173A7A"/>
  <rect x="324" y="126" width="20" height="32" fill="#E9B93E"/><rect x="346" y="140" width="26" height="18" fill="#8CC3F0"/><path d="M343 140l16-10 16 10z" fill="#E9574D"/>
  <g fill="#fff" stroke-width="1.2"><rect x="306" y="142" width="5" height="6"/><rect x="329" y="131" width="4" height="5"/><rect x="336" y="131" width="4" height="5"/><rect x="329" y="142" width="4" height="5"/><rect x="336" y="142" width="4" height="5"/><rect x="352" y="145" width="5" height="6"/><rect x="361" y="145" width="5" height="6"/></g>
  <!-- 银杏 -->
  <g fill="#E9B93E"><path d="M22 158v-14M150 158v-12M258 158v-12M284 158v-10" fill="none"/><ellipse cx="22" cy="134" rx="10" ry="15"/><ellipse cx="150" cy="138" rx="8" ry="12"/><ellipse cx="258" cy="138" rx="8" ry="12"/><ellipse cx="284" cy="142" rx="6" ry="9" fill="#F6B9B2"/></g>
  <path d="M0 158h390" fill="none"/>
  <!-- 小电车 -->
  <g class="train"><rect x="0" y="159" width="56" height="14" rx="4" fill="#2F6FD0"/><rect x="0" y="165" width="56" height="4" fill="#FFFCF3" stroke="none"/><g fill="#fff" stroke-width="1.2"><rect x="5" y="161.500" width="8" height="5" rx="1"/><rect x="17" y="161.500" width="8" height="5" rx="1"/><rect x="29" y="161.500" width="8" height="5" rx="1"/><rect x="41" y="161.500" width="10" height="5" rx="1"/></g></g>
  <path d="M0 175h390" fill="none"/>
  <rect y="176" width="390" height="40" fill="#fff" stroke="none"/><rect y="178" width="390" height="38" fill="url(#wave)" stroke="none"/>
  <g class="boat"><path d="M286 196h40l-6 10h-28z" fill="#E9574D"/><path d="M305 196v-20l14 17z" fill="#fff"/></g>
</svg>`
};
