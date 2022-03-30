import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./detail.style";
import { FaAngleRight } from "react-icons/fa";
import useQuery from "../../hooks/useQuery";
import paths from "./../../Constants/paths";

export default function Detail() {
  const qrString = useQuery();
  const { value } = qrString;

  const bookList = useSelector((state) => state.Reduce.dataBook);

  const lengths = bookList.length;
  const result = [];
  for (var i = 0; result.length < 3; i++) {
    var r = Math.floor(Math.random() * lengths);
    if (result.indexOf(bookList[r]) === -1) result.push(bookList[r]);
  }

  //
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
                <S.Spham>Sản Phẩm Liên Quan</S.Spham>
                <S.boclai>
                  {result.map((x, i) => (
                    <S.boxImsg key={i}>
                      <S.urlimg
                        to={{
                          pathname: paths.detail,
                          search: "?id=" + x.id,
                        }}
                      >
                        <img src={x.img} alt="" />
                      </S.urlimg>
                      <S.ttitles>
                        <S.camnag>{x.name}</S.camnag>
                        <S.mota>{x.tinhtrang}</S.mota>
                        <S.gia>{x.price}đ</S.gia>
                      </S.ttitles>
                    </S.boxImsg>
                  ))}
                </S.boclai>
              </S.cotPhai>
            </S.boxChitiet>
          )}
        </S.boxDetail>
      </S.Container>
    </S.boxs>
  );
}
