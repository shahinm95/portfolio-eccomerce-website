import { NextPage } from "next";
import { Box, Text, Flex, Link, AspectRatio, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions";
import Head from "next/head";
import AnouncmentBar from "@/components/anounceMent/AnouncmentBar";
import Header from "@/components/header/Header";
import Footer from "@/components/Body/Footer/Footer";
import SubMenu from "@/components/Body/subMenue/SubMenu";
import ProductPageComponent from "@/components/ProductPage/ProductPage";
import { MotherList } from "@/listdata/motherList";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
interface Product {
  title: string;
  img: string;
  oldpr: string;
  price: string;
}

const ProductPage = () => {
  const router = useRouter();
  const  productName  = router.asPath;
  const productString =typeof productName === "string" ? decodeURIComponent(productName) : ""
  const newString = productString.replace(/\//, "")
  const productId: number = MotherList.findIndex(
    (name) => name.title === newString
  );
  const product: Product =
    productId === -1 ? ({} as Product) : MotherList[productId];
  console.log(product);
  return (
    <>
      <Head>
        <title>Dress Shop</title>
        <meta name="description" content="Dress Shop portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box>
          <AnouncmentBar />
          <Header />
          <ProductPageComponent product={product} />
          <Footer />
          <SubMenu />
        </Box>
      </main>
    </>
  );
};

export default ProductPage;

// export function getStaticPaths() {
//   const products: Product[] = MotherList;
//   const paths = products.map((product) => ({
//     params: { productId: encodeURIComponent(product.title) },
//   }));
//   return { paths, fallback: false };
// }

// export function getStaticProps({ params }: { params: Record<string, string> }) {
//   const productName = decodeURIComponent(params.productId);
//   const productId: number = MotherList.findIndex(
//     (name) => name.title === productName
//   );
//   const product: Product =
//     productId === -1 ? ({} as Product) : MotherList[productId];
//   return { props: { product } };
// }
