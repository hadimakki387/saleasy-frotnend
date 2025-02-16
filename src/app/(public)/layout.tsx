"use client";
import { setUser } from "@/components/global-slice";
import MainLoader from "@/components/global/navLoader/MainLoader";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import SearchDialog from "@/components/layout/SearchDialog";
import { setCartItems } from "@/core/features/customer/item-page/redux/redux";
import AuthenticationDialog from "@/core/features/customer/landing/components/AuthenticationDialog";
import {
  useGetMeQuery,
  useGetStoreDataQuery,
} from "@/core/features/customer/landing/redux/rtk";
import CartDrawer from "@/core/features/customer/search-page/components/CartDrawer";
import {
  notFound,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import React, { Suspense, useLayoutEffect } from "react";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const { store } = useParams();
  const {
    data: storeData,
    isLoading: storeLoading,
    error: storeError,
  } = useGetStoreDataQuery({
    id: store as string,
  });
  // const { CartItems } = useAppSelector((state) => state.ItemSlice);
  const dispatch = useDispatch();
  const cart = localStorage.getItem("cart_items");
  const token = localStorage.getItem("beerer");
  const params = useSearchParams();
  const adminRedirect = params.get("adminRedirect");
  const router = useRouter();
  useLayoutEffect(() => {
    if (cart) {
      const cartItems = JSON.parse(cart);
      if (cartItems.length > 0) {
        dispatch(setCartItems(cartItems));
      }
    }
  }, [cart]);
  const { data, isError } = useGetMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  useLayoutEffect(() => {
    if (data && !isError) {
      dispatch(setUser(data));
    }
    if (isError) {
      dispatch(setUser(null));
    }
  }, [data, isError]);

  useLayoutEffect(() => {
    if (token && adminRedirect) {
      router.push(adminRedirect);
    }
  }, [token, adminRedirect]);

  useLayoutEffect(() => {
    if (storeData && storeData?.link?.theme?.colors) {
      window.document.documentElement.style.setProperty(
        "--primary",
        storeData?.link?.theme?.colors?.primary
      );
      window.document.documentElement.style.setProperty(
        "--secondary",
        storeData?.link?.theme?.colors?.secondary
      );
      window.document.documentElement.style.setProperty(
        "--error",
        storeData?.link?.theme?.colors?.error
      );
      window.document.documentElement.style.setProperty(
        "--warning",
        storeData?.link?.theme?.colors?.warning
      );
      window.document.documentElement.style.setProperty(
        "--success",
        storeData?.link?.theme?.colors?.success
      );
    }
  }, [storeData]);

  if (!storeData && storeError) throw notFound();
  return (
    <>
      {storeLoading ? (
        <div className="h-screen flex items-center justify-center">
          <MainLoader />
        </div>
      ) : (
        storeData && (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <Header link={storeData} />
            </Suspense>
            <main className="">
              {" "}
              <div
                className={`max-sm:px-2 px-4 2xl:px-40 py-4 flex flex-col min-h-screen ${
                  path.split("/").includes("search")
                    ? "bg-white"
                    : path.split("/").includes("item")
                    ? "bg-[#f6f9fc]"
                    : "bg-primary-bg"
                }`}
              >
                {" "}
                <NextTopLoader
                  color="var(--error)"
                  initialPosition={0.08}
                  crawlSpeed={200}
                  height={3}
                  crawl={true}
                  showSpinner={true}
                  easing="ease"
                  speed={200}
                  shadow="0 0 10px var(--error),0 0 5px var(--error)"
                  template='<div class="bar" role="bar"><div class="peg"></div></div>'
                  zIndex={1600}
                  showAtBottom={false}
                />
                <AuthenticationDialog
                  logo={storeData.logo}
                  storeName={storeData.name}
                />
                <SearchDialog />
                <div className="col-span-1 max-lg:hidden">
                  <CartDrawer />
                </div>
                {children}
              </div>
            </main>

            <Footer data={storeData} />
          </>
        )
      )}{" "}
    </>
  );
}
