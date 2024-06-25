import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Avtomobil məhsulları',
    'Uşaq məhsulları',
    'Kosmetika',
    'Musiqi aksesuarları',
    'Multibrend mağazalar',
    'Geyim, ayaqqabı, aksesuarlar',
    'İdman məhsulları',
    'Maraq və hobbi',
    'Məişət texnikası və elektronika',
    'Ev və təmir üçün məhsullar',
    'Kitab',
    'Ev əşyaları',
  ],
  shops: [
    { id: 1, name: 'HepsiBurada', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/172.png', url: 'https://www.hepsiburada.com/' },
    { id: 2, name: 'Mavi', category: 'Geyim, ayaqqabı, aksesuarlar', logo: 'https://kargolux.az/storage/shops/25.png', url: 'https://www.mavicompany.com/en' },
    { id: 3, name: 'MAC', category: 'Kosmetika', logo: 'https://kargolux.az/storage/shops/32.png', url: 'https://www.maccosmetics.com/' },
    { id: 4, name: 'Aloparca', category: 'Avtomobil məhsulları', logo: 'https://kargolux.az/storage/shops/59.png', url: 'https://www.aloparca.com/' },
    { id: 5, name: 'Lacoste', category: 'Geyim, ayaqqabı, aksesuarlar', logo: 'https://kargolux.az/storage/shops/33.png', url: 'https://global.lacoste.com/en/homepage' },
    { id: 6, name: 'Soobe', category: 'Uşaq məhsulları', logo: 'https://kargolux.az/storage/shops/88.png', url: 'https://www.soobe.com.tr' },
    { id: 7, name: 'Mini city', category: 'Uşaq məhsulları', logo: 'https://kargolux.az/storage/shops/53.png', url: 'https://www.minicity.com.tr/' },
    { id: 8, name: 'Gitti Gidiyor', category: 'Musiqi aksesuarları', logo: 'https://kargolux.az/storage/shops/178.png', url: 'https://www.pierrecardin.com.tr/' },
    { id: 9, name: 'N11', category: 'Musiqi aksesuarları', logo: 'https://kargolux.az/storage/shops/201.png', url: 'https://www.n11.com/' },
    { id: 10, name: 'Pull Bear', category: 'Multibrend mağazalar',  logo: 'https://kargolux.az/storage/shops/140.png', url: 'https://www.pullandbear.com/az/' },
    { id: 11, name: 'Brandroom', category: 'Multibrend mağazalar', logo: 'https://kargolux.az/storage/shops/151.png', url: 'https://www.brandroom.com.tr/kadin' },
    { id: 12, name: 'Koton', category: 'Multibrend mağazalar',  logo: 'https://kargolux.az/storage/shops/173.png', url: 'https://www.koton.com/' },
    { id: 13, name: 'Nike', category: 'İdman məhsulları', logo: 'https://kargolux.az/storage/shops/44.png', url: 'https://www.nike.com/' },
    { id: 14, name: 'Columbia', category: 'İdman məhsulları', logo: 'https://kargolux.az/storage/shops/86.png', url: 'https://www.columbia.com.tr/' },
    { id: 15, name: 'Adidas', category: 'İdman məhsulları', logo: 'https://kargolux.az/storage/shops/77.png', url: 'https://www.adidas.com/us' },
    // { id: 16, name: 'Pierre Cardin', category: 'İdman məhsulları', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 17, name: 'Pierre Cardin', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 18, name: 'Pierre Cardin', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 19, name: 'Pierre Cardin', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 20, name: 'Pierre Cardin', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 21, name: 'Pierre Cardin', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 22, name: 'Pierre Cardin', category: 'Kitab', logo: 'https://kargolux.az/storage/shops/23.png', url: 'https://www.pierrecardin.com.tr/' },
    // { id: 23, name: 'Trendyol', category: 'Multibrend mağazalar', logo: 'https://kargolux.az/storage/shops/198.png', url: 'https://www.trendyol.com' },
    // { id: 24, name: 'Trendyol', category: 'Multibrend mağazalar', logo: 'https://kargolux.az/storage/shops/198.png', url: 'https://www.trendyol.com' },
    { id: 25, name: 'Trendyol', category: 'Geyim, ayaqqabı, aksesuarlar', logo: 'https://kargolux.az/storage/shops/198.png', url: 'https://www.trendyol.com' },

  ],
  selectedCategory: null,
};

const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { selectCategory } = shopsSlice.actions;
export default shopsSlice.reducer;