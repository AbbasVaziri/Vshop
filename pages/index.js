import ProductImagesUnderAmazing from "@/Components/4ProductImages/productImagesUnderAmazing";
import SevenIcons from "@/Components/SevenIcons/SevenIcons";
import ShopByCategory from "@/Components/Shop-by-category/ShopByCategory";
import AmazingSuperMarket from "@/Components/amazingSupermarket/AmazingSuperMarket";
import IncredibleOffers from "@/Components/incredibleOffers/IncredibleOffers";
import MainSliderSwiper from "@/Components/mainSlider/MainSliderSwiper";
import Context from "@/contextApi/Context";
import { GETT } from "@/repository/FetchApiRepository";

export default function Home(props) {
  return (
    <>
      <Context.Provider value={{ mainSliderImages: props.mainSliderResponse }}>
        <MainSliderSwiper />
        <SevenIcons products={props.sevenIconsResponse} />
        <IncredibleOffers data={props.incredibleOffersResponse} />
      </Context.Provider>
      <AmazingSuperMarket />
      <ProductImagesUnderAmazing />
      <ShopByCategory />
    </>
  );
}

export async function getStaticProps(context) {
  const mainSliderRequest = await GETT("/public/mainSlider");
  const mainSliderResponse = await mainSliderRequest.json();

  const sevenIconsRequest = await GETT("/SevenIcons");
  const sevenIconsResponse = await sevenIconsRequest.json();

  const incredibleOffersRequest = await GETT("/products/incredibleOffers");
  const incredibleOffersResponse = await incredibleOffersRequest.json();

  return {
    props: {
      mainSliderResponse,
      sevenIconsResponse,
      incredibleOffersResponse,
    },
    revalidate: 600,
  };
}
