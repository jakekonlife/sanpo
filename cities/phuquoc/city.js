// 富国岛城市包。引擎只读这个文件和旁边的 places.js / photos.js / reviews.js，加城市不用改引擎。
var CITY = {
  id: 'phuquoc',
  name: '富国岛',
  title: '富国岛晃晃签',
  h1: 'PHU QUOC',
  stamp: 'PHU QUOC',
  theme: '#45BCAE',
  tz: 420, tzName: 'Asia/Ho_Chi_Minh',
  wx: [10.22, 103.97],
  sunset: '17:35',
  cc: 'vn',
  travel: 'driving',
  search: '搜地点、海滩，比如 日落、夜市、北岛',
  // 分区：near = 离哪个中心近就算哪一区；自己加的地点只有落在 bbox（岛的范围）里才自动改分区
  zoneMode: 'near', strictZone: false, defaultZone: 'town',
  bbox: [9.8, 10.5, 103.8, 104.2],
  zones: {
    north: {name: '北岛', chip: '北岛', form: '北岛', area: '北岛', words: '北岛 北部 bac north', c: {lat: 10.33, lng: 103.9}},
    town: {name: '阳东镇一带', chip: '阳东镇', form: '阳东镇一带', area: '阳东镇一带', words: '阳东镇一带 阳东 duong dong 市区', c: {lat: 10.205, lng: 103.97}},
    south: {name: '南岛', chip: '南岛', form: '南岛', area: '南岛', words: '南岛 南部 nam south 安泰 an thoi', c: {lat: 10.05, lng: 104.01}}
  },
  tags: {walk: '多走走', sit: '坐一坐', water: '下下水', sun: '看日落', view: '看风景', eat: '吃点啥', rain: '躲躲雨'},
  icons: {},
  review: {none: '这里没有存 Google 评分。', bad: '吐槽'},
  recap: {size: 92, gap: 18},
  file: 'phuquoc-sanpo',
  css: '.cab{animation:cab 18s linear infinite}@keyframes cab{from{transform:translate(0,0)}to{transform:translate(275px,75px)}}',
  header: `
<svg class="scene" viewBox="0 0 390 216" stroke="#173A7A" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">
  <defs>
    <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="#2F6FD0" stroke="none" opacity=".4"/></pattern>
    <pattern id="wave" width="24" height="9" patternUnits="userSpaceOnUse"><path d="M0 4.5Q6 .5 12 4.5T24 4.5" fill="none" stroke="#2F6FD0" stroke-width="1.2"/></pattern>
  </defs>
  <rect width="390" height="216" fill="#EAF4FC" stroke="none"/>
  <circle cx="300" cy="140" r="30" fill="#E9B93E"/>
  <g class="cloud"><path d="M22 84a8 8 0 0 1 8-8 11 11 0 0 1 21-3 9 9 0 0 1 13 11z" fill="#fff"/></g>
  <g class="cloud b"><path d="M218 62a7 7 0 0 1 7-7 10 10 0 0 1 19-3 8 8 0 0 1 12 10z" fill="#fff"/></g>
  <path d="M110 70q4-5 8 0q4-5 8 0M300 46q3-4 6 0q3-4 6 0M156 88q3-4 6 0q3-4 6 0" fill="none" stroke="#2F6FD0"/>
  <!-- 香岛 -->
  <path d="M236 150q30-34 62-10q20-16 54 10z" fill="#8CC3F0"/>
  <!-- 跨海缆车 -->
  <path d="M10 34L314 117" fill="none" stroke-width="1.2"/><path d="M308 139l6-24 6 24z" fill="#FFFCF3" stroke-width="1.4"/><path d="M310.500 130h7M309.200 135h9.600" fill="none" stroke-width="1"/><rect x="310" y="113" width="8" height="3" rx="1" fill="#E9574D" stroke-width="1"/>
  <g class="cab"><path d="M14 35v6" fill="none"/><rect x="7" y="41" width="15" height="11" rx="3" fill="#E9574D"/><rect x="10" y="44" width="9" height="4" rx="1" fill="#fff" stroke-width="1"/></g>
  <!-- 海 -->
  <rect y="150" width="390" height="66" fill="#8CC3F0" stroke="none"/>
  <path d="M0 150h390" fill="none"/>
  <path d="M284 160h32M290 168h20M296 176h8" fill="none" stroke="#E9B93E" stroke-width="2.5"/>
  <rect y="182" width="390" height="34" fill="url(#wave)" stroke="none" opacity=".8"/>
  <!-- 石山殿 -->
  <path d="M144 172q6-18 22-20q18 0 26 20z" fill="#173A7A"/>
  <rect x="158" y="142" width="13" height="10" fill="#FFFCF3"/><path d="M154 143l10.5-8 10.5 8z" fill="#E9574D"/>
  <rect x="176" y="134" width="6" height="18" fill="#fff"/><path d="M175 134h8l-4-5z" fill="#E9574D"/>
  <!-- 沙滩和椰子树 -->
  <path d="M0 160q70-12 132 6l-14 50H0z" fill="#FFFCF3"/><path d="M0 160q70-12 132 6l-14 50H0z" fill="url(#dots)" stroke="none"/>
  <path d="M46 168q-7-40 8-76" fill="none" stroke="#173A7A" stroke-width="6"/><path d="M46 168q-7-40 8-76" fill="none" stroke="#E9574D" stroke-width="3.2"/>
  <g fill="#2F6FD0"><path d="M54 92q-26-8-40 8q20-12 40-8z"/><path d="M54 92q-14-22-36-18q24 2 36 18z"/><path d="M54 92q10-24 32-22q-22 6-32 22z"/><path d="M54 92q28-6 38 12q-18-12-38-12z"/></g>
  <circle cx="51" cy="96" r="3" fill="#E9B93E"/><circle cx="57" cy="97" r="3" fill="#E9B93E"/>
  <path d="M92 170q4-26-5-48" fill="none" stroke="#173A7A" stroke-width="5"/><path d="M92 170q4-26-5-48" fill="none" stroke="#E9B93E" stroke-width="2.6"/>
  <g fill="#173A7A"><path d="M87 122q-18-6-28 6q14-9 28-6z"/><path d="M87 122q-8-16-24-13q17 2 24 13z"/><path d="M87 122q8-17 23-15q-16 4-23 15z"/><path d="M87 122q19-4 26 9q-12-9-26-9z"/></g>
  <!-- 簸箕船和渔船 -->
  <g class="boat"><ellipse cx="206" cy="198" rx="13" ry="5" fill="#E9B93E"/><path d="M206 193v-9" fill="none"/><circle cx="206" cy="182" r="3" fill="#FFFCF3"/></g>
  <g class="boat"><path d="M246 194h40l-6 10h-28z" fill="#E9574D"/><path d="M265 194v-20l14 17z" fill="#fff"/></g>
</svg>`
};
