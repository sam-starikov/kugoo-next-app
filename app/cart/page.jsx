import Catalogue from '@/components/Catalogue/Catalogue';
import Header from '@/components/Header';
import Search from '@/components/Search/Search';

export default function CartPage() {
  return (
    <Header>
      <>
        <Catalogue />
        <Search />
      </>
    </Header>
  );
}
