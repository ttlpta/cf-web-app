import React, { useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import NewItem from '../components/New/NewItem';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';

export default function New() {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <Layout>
      <div className="new">
        <Breadcrumb className="new__breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/new">NEWS</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="new__title">NEWS</h2>
        <h3 className="new__subtitle">Newest</h3>
        <div className="new__divider" />
        <div className="new__filter">
          <Button className="new__filter__btn" onClick={() => setToggleFilter(!toggleFilter)}>
            <span>カテゴリ</span>
            <BsFilter />
          </Button>
        </div>
        <div className="new__list">
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
          <Pagination current={1} total={10} pageSize={3} />
        </div>
      </div>
      <Modal visible={toggleFilter} onClose={() => setToggleFilter(false)} title="カテゴリ">
        <div className="new__filter__list">
          <Button className="filter__list--button">
            <i className="icon-notice" /> <span>NOTICE</span>
          </Button>
          <Button className="filter__list--button">
            <i className="icon-shake-hand" /> <span>EVENT</span>
          </Button>
          <Button className="filter__list--button">
            <i className="icon-media" /> <span>MEDIA</span>
          </Button>
          <Button className="filter__list--button">
            <i className="icon-three-dot" /> <span>OTHER</span>
          </Button>
        </div>
      </Modal>
    </Layout>
  );
}
