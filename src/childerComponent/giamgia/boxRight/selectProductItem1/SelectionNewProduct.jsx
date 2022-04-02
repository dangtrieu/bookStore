import React, { useEffect, useState } from "react";
import * as S from "./selectionNewReduce.style";
import paths from "./../../../../Constants/paths";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../../Redux/Action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../../../Redux/Action";

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});
export default function SelectionNewProduct() {
  const dispatch = useDispatch();
  const notify = (e) => toast(e);
  const [book, setBook] = useState([]);
  const [counts, setCounts] = useState(1);

  const dataBook = useSelector((state) => state.Reduce.dataBook);

  const handleChanges = () => {
    if (dataBook?.length > 0) {
      const book = [];
      for (var i = 0; i < dataBook.length; i++) {
        if (i < 4) {
          book.push(dataBook[i]);
        }
      }
      setBook(book);
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
    handleChanges();
  }, [dataBook]);
  return (
    <S.boxx>
      <S.newProduct>
        <S.selectionnewProduct>
          <span>sản phẩm Ban chay</span>
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
