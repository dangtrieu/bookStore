import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./detail.style";
import { FaAngleRight } from "react-icons/fa";
import useQuery from "../../hooks/useQuery";
export default function Detail() {
  const qrString = useQuery();
  const { value } = qrString;

  const bookList = useSelector((state) => state.Reduce.dataBook);

  const [book, setBook] = useState({});

  useEffect(() => {
    setBook(bookList.find((b) => b.id === value));
  }, [bookList]);

  const [count, setCount] = useState(0);
  return (
    <S.boxs>
      <S.Container>
        <S.boxDetail>
          <S.BoxTitle>
            <S.title>
              <span>Trang Chủ</span>
              <FaAngleRight />
            </S.title>
            <S.title>
              <span>Đăng Kí Tài Khoản</span>
              <FaAngleRight />
            </S.title>
            <S.title>
              {book && <span>{book.name}</span>}
              <FaAngleRight />
            </S.title>
          </S.BoxTitle>
          {book && (
            <S.boxChitiet>
              <S.CotTrai>
                <S.anh>
                  <img src={book.img} alt="" />
                </S.anh>
                <S.thongtin>
                  <S.ttBox>
                    <S.titleS>{book.name}</S.titleS>
                  </S.ttBox>
                  <S.ttBox>
                    <S.typeS>
                      Tình Trang: <span>{book.status} </span> Loại:
                      <span>{book.type}</span>
                    </S.typeS>
                  </S.ttBox>
                  <S.ttBox>
                    <S.prices>{book.price}</S.prices>
                  </S.ttBox>
                  <S.ttBox>
                    <S.statusts>
                      <em>({book.tinhtrang})</em>
                    </S.statusts>
                  </S.ttBox>
                  <S.ttBox>
                    <S.bangtinh>
                      <S.amount>
                        <S.apartfrom onClick={() => setCount(count - 1)}>
                          -
                        </S.apartfrom>
                        <S.number>{count}</S.number>
                        <S.adds onClick={() => setCount(count + 1)}>+</S.adds>
                      </S.amount>
                    </S.bangtinh>
                    <S.themgio>
                      <span>thêm vào giỏ hàng</span>
                    </S.themgio>
                  </S.ttBox>
                  <S.ttBox>
                    Gọi ngay <span>1800 6750</span> để được tư vấn miễn phí
                  </S.ttBox>
                </S.thongtin>
              </S.CotTrai>
              <S.cotPhai>
                <S.Spham>san pham lien quan</S.Spham>
              </S.cotPhai>
            </S.boxChitiet>
          )}
        </S.boxDetail>
      </S.Container>
    </S.boxs>
  );
}
