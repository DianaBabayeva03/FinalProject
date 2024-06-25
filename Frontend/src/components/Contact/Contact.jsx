import React from 'react';
import styles from './Contact.module.scss';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaAt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { selectBranch } from '../../redux/slices/branchSlice';

const branches = [
  { name: 'Lökbatan OBA AzeriExpress filialı', address: 'Qaradağ ray. Lökbatan qəs. Seymur Orucov 58A AzeriExpress filial', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3041.6211650440437!2d49.726865600000004!3d40.3285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE5JzQyLjgiTiA0OcKwNDMnMzYuNyJF!5e0!3m2!1str!2saz!4v1717848071672!5m2!1str!2saz" },
  { name: 'Qusar OBA AzeriExpress filialı', address: 'Qusar şəhəri, Heydər Əliyev prospekti 125B AzeriExpress filial', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2991.9319570162966!2d48.4171729!3d41.418995699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI1JzA4LjQiTiA0OMKwMjUnMDEuOCJF!5e0!3m2!1str!2saz!4v1717847900914!5m2!1str!2saz" },
  { name: 'Xırdalan AzeriExpress filialı', address: 'Xırdalan şəhəri, M.Hüseynzadə küçəsi 1 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3035.9525487587052!2d49.7396062!3d40.45418719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI3JzE1LjEiTiA0OcKwNDQnMjIuNiJF!5e0!3m2!1str!2saz!4v1717847741865!5m2!1str!2saz" },
  { name: 'Sumqayıt AzəriExpress filialı', address: 'Sumqayıt şəhəri, Bakı küç. 30 (Sumqayıt avtovağzalı ) AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3029.9581167661117!2d49.6641044!3d40.5866799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM1JzEyLjEiTiA0OcKwMzknNTAuOCJF!5e0!3m2!1str!2saz!4v1717847599586!5m2!1str!2saz" },
  { name: 'Mingəçevir AzeriExpress filialı', address: 'Mingəçevir şəhəri, İsmət Qayıbov küçəsi, Ev 2 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3021.4799886838173!2d47.0473595!3d40.7734607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ2JzI0LjUiTiA0N8KwMDInNTAuNSJF!5e0!3m2!1str!2saz!4v1717845996493!5m2!1str!2saz"},
  { name: 'Nərimanov AzeriExpress filialı', address: 'Bakı şəhəri, AZ 1033, Yəhya Bakuvi küç., 84 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.401174481048!2d49.8632254!3d40.3999627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU5LjkiTiA0OcKwNTEnNDcuNiJF!5e0!3m2!1str!2saz!4v1717845102810!5m2!1str!2saz" },
  { name: 'Həzi Aslanov 2', address: 'Həzi Aslanov, Xudu Məmmədov küçəsi, Runex filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.419059993725!2d49.95227531373183!3d40.37107796856617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403064a8313264ff%3A0x42c3416090797486!2zMTggWHVkdSBNyZltbcmZZG92LCBCYWvEsQ!5e0!3m2!1str!2saz!4v1712565712017!5m2!1str!2saz" },
  { name: 'Kargolux Gəncə Prospekti', address: 'Xətai rayonu, Gəncə Prospekti 57, Araz Supermarketin yanı.', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3040.0975604012788!2d49.958141912078254!3d40.36236107132931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIxJzQ0LjUiTiA0OcKwNTcnMzguNiJF!5e0!3m2!1str!2saz!4v1709532908776!5m2!1str!2saz" },
  { name: 'Aygun Mall filialı', address: 'Bakı şəhəri, Sabunçu rayonu, Sakit Qocayev 29, Aygun Mall 2-ci mərtəbə Kargolux filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.5665025238777!2d49.96290967601106!3d40.41845317143928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzA2LjQiTiA0OcKwNTcnNTUuNyJF!5e0!3m2!1str!2saz!4v1718017294242!5m2!1str!2saz" },
  { name: 'İmişli AzəriExpress filialı', address: 'İmişli şəhəri, Heydər Əliyev prospekti ,111A AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3062.1805270178515!2d48.061509599999994!3d39.870194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUyJzEyLjciTiA0OMKwMDMnNDEuNCJF!5e0!3m2!1str!2saz!4v1717846641295!5m2!1str!2saz" },
  { name: 'Nərimanov', address: 'Nərimanov rayonu, Faiq Yusifov küçəsi 16 (Selcan Beauty ilə üzbəüz)', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12152.988641298658!2d49.8751552!3d40.4033751!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x520177c82a3690fb!2sKargolux!5e0!3m2!1saz!2s!4v1672146491795!5m2!1saz!2s" },
  { name: 'Baku Mall', address: 'Yasamal rayonu, Həsənbəy Zərdabi pr, Baku Mall TM 2-ci mərtəbə', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12155.437628408063!2d49.8068082!3d40.3898085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d89d8cc0c21%3A0xc627482f32b37631!2sBaku%20Mall!5e0!3m2!1str!2str!4v1696318774583!5m2!1str!2str" },
  { name: 'Sumqayıt filiali', address: '34 Nariman Narimanov, Sumqayıt (14 mərtəbə, Azpetrolun sağ tərəfi) 5 MKR', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.39288510304746!2d49.684278646820175!3d40.579438503903056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096cc6ca1bdc5%3A0x959a3007c9c5ea69!2s34%20Nariman%20Narimanov%2C%20Sumqayit%205007%2C%20Az%C9%99rbaycan!5e0!3m2!1saz!2s!4v1667199330479!5m2!1saz!2s" },
  { name: '28 May', address: '28 May metrosunun ikinci çıxışı, Salatın Əsgərova küçəsi, İzmir kokoreçin sağ tərəfi. Baku Medical Plazanın yaxınlığı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.2064689515787!2d49.84293311539495!3d40.38211637936917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzU1LjYiTiA0OcKwNTAnNDIuNCJF!5e0!3m2!1str!2saz!4v1688235507771!5m2!1str!2saz" },
  { name: 'Həzi Aslanov', address: 'Həzi Aslanov metrosu, Məhəmməd Hadi 80. Bank Of Bakunun arxası.', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d348.43037234100126!2d49.952523331432914!3d40.37055796824333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzE0LjEiTiA0OcKwNTcnMTAuNCJF!5e0!3m2!1str!2saz!4v1687441342831!5m2!1str!2saz" },
  { name: 'Xırdalan', address: '28-ci məhəllə, 17 nömrəli uşaq baxçasının arxası, Təcili tibbi yardim, Azərpoçtun 1 saylı şöbəsinin və 1saylı "jekin"yanı KARGOLUX təhvil məntəqəsi', workingHours: 'Həftə içi: 10:00 - 18:00 / Şənbə: 10:00 - 15:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3035.719239100076!2d49.736143976013096!3d40.45935067143284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI3JzMzLjciTiA0OcKwNDQnMTkuNCJF!5e0!3m2!1str!2saz!4v1698645660507!5m2!1str!2saz" },
  { name: 'Neftçilər', address: 'Nizami r, Qara Qarayev pr 94F, 102D (Baku Electronics sırası , 26 nömrəli şəhər poliklinikasının qadın məsləhətxanası ilə üzbə-üz)', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4114.389876064359!2d49.94729287580177!3d40.406211249717956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd9b6bc4674cc440!2zS2FyZ29sdXggTmVmdMOnaWzJmXI!5e0!3m2!1saz!2s!4v1653316737759!5m2!1saz!2s" },
  { name: 'Əcəmi - 20 Yanvar', address: 'Nəsimi rayonu, Asif Məhərrəmov küçəsi, 31. Murad marketlə üzbəüz İmişli kafesinin arxası', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.990917081443!2d49.808417!3d40.409051999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzMyLjYiTiA0OcKwNDgnMzAuMyJF!5e0!3m2!1str!2saz!4v1718015517751!5m2!1str!2saz" },
  { name: 'Zabrat', address: 'Sabunçu rayonu, Zabrat qəsəbəsi, Babək küçəsi 120, Ayxan market yaxınlığı, Zabrat DYP yolu ilə üzbəüz', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3034.828879525258!2d49.94828167601408!3d40.479050571429724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI4JzQ0LjYiTiA0OcKwNTcnMDMuMSJF!5e0!3m2!1str!2str!4v1707808375984!5m2!1str!2str" },
  { name: 'Maştağa filialı', address: 'Sabunçu rayonu, Maştağa qəsəbəsi, Axund Şeyx Hüseyn küçəsi 33, şamxal hamamının yanı Kargolux gəl al nöqtəsi', workingHours: 'Həftə içi: 10:00 - 18:00 / Şənbə: 10:00 - 15:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3032.282739183153!2d50.00261887601689!3d40.535342171420766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMyJzA3LjIiTiA1MMKwMDAnMTguNyJF!5e0!3m2!1str!2sus!4v1702380542957!5m2!1str!2sus" },
  { name: 'Qaraçuxur', address: 'Suraxanı rayonu, Qaraçuxur qəsəbəsi, Yusif Eyvazov küçəsi ev 2, Arena stor ilə üzbəüz Runex filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3038.4565837478035!2d49.98112487601007!3d40.398734971442565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzU1LjUiTiA0OcKwNTknMDEuMyJF!5e0!3m2!1str!2saz!4v1699002337083!5m2!1str!2saz" },
  { name: 'Azadlıq Metrosu', address: 'Azadlıq metrosu , Süleyman Sani Axundov küç Mega Toys oyuncaq mağazasının arxa tərəfində. Prestige Dental klinikin yanı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.2983076434257!2d49.843871!3d40.424392999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI1JzI3LjgiTiA0OcKwNTAnMzcuOSJF!5e0!3m2!1str!2saz!4v1709532043653!5m2!1str!2saz" },
  { name: 'Mingəçevir filialı', address: 'Mingəçevir, Heydər Əliyev prospekti ev 80/25, Mingəçevir Sənaye Parkı, Tekstilin qarşısı. Cavid ətriyyatın yanı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3021.672562088964!2d47.052768915406624!3d40.76922597932577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ2JzA5LjIiTiA0N8KwMDMnMTcuOSJF!5e0!3m2!1str!2saz!4v1689949550593!5m2!1str!2saz" },
  { name: 'Buzovna AzəriExpress filialı', address: 'Bakı, Buzovna qəs. Rasim İmanov 4 AzəriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3032.9654111138707!2d50.1013029!3d40.5202556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDMxJzEyLjkiTiA1MMKwMDYnMDQuNyJF!5e0!3m2!1str!2saz!4v1717845368604!5m2!1str!2saz" },
  { name: 'Quba AzəriExpress filialı', address: 'Quba şəhəri, Fətəli Xan küçəsi, Bina 57 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2994.5824610967493!2d48.507027699999995!3d41.3614284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIxJzQxLjEiTiA0OMKwMzAnMjUuMyJF!5e0!3m2!1str!2saz!4v1717846470880!5m2!1str!2saz" },
  { name: 'Lökbatan', address: 'İntiqam nəbiyev, Ticarət cərgəsi , Katv nin yanı Runex filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d190.11012544018828!2d49.74065048059214!3d40.3254391596404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDE5JzMxLjgiTiA0OcKwNDQnMjYuOSJF!5e0!3m2!1str!2saz!4v1699620730264!5m2!1str!2saz" },
  { name: 'İçərişəhər', address: 'Əhməd Cavad 15, City centre ticarət mərkəzi , Mağaza No 2 (Bank of bakunun arxası )', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3039.7599722557834!2d49.831062276008744!3d40.3698462714472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzExLjUiTiA0OcKwNTAnMDEuMSJF!5e0!3m2!1str!2saz!4v1711619411089!5m2!1str!2saz" },
  { name: 'Lənkəran AzəriExpress filialı', address: 'Lənkəran rayonu, Mirzə Məhəmməd Hüseyn Axund 21 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3111.3590490332963!2d48.8487301!3d38.7554681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQ1JzE5LjciTiA0OMKwNTAnNTUuNCJF!5e0!3m2!1str!2saz!4v1717846216158!5m2!1str!2saz" },
  { name: 'Sahil Qəsəbəsi', address: 'Mektebli kucesi 3, (Azerpoctun inzibati binasi ile uzbeuz)', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 11:00 - 15:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3046.3795652418157!2d49.574363676001454!3d40.22286217147154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDEzJzIyLjMiTiA0OcKwMzQnMzcuMCJF!5e0!3m2!1str!2saz!4v1713771402005!5m2!1str!2saz" },
  { name: 'Mərdəkan', address: 'Mərdəkan qəsəbəsi, Baba Əliyev küçəsi 71, Xarici Dillər Gimnaziyanın yaxınlığı, Runex gəl al nöqtəsi', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3034.625600235565!2d50.15391917601437!3d40.48354717142893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI5JzAwLjgiTiA1MMKwMDknMjMuNCJF!5e0!3m2!1str!2saz!4v1709993038118!5m2!1str!2saz" },
  { name: 'Yevlax OBA Azeriexpress filial', address: 'Yevlax şəhəri, Həzən bəy Zərdabi küçəsi 1V Azeriexpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3028.74902790263!2d47.1441462!3d40.6133606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM2JzQ4LjEiTiA0N8KwMDgnMzguOSJF!5e0!3m2!1str!2saz!4v1717846800356!5m2!1str!2saz" },
  { name: 'Şəki AzəriExpress filialı', address: 'Şəki şəhəri, Heydər Əliyev prospekti 71 Azeriexpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3001.8068814391945!2d47.178084999999996!3d41.2041837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzE1LjEiTiA0N8KwMTAnNDEuMSJF!5e0!3m2!1str!2saz!4v1717847339992!5m2!1str!2saz" },
  { name: 'Gəncə AzəriExpress filialı', address: 'Gəncə şəhəri, Atatürk pr 211b (Gəncə şəhəri İcra hakimiyyətinin yanı) AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3025.6712942009767!2d46.359635299999994!3d40.681211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQwJzUyLjQiTiA0NsKwMjEnMzQuNyJF!5e0!3m2!1str!2saz!4v1717845760119!5m2!1str!2saz" },
  { name: 'Zaqatala AzeriExpress filialı', address: 'Zaqatala rayonu, Dədə Qorqud küç., ev 14 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2982.029119791037!2d46.645645599999995!3d41.633502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDM4JzAwLjYiTiA0NsKwMzgnNDQuMyJF!5e0!3m2!1str!2saz!4v1717846960920!5m2!1str!2saz" },
  { name: 'Şüvəlan AzeriExpress filialı', address: 'Bakı , Xəzər ray. Şüvəlan qəs. Səməd Vurğun 115 AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3034.568810674047!2d50.17602639999999!3d40.484803299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI5JzA1LjMiTiA1MMKwMTAnMzMuNyJF!5e0!3m2!1str!2saz!4v1717844784649!5m2!1str!2saz" },
  { name: 'Suraxanı AzəriExpress filialı', address: 'Bakı, Suraxanı ray. Zahid Əliyev Ev 27Q mən. AzeriExpress filialı', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 16:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3037.8581728995896!2d50.002091!3d40.4119926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI0JzQzLjIiTiA1MMKwMDAnMDcuNSJF!5e0!3m2!1str!2saz!4v1717845582013!5m2!1str!2saz" },
  { name: 'Ağcabədi', address: 'Ağcabədi şəhəri , N.Nərimanov küç, 75A (Seyidoğlu marketin yanı)', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3053.9783055807975!2d47.45221707599293!3d40.053585071500365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAzJzEyLjkiTiA0N8KwMjcnMTcuMyJF!5e0!3m2!1str!2saz!4v1711957783993!5m2!1str!2saz" },
  { name: 'Sabirabad', address: 'Sabırabad şəhəri , İlham İsgəndərov küç 1 ,(Şahmat məktəbi, Köhnə Gəncə Pekarnisinin yanı) Runex gəl al nöqtəsi', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3056.0514877926284!2d48.46387097599072!3d40.007297471508444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAwJzI2LjMiTiA0OMKwMjcnNTkuMiJF!5e0!3m2!1str!2saz!4v1709118110841!5m2!1str!2saz" },
  { name: 'Şirvan', address: 'Şirvan, Xəqani küçəsi 12, Heydər Əliyev parkının, Əkizlər bəzək evinin yanı, RUNEX gəl al nöqtəsi', workingHours: 'Həftə içi: 10:00 - 18:00 / Şənbə: 10:00 - 15:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3058.2272522157527!2d48.946206575988356!3d39.958671571516916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU3JzMxLjIiTiA0OMKwNTYnNTUuNiJF!5e0!3m2!1str!2saz!4v1704307683524!5m2!1str!2saz" },
  { name: 'Kürdəmir', address: 'Kürdəmir rayonu, Məmməd Əmin Rəsülzadə küç 1, Lux İnn hotel və Kürdəmir park ilə üzbəüz', workingHours: 'Həftə içi: 10:00 - 19:00 / Şənbə: 10:00 - 19:00 ', coordinates: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4827.020494383646!2d48.146891401352164!3d40.34606551693934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIwJzQ3LjIiTiA0OMKwMDknMDAuNSJF!5e0!3m2!1str!2saz!4v1709375114451!5m2!1str!2saz" },
  
];

const Contact = () => {
  const dispatch = useDispatch();
  const selectedBranch = useSelector(state => state.branch.selectedBranch);

  const handleBranchClick = (branch) => {
    dispatch(selectBranch(branch));
  };

  return (
    <div className={styles.contact}>
        <div className={styles.container}>
            <div className={styles.contactText}>
                <h1>Əlaqə</h1>
                <p>Saytın əlaqə formundan göndərilən mesajlar iş günləri ərzində növbəli şəkildə cavablandırılacaqdır.</p>
            </div>
            <div className={styles.filialBox}>
              {branches.map((branch, index) => (
                <button key={index} onClick={() => handleBranchClick(branch)}>
                  {branch.name}
                </button>
              ))}
            </div>
            <div className={styles.contactBox}>
                <form action="">
                    <input type="text" className={styles.ad} placeholder='Adınız'/>
                    <input type="email" className={styles.email} placeholder='E-mail'/>
                    <textarea name="" id="" placeholder='Mesajınız'></textarea>
                    <button>Göndər</button>
                </form>
                <div className={styles.filialContact}>
                    <div className={styles.phoneBox}>
                        <div className={styles.boxIcon}>
                            <FiPhoneCall />
                        </div>
                        <div className={styles.boxText}>
                            <h2>Telefon nömrələrimiz</h2>
                            <p>012 525 26 26</p>
                        </div>
                    </div>
                    <div className={styles.workingHoursBox}>
                        <div className={styles.boxIcon}>
                            <FiPhoneCall />
                        </div>
                        <div className={styles.boxText}>
                            <h2>İş günləri/saatları:</h2>
                            <p>{selectedBranch.workingHours}</p>
                        </div>
                    </div>
                    <div className={styles.adressBox}>
                        <div className={styles.boxIcon}>
                            <HiOutlineLocationMarker />
                        </div>
                        <div className={styles.boxText}>
                            <h2>Ünvan</h2>
                            <p>{selectedBranch.address}</p>
                        </div>
                    </div>
                    <div className={styles.emailBox}>
                        <div className={styles.boxIcon}>
                            <FaAt />
                        </div>
                        <div className={styles.boxText}>
                            <h2>E-mail</h2>
                            <p>info@kargolux.az</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactsMap}>
                    <iframe 
                        src={selectedBranch.coordinates} 
                        // width="600" 
                        // height="450" 
                        // style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;
