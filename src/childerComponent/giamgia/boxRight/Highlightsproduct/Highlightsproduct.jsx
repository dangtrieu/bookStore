import React, { useEffect, useState } from "react";
import * as S from "./Highlightsproduct.style";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import paths from "./../../../../Constants/paths";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../../../Redux/Action";

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});

export default function Highlightsproduct() {
  const notify = (e) => toast(e);
  const dispatch = useDispatch();
  const [counts, setCounts] = useState(1);
  const [book, setBook] = useState([]);

  const dataBook = useSelector((state) => state.Reduce.dataBook);

  const handleChanges = () => {
    if (dataBook.length > 0) {
      let value = [];
      for (let i = 0; i < dataBook.length; i++) {
        const newdate = new Date() - new Date(dataBook[i].date);
        const newnow = newdate / (1000 * 3600 * 24);
        if (newnow < 5) {
          value.push(dataBook[i]);
        }
      }
      setBook(value);
    }
  };
  useEffect(() => {
    handleChanges();
  }, [dataBook]);

  const handleCart = (x) => {
    if (counts !== 0) {
      dispatch(addToCart({ book: x, counts: counts }));
      notify("them thanh cong");
    } else {
      notify("them that bai");
    }
  };
  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm mới</span>
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
                  <h5>{x.price}đ</h5>
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
