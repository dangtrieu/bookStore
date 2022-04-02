import React, { useEffect, useState } from "react";
import * as S from "./discountproducts.style";
import { FaShoppingBag } from "react-icons/fa";
import paths from "./../../../../Constants/paths";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../../../Redux/Action";

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});
export default function DiscountProducts() {
  const notify = (e) => toast(e);
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.Reduce.dataBook);
  const [book, setBook] = useState([]);
  const [counts, setCounts] = useState(1);

  const handleChange = () => {
    if (bookList?.length > 0) {
      let value = [];
      for (let i = 0; i < bookList.length; i++) {
        //value = bookList.find((item) => item.price === bookList[i].price === 56000);
        if (bookList[i].price === 56000) {
          bookList[i].price =
            bookList[i].price - (bookList[i].price * 10) / 100;
          value.push(bookList[i]);
        }
      }
      setBook(value);
    }
  };

  const handleCart = (x) => {
    if (counts !== 0) {
      dispatch(addToCart({ book: x, counts: counts }));
      notify("them thanh cong");
    } else {
      notify("them that bai");
    }
  };
  useEffect(() => {
    handleChange();
  }, [bookList]);

  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm Giảm giá </span>
        </S.selectionnewProduct>
        <S.selectionnewProduct>Xem tất cả {">>"}</S.selectionnewProduct>
      </S.newProduct>
      <S.boxgrow>
        {book.map((x, i) => (
          <S.boxProductNew key={i}>
            <S.paddingProductnew>
              <S.boxImg
                to={{
                  pathname: paths.detail,
                  search: "?id=" + x.id,
                }}
              >
                <img src={x.img} />
              </S.boxImg>
              <S.tablePrice>
                <h3 to={paths.detail}>{x.name}</h3>
                <S.spricebox>
                  <h5>{x.price}</h5>
                  <h3>30.000đ</h3>
                </S.spricebox>
                <S.buttonclick onClick={() => handleCart(x)}>
                  <S.bags>
                    <FaShoppingBag />
                  </S.bags>
                  <S.Spans>Thêm vào giỏ hàng</S.Spans>
                </S.buttonclick>
              </S.tablePrice>
            </S.paddingProductnew>
          </S.boxProductNew>
        ))}
      </S.boxgrow>
    </S.boxx>
  );
}
