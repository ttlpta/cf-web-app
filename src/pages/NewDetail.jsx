import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import Button from '../components/Button';
import NewItem from '../components/New/NewItem';
import { useGetCampaignQuery } from '../services/CompanyService';
import PATH from '../contants/path';
import SocialShare from '../components/SocialShare';

export default function NewDetail() {
  const { id } = useParams();
  const currentUrl = window.location.href;

  const { data: newDetailData, isSuccess: isGetScheduleDetailDataSuccess } = useGetCampaignQuery(id);

  const { title, publish_time, content, image = 'https://picsum.photos/790/450' } = newDetailData?.data?.campaign || {};

  return (
    <Layout>
      <div className="new">
        <Breadcrumb className="new__breadcrumb">
          <Breadcrumb.Item>
            <Link to={PATH.DEFAULT}>トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATH.NEW.LIST}>NEWS</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={PATH.NEW.DETAIL(id)}>{title}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="new__detail">
          <div className="new__detail__content">
            <div className="detail__header">
              <Button className="detail__header__back">Back to new list</Button>
              <div className="detail__header__time">{moment(+publish_time).format('YYYY.MM.DD')}</div>
              <h1 className="detail__header__title">{title}</h1>
            </div>
            <div className="detail__content">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <img src={image} alt="Img" />
              <SocialShare url={currentUrl} />
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
