import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsLine } from 'react-icons/bs';
import { RiShareForwardFill } from 'react-icons/ri';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Breadcrumb from '../components/Breadcrumb';
import ScheduleItem from '../components/Schedule/ScheduleItem';

export default function ScheduleDetail() {
  return (
    <Layout>
      <div className="schedule">
        <Breadcrumb className="schedule__breadcrumb">
          <Breadcrumb.Item>
            <Link to="/">トップ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/schedules">スケジュール</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/schedules/detail">FCイベント開催のお知らせ</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="schedule__detail">
          <div className="schedule__detail__content">
            <div className="detail__header">
              <div className="detail__header__left">
                <span className="detail__header__left--text">2021 11月</span>
                <span className="detail__header__left--date">9/4</span>
                <span className="detail__header__left--info">水</span>
              </div>
              <div className="detail__header__right">
                <div className="detail__header__right--info">
                  <span>EVENT</span>
                  <span>22:00~</span>
                </div>
                <h2 className="detail__header__right--title">FCイベント開催のお知らせ</h2>
              </div>
            </div>
            <div className="detail__content">
              <img src="https://picsum.photos/790/450" alt="Img" />
              <p>
                NEOLAND AUDITION LIVE!! ON DEMANDでは、NEOLAND
                AUDITION劇場で行われている公演を、当日の公演中にライブ配信及び当日24時にアーカイブ配信としてお届けします。
              </p>
              <p>2021年11月7日（日）18:00～ 岡部チームA「目撃者」公演 向井地美音 生誕祭 をアーカイブ配信！</p>
              <p>各公演は配信開始日より、 </p>
              <p>30日間の期間限定配信となりますので、お見逃しなく！ </p>
              <p>
                ■公演の詳細はこちら
                <br />
                https://www.muddler.com/lod/neoland/-/detail/=/cid=neolanda21110702/
              </p>
              <p>
                ■「NEOLAND AUDITION LIVE!! ON DEMAND
                <br />
                https://www.muddler/lod/neoland/
              </p>
              <Button className="detail__content__btn">購入はこちら</Button>
            </div>
            <div className="detail__footer">
              <div className="detail__footer__share">
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaFacebook />
                </span>
                <span>
                  <BsLine />
                </span>
                <span>
                  <RiShareForwardFill />
                </span>
              </div>
            </div>
          </div>

          <div className="schedule__detail__related">
            <Button className="detail__related__btn">Schedule一覧</Button>
            <h3 className="detail__related__title">最新スケジュール</h3>
            <div className="detail__related__list">
              <ScheduleItem />
              <ScheduleItem showDate={false} />
              <ScheduleItem />
              <ScheduleItem />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
