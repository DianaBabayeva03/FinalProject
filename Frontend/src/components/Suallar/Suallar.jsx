import React from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toggleQuestion } from '../../redux/slices/faqSlice';
import styles from './Suallar.module.scss';

const Suallar = () => {
  const dispatch = useDispatch();
  const openQuestions = useSelector(state => state.faq.openQuestions);

  const handleToggle = (index) => {
    dispatch(toggleQuestion(index));
  };

  return (
    <div className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.faqTitle}>
            <h1>Sullar və cavabları</h1>
          </div>
          {faqData.map((faq, index) => (
            <div className={styles.faq} key={index}>
              <div className={styles.questionBox} onClick={() => handleToggle(index)}>
                <b className={styles.question}>{faq.question}</b>
                <i className={openQuestions.includes(index) ? styles.iconClose : styles.iconOpen}>
                  {openQuestions.includes(index) ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                </i>
              </div>
              <div className={openQuestions.includes(index) ? styles.answerBoxOpen : styles.answerBoxClosed}>
                <div className={styles.answer}>
                  {faq.answer.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'Nə üçün biz?',
    answer: [
      ' "Mənim üçün Sifariş Et" xidməti. Sifariş edilmiş məhsulun bəyənnaməsini saytımızda doldurmağa ehtiyac qalmır. Bəyənnamənizin bizim tərəfdən doldurulması. Onlayn kuryer xidməti. Minimal çatdırılma tarifləri $0.7-dən başlayan qiymətlər. Maye məhsulları ilə adi məhsulların eyni olması. Sürətli çatdırılma xidməti. Ofisin şəhər mərkəzində və əlverişli ünvanda yerləşməsi. Operativ müştəri xidmətləri.'
    ]
  },
  {
    question: 'Necə sifariş edə bilərəm?',
    answer: [
      'Türkiyənin istənilən onlayn mağazalarından sifariş edə bilərsiniz. Bunun üçün ilk öncə www.KargoLux.az saytından qeydiyyatdan keçməlisiniz. Daha sonra, əgər siz məhsulu özünüz onlayn mağazadan alırsınızsa o zaman tələb edilən adres yerində şəxsi kabinetinizdəki "Türkiyə Ünvanım" adresini qeyd etməlisiniz. Əgər məhsulun bizim tərəfdən alınmasını istəyirsinizə o zaman "Sifariş et" düyməsinə daxil olaraq məhsulun linkini, ölçüsünü? sayını və qiymətini qeyd edib ödəniş edirsiniz.'
    ]
  },
  {
    question: 'Trendyol onay kodunu necə ala bilərəm?',
    answer: [
      'İlk öncə Kargolux mobil tətbiqindən və ya Kargolux.az saytından şəxsi kabinetinizə daxil olaraq Türkiyə ünvanım bölməsinə daxil olursunuz. Bölmədə göstərilən məlumatları trendyolda şəxsi hesabınızdan "Adres Bilgilərim" bölməsinə daxil olursunuz. "Türkiyə Ünvanım" bölməsində olan bütün məlumatları olduğu kimi trendyolun adres qisminə əlavə edirsiniz. Nömrə yerinə isə "trendyol nömrəsi al" butonuna tıklayaraq sizin üçün ayrılmış nömrəni əldə edirsiniz. Həmin nömrəni olduğu kimi trendyolun adres qismindəki nömrə yerinə daxil edib adres ekle butonuna tıklayırsınız. Bu zaman doğrulama kodu sizin Kargoluxda qeydiyyatdan keçdiyiniz zaman istifadə etdiyiniz şəxsi mobil nömrənizə gələcəkdir. Kodu yazaraq adresi əlavə edə bilərsiniz.'
    ]
  },
  {
    question: 'Sifarişlər neçə günə gəlir?',
    answer: [
      'Sifarişləriniz Türkiyə anbarımıza daxil olduğu gündən etibarən sistemə daxil edilir və bu barədə sizə sms bildirişi göndərilir. Daha sonra Türkiyə anbarımızda olan bağlamalar 1 maksimum 2 gün ərzində Bakıya yola salınır. Qeyd edəkki, həftə sonları, rəsmi bayram günləri və fors major hallarda çatdırılma müddəti bizdən aslı olmayan səbəblərə görə uzana bilər'
    ]
  },
  {
    question: 'Alınan məhsulları geri qaytarmaq mümkündürmü?',
    answer: [
      'Şirkətimiz hələki bağlamaların Bakıdan geri qaytarma prosesini həyata keçirmir'
    ]
  },
  {
    question: 'Ofisinizin iş günləri və saatları nə zamandır?',
    answer: [
      'Bazar ertəsi-şənbə günləri 10:00-dan 19:00-dək xidmətinizdəyik. Ancaq 7/24 istədiyiniz zaman sifariş verə bilərsiniz. Sifarişlər fasiləsiz olaraq əməkdaşlarımız tərəfindən alınır'
    ]
  },
  {
    question: 'Mən Türkiyə ünvanı necə əldə edə bilərəm?',
    answer: [
      'Saytımızda qeydiyyatdan keçdikdən sonra şəxsi kabinetinizə daxil olaraq, "Türkiyə ünvanım" bölüməsindən Türkiyədəki anbarımızın ünvanını kopyalayıb alış-veriş etmək istədiyiniz mağazanın ünvan yerində qeyd edərək sifarişlərinizi Türkiyə anbarımıza yönləndirə bilərsiz.'
    ]
  },
  {
    question: 'Bəyənnamə necə yüklənir?',
    answer: [
      'Onlayn alış-veriş mağazalarından özünüz sifariş etdiyiniz zaman öncədən saytımızda bəyan edilməsi tələb edilmir. Xarici anbara daxil olan bağlamanızın üzərində faktura olarsa biz sizin yerinizə bəyan edirik. Əgər məhsulun üzərində faktura olmazsa digər məlumatları doldururuq siz isə sadəcə məhsulun qiymətini yazıb təsdiq edirsiniz. Bunun üçün siz KargoLux.az saytına və ya mobil tətbiqinə daxil olaraq bağlamalarım bölməsindən məhsulunuzun sifariş nömrəsinə daxil olaraq (misal: LUX12345) bağlamanı redaktə edirsiniz, sonra isə məhsulun qiymətini yazıb təsdiq edirsiniz. Bununla siz bağlamanızı kargoluxda bəyan etmiş olursunuz.'
    ]
  },
  {
    question: 'KargoLux saytında bəyənnamə nə zaman doldurulur?',
    answer: [
      'Türkiyə mağazalarından sifariş etdiyiniz bağlamanı saytımızda bəyan etməyə ehtiyac yoxdur. Biz sizin yerinizə bağlamanız Türkiyə anbarına daxil olduğu andan Kargolux.Az saytında bəyan edirik və bu sizin Bəyənnamələr bölməsində əks olunur. Bununla bağlı sizin bizim saytdan qeydiyyatdan keçdiyiniz mobil nömrənizə sms bildiriş göndərilir. Diqqət: Bəzən özünüz sifariş etdiyiniz bağlamalarda Faktura və əlavə məlumatlar qeyd edilmir. Belə olduğu halda sizin mobil nömrənizə hesabınlza daxil olaraq bəyənnamə yükləyin bildirişi gələcək. O zaman siz hesabınıza daxil olaraq “Bəyənnamələrim” bölməsindən sms-də göstərilən bağlama nömrəsini redaktə edib bağlamanız haqda məlumatları doldurmalısınız.'
    ]
  },
  {
    question: '"Smart Customs"-ın üstünlükləri nələrdir?',
    answer: [
      'Müştərilər Smart Customs tətbiqində vəya e.customs.gov.az saytında bağlamalarını bəyan etdikdə 300 dollar limitini keçdikləri təqdirdə ödənilməli olan vergi məbləğini onlayn olaraq ödəyə bilirlər və bağlamalarını təhvil almaq üçün Gömrük orqanlarına yaxınlaşmalarına ehtiyaç qalmır. Müştərilər eyni zamanda bağlamaların gömrük anbarından saxlanc haqqından da (İlk gün üçün 15 AZN, sonraki hər gün üçün 2 AZN) azad edilirlər. Beləliklə müştərilər bütün bağlamalarını "Smart Customs"- da bəyan edərək həm saxlanc haqqından həm gömrüyə getməkdən həm də broker xidmətindən istifadə etməkdən azad edilirlər.'
    ]
  },
];

export default Suallar;