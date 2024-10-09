import { createBrowserRouter } from "react-router-dom";
import { HomePage, AuthPage } from "../layouts";
import {
  Home,
  AboutUs,
  ContactUs,
  BlogPage,
  Faq,
  GridDefault,
  HektoDemo,
  NotFound,
  OrderCompleted,
  ProductDetails,
  ShopLeftSidebar,
  ShopList,
  ShoppingCart,
  SingleBlog,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog-page",
        element: <BlogPage />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/shop-left-sidebar",
        element: <ShopLeftSidebar />,
      },
      {
        path: "/shop-list",
        element: <ShopList />,
      },
      {
        path: "/grid-default",
        element: <GridDefault />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/order-completed",
        element: <OrderCompleted />,
      },
      {
        path: "/hekto-demo",
        element: <HektoDemo />,
      },
      {
        path: "/single-blog",
        element: <SingleBlog />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth-page",
    element: <AuthPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
