// 照片来自 Wikimedia Commons，各自的作者与授权见对应文件页。每个地点一个数组，第一张是封面。
var PHOTOS={
 "dinhcau": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Dinh_C%E1%BA%ADu_%E1%BB%9F_Ph%C3%BA_Qu%E1%BB%91c.jpg/960px-Dinh_C%E1%BA%ADu_%E1%BB%9F_Ph%C3%BA_Qu%E1%BB%91c.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Dinh Cậu ở Phú Quốc.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Dinh_C%E1%BA%ADu_Ph%C3%BA_Qu%E1%BB%91c.jpg/960px-Dinh_C%E1%BA%ADu_Ph%C3%BA_Qu%E1%BB%91c.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Dinh Cậu Phú Quốc.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Dinh_C%E1%BA%ADu%2C_Duong_Dong_Phu_quoc_-_panoramio.jpg/960px-Dinh_C%E1%BA%ADu%2C_Duong_Dong_Phu_quoc_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Dinh Cậu, Duong Dong Phu quoc - panoramio.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/M%C5%A9i_Dinh_C%E1%BA%ADu%2C_Phu_Quoc%2C_Kien_Giang_-_panoramio.jpg/960px-M%C5%A9i_Dinh_C%E1%BA%ADu%2C_Phu_Quoc%2C_Kien_Giang_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Mũi Dinh Cậu, Phu Quoc, Kien Giang - panoramio.jpg"
  }
 ],
 "nightmarket": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Dinh_Cau_Night_Market_-_panoramio.jpg/960px-Dinh_Cau_Night_Market_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Dinh Cau Night Market - panoramio.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Live_seafood_for_sale_in_Phu_Quoc_night_market_Vietnam.jpg/960px-Live_seafood_for_sale_in_Phu_Quoc_night_market_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Live seafood for sale in Phu Quoc night market Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Making_ice_cream_rolls_in_Phu_Quoc_night_market_Vietnam.jpg/960px-Making_ice_cream_rolls_in_Phu_Quoc_night_market_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Making ice cream rolls in Phu Quoc night market Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Fish_for_sale_in_Phu_Quoc_night_market_Vietnam.jpg/960px-Fish_for_sale_in_Phu_Quoc_night_market_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Fish for sale in Phu Quoc night market Vietnam.jpg"
  }
 ],
 "ddmarket": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Phu_quoc_marche_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "w": 800,
   "file": "Phu quoc marche 1.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Phu_quoc_marche_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "w": 800,
   "file": "Phu quoc marche 2.jpg"
  }
 ],
 "sunghung": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Ch%C3%B9a_c%E1%BB%95_S%C3%B9ng_H%C6%B0ng.jpg/960px-Ch%C3%B9a_c%E1%BB%95_S%C3%B9ng_H%C6%B0ng.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Chùa cổ Sùng Hưng.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Tam_quan_ch%C3%B9a_c%E1%BB%95_S%C3%B9ng_H%C6%B0ng.jpg/960px-Tam_quan_ch%C3%B9a_c%E1%BB%95_S%C3%B9ng_H%C6%B0ng.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Tam quan chùa cổ Sùng Hưng.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Ch%C3%B9a_S%C3%B9ng_h%C6%B0ng_%2C_D%C6%B0%C6%A1ng_%C4%91%C3%B4ng_Ph%C3%BA_Qu%E1%BB%91c_ki%C3%AAn_giang_-_panoramio.jpg/960px-Ch%C3%B9a_S%C3%B9ng_h%C6%B0ng_%2C_D%C6%B0%C6%A1ng_%C4%91%C3%B4ng_Ph%C3%BA_Qu%E1%BB%91c_ki%C3%AAn_giang_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Chùa Sùng hưng , Dương đông Phú Quốc kiên giang - panoramio.jpg"
  }
 ],
 "fishsauce": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Vats_at_a_Fish_Sauce_Factory_on_Phu_Quoc_Island_in_Vietnam_01.jpg/960px-Vats_at_a_Fish_Sauce_Factory_on_Phu_Quoc_Island_in_Vietnam_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Vats at a Fish Sauce Factory on Phu Quoc Island in Vietnam 01.jpg"
  },
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Fish_sauce_factory%2C_Phu_Quoc.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "w": 800,
   "file": "Fish sauce factory, Phu Quoc.jpg"
  }
 ],
 "pepper": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Pepper_farm_in_vietnam.JPG/960px-Pepper_farm_in_vietnam.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Pepper farm in vietnam.JPG"
  }
 ],
 "simwine": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Rose_Myrtle_%28Rhodomyrtus_tomentosa%29_1.jpg/960px-Rose_Myrtle_%28Rhodomyrtus_tomentosa%29_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Rose Myrtle (Rhodomyrtus tomentosa) 1.jpg"
  }
 ],
 "chuonchuon": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Panoramic_view_of_D%C6%B0%C6%A1ng_%C4%90%C3%B4ng%2C_Ph%C3%BA_Qu%E1%BB%91c%2C_Vietnam.jpg/960px-Panoramic_view_of_D%C6%B0%C6%A1ng_%C4%90%C3%B4ng%2C_Ph%C3%BA_Qu%E1%BB%91c%2C_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Panoramic view of Dương Đông, Phú Quốc, Vietnam.jpg"
  }
 ],
 "longbeach": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Bai_Truong_%28Long_Beach%29_Ph%C3%BA_Qu%E1%BB%91c%2C_Vietnam_%283859473907%29.jpg/960px-Bai_Truong_%28Long_Beach%29_Ph%C3%BA_Qu%E1%BB%91c%2C_Vietnam_%283859473907%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Bai Truong (Long Beach) Phú Quốc, Vietnam (3859473907).jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Sunset_on_the_Long_Beach_in_Phu_Quoc_Island%2C_Vietnam%2C_5_March_2019.jpg/960px-Sunset_on_the_Long_Beach_in_Phu_Quoc_Island%2C_Vietnam%2C_5_March_2019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Sunset on the Long Beach in Phu Quoc Island, Vietnam, 5 March 2019.jpg"
  }
 ],
 "hamninh": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Ham_Ninh%2C_Phu_Quoc_%2C_kien_Giang_vietnam_-_panoramio.jpg/960px-Ham_Ninh%2C_Phu_Quoc_%2C_kien_Giang_vietnam_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Ham Ninh, Phu Quoc , kien Giang vietnam - panoramio.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Ch%E1%BB%A3_H%C3%A0m_Ninh-_Ph%C3%BA_Qu%E1%BB%91c%2C_Ki%C3%AAn_Giang_-_panoramio.jpg/960px-Ch%E1%BB%A3_H%C3%A0m_Ninh-_Ph%C3%BA_Qu%E1%BB%91c%2C_Ki%C3%AAn_Giang_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Chợ Hàm Ninh- Phú Quốc, Kiên Giang - panoramio.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Beach_near_Ham_Ninh_Phu_Quoc.JPG/960px-Beach_near_Ham_Ninh_Phu_Quoc.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Beach near Ham Ninh Phu Quoc.JPG"
  }
 ],
 "suoitranh": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Phu_quoc_suoi_tranh.jpg/960px-Phu_quoc_suoi_tranh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Phu quoc suoi tranh.jpg"
  }
 ],
 "prison": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Phu_Quoc_Prison_01.jpg/960px-Phu_Quoc_Prison_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Phu Quoc Prison 01.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Phu_Quoc_Prison_Monument.jpg/960px-Phu_Quoc_Prison_Monument.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Phu Quoc Prison Monument.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Phu_Quoc_Prison_02.jpg/960px-Phu_Quoc_Prison_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Phu Quoc Prison 02.jpg"
  }
 ],
 "baisao": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/B%C3%A3i_Sao_Beach.jpg/960px-B%C3%A3i_Sao_Beach.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Bãi Sao Beach.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Bai_Sao_Beach.jpg/960px-Bai_Sao_Beach.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Bai Sao Beach.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Star_Beach_%28B%C3%A3i_Sao%29.jpg/960px-Star_Beach_%28B%C3%A3i_Sao%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Star Beach (Bãi Sao).jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Phu_quoc_plage_sao.jpg/960px-Phu_quoc_plage_sao.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Phu quoc plage sao.jpg"
  }
 ],
 "sunsettown": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset-town-phu-quoc-1.jpg/960px-Sunset-town-phu-quoc-1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Sunset-town-phu-quoc-1.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Sunset_Town_Phu_Quoc_at_night.jpg/960px-Sunset_Town_Phu_Quoc_at_night.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Sunset Town Phu Quoc at night.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Apollo_Cafe_daytime_street_view_Sunset_Town_Phu_Quoc_Vietnam.jpg/960px-Apollo_Cafe_daytime_street_view_Sunset_Town_Phu_Quoc_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Apollo Cafe daytime street view Sunset Town Phu Quoc Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Sunset-town-phu-quoc-2.jpg/960px-Sunset-town-phu-quoc-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Sunset-town-phu-quoc-2.jpg"
  }
 ],
 "kissbridge": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Kiss_Bridge_at_sunset_Phu_Quoc_Island_Vietnam.jpg/960px-Kiss_Bridge_at_sunset_Phu_Quoc_Island_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Kiss Bridge at sunset Phu Quoc Island Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Kiss_Bridge_Phu_Quoc_aerial_sunset_view.jpg/960px-Kiss_Bridge_Phu_Quoc_aerial_sunset_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Kiss Bridge Phu Quoc aerial sunset view.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Kiss_Bridge%2C_Phu_Quoc_%2852680380987%29.jpg/960px-Kiss_Bridge%2C_Phu_Quoc_%2852680380987%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Kiss Bridge, Phu Quoc (52680380987).jpg"
  }
 ],
 "kissofsea": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Kiss_of_the_Sea_fireworks_show_Sunset_Town_Sun_World_Phu_Quoc_night_Vietnam.jpg/960px-Kiss_of_the_Sea_fireworks_show_Sunset_Town_Sun_World_Phu_Quoc_night_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Kiss of the Sea fireworks show Sunset Town Sun World Phu Quoc night Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Symphony_of_the_Sea_fireworks_Campanile_scenic_observatory_Phu_Quoc_Vietnam.jpg/960px-Symphony_of_the_Sea_fireworks_Campanile_scenic_observatory_Phu_Quoc_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Symphony of the Sea fireworks Campanile scenic observatory Phu Quoc Vietnam.jpg"
  }
 ],
 "cablecar": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/H%C3%B2n_Th%C6%A1m_cable_car_above_the_An_Th%E1%BB%9Bi_township.jpg/960px-H%C3%B2n_Th%C6%A1m_cable_car_above_the_An_Th%E1%BB%9Bi_township.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Hòn Thơm cable car above the An Thới township.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Hon_Thom_Cable_Car_aerial_view_Phu_Quoc_Island_Vietnam.jpg/960px-Hon_Thom_Cable_Car_aerial_view_Phu_Quoc_Island_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Hon Thom Cable Car aerial view Phu Quoc Island Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/H%C3%B2n_Th%C6%A1m_cable_car_station.jpg/960px-H%C3%B2n_Th%C6%A1m_cable_car_station.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Hòn Thơm cable car station.jpg"
  }
 ],
 "rachvem": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Starfishes_on_the_Starfish_Beach%2C_Phu_Quoc%2C_Vietnam.jpg/960px-Starfishes_on_the_Starfish_Beach%2C_Phu_Quoc%2C_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Starfishes on the Starfish Beach, Phu Quoc, Vietnam.jpg"
  }
 ],
 "safari": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Vinpearl_Safari_Ph%C3%BA_Qu%E1%BB%91c.jpg/960px-Vinpearl_Safari_Ph%C3%BA_Qu%E1%BB%91c.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Vinpearl Safari Phú Quốc.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/The_Herd_of_Rhinos.jpg/960px-The_Herd_of_Rhinos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "The Herd of Rhinos.jpg"
  }
 ],
 "vinwonders": [
  {
   "img": "https://upload.wikimedia.org/wikipedia/commons/c/ce/VinWonders-Phu-Quoc.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
   "w": 800,
   "file": "VinWonders-Phu-Quoc.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/VinWonders_Phu_Quoc_from_ferris_wheel.jpg/960px-VinWonders_Phu_Quoc_from_ferris_wheel.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "VinWonders Phu Quoc from ferris wheel.jpg"
  }
 ],
 "grandworld": [
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/2023-07-30_Grand_World_Ph%C3%BA_Qu%E1%BB%91c_DSCF2045.jpg/960px-2023-07-30_Grand_World_Ph%C3%BA_Qu%E1%BB%91c_DSCF2045.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "2023-07-30 Grand World Phú Quốc DSCF2045.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Simulation_of_a_parade_of_the_Nguyen_royal_soldiers_at_Grand_World_Phu_Quoc%2C_Vietnam.jpg/960px-Simulation_of_a_parade_of_the_Nguyen_royal_soldiers_at_Grand_World_Phu_Quoc%2C_Vietnam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "Simulation of a parade of the Nguyen royal soldiers at Grand World Phu Quoc, Vietnam.jpg"
  },
  {
   "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/2023-07-30_Grand_World_Ph%C3%BA_Qu%E1%BB%91c_203752.jpg/960px-2023-07-30_Grand_World_Ph%C3%BA_Qu%E1%BB%91c_203752.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
   "w": 960,
   "file": "2023-07-30 Grand World Phú Quốc 203752.jpg"
  }
 ]
};
