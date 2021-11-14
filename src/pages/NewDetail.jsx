import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import NewItem from '../components/New/NewItem';

export default function NewDetail() {
  return (
    <Layout>
      <div className="new">
        <Breadcrumb className="new__breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/news">NEWS</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/news/detail">Photobook release dicision!</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="new__detail">
          <div className="new__detail__content">
            <div className="detail__header">
              <div className="detail__header__time">2021.1.1</div>
              <h1 className="detail__header__title">Photobook release dicision!</h1>
            </div>
            <div className="detail__content">
              <p>
                Thank you for your warm support to
                <br />
                Madoka Moriyasu.
              </p>

              <p>
                The photo book will be released on <br />
                August 25, 2021!
              </p>

              <p>
                <b>■ Summary</b>
                <br />
                Madoka Moriyasu Photobook (provisional)）
                <br />
                Issued by: 〇〇 company
                <br />
                Price: 2000 yen + tax
                <br />
                Format: A4 size, 128 pages in color
                <br />
                Photograph: 〇〇
                <br />
                {'<Regular cover>'}
              </p>

              <img src="https://picsum.photos/790/450" alt="Img" />
              <div className="detail__content__btn">
                <Button>Click here to purchase</Button>
              </div>
            </div>
            <div className="detail__footer">
              <Button className="detail__footer__btn">Back to news list</Button>
            </div>
          </div>
          <div className="new__detail__related">
            <h3 className="detail__related__title">関連ニュース</h3>
            <div className="detail__related__list">
              <NewItem
                className="new__list__item"
                src="https://picsum.photos/128/90"
                alt="Title new"
                icon="icon-camera"
                time="24 hours ago"
                description="サンプルサンプルサンプルサンプルサンプル サンプルサンプルサンプルサンプル"
              />
              <NewItem
                className="new__list__item"
                src="https://picsum.photos/128/90"
                alt="Title new"
                icon="icon-heart"
                time="2021.1.1"
                description="FCイベント開催のお知らせ"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
