import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            슬기로운 탄단지입니다
            <br />
            대학생과 지역 소상공인을 위한 건강한 자판기
          </h2>
          <p>
            안녕하세요, 저희는 대학생들의 영양가 있는 한 끼 식사를 위해 모인 ‘슬기로운 탄단지’ 팀입니다.
            <br />
            여러분 어제 아침을 드셨나요?
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            흑석 시장과 
            <br />
            함께합니다
          </h2>
          <p>
            저희 사업의 목표는 바로 대학생들에게는 건강한 한 끼 식사를 제공하고, 더불어 소상공인들에게는 새로운 시장을 개척해주는 것입니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            바쁜 대학생들이 
            <br />
            건강한 한 끼를 먹을 수 있게 해줍니다
          </h2>
          <p>
            대학생들이 식사를 거르는 가장 큰 이유가 바로 ‘시간이 없어서’, 그 다음이 ‘귀찮아서’라고 합니다.
             그래서 학생들은 간단하게 먹기 위해 빵이나 라면 등으로 대충 끼니를 때우곤 합니다. 저희 ‘슬기로운 탄단지’는 간단하게 샌드위치 하나를 먹더라도 건강하고 개인에게 필요한 영양을 가진 것을 제공할 수 있습니다. 또한 학생들의 시간을 절약하기 위해 교내에 자판기를 설치하여 접근성을 높였습니다.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            대학생들이 건강한 식습관을 
            <br />
            갖도록 해줍니다
          </h2>
          <p>
            개인의 식습관 및 영양상태 분석 서비스를 통해 학생들에게 건강한 식습관을 코칭해줍니다. 
            또한 SNS에서 유행하는 clean eating 캠페인과 같이 대학생들 사이에서 건강한 식습관을 
            하나의 문화로 자리매김할 수 있도록 다양한 캠페인을 진행하고자 합니다.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>함께 슬기로운 탄단지를 만들어가요!</h2>
          <p>
            여러가지 활동들을 통해
            <br />
             슬기럽게 먹는 습관을 길러 봅시다. 
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>SNS</h3>
            <p>
              #CleanEating 캠페인
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Online</h3>
            <p>
              편하게 인터넷으로 먹고 싶은 음식을 신청하세요 :)
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Need More?</h3>
            <p>
              불편하신 기능들이 있나요? 문의하세요. 바로 프로그래밍 해드리겠습니다!
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Listen</h3>
            <p>
              슬기로운 탄단지의 추천 메뉴와 팁들을 구독해보세요. 
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Like</h3>
            <p>
              리뷰 시스템을 적극 활용해보세요. 
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Where to Eat</h3>
            <p>
              먹을 곳이 마땅히 없나요? 제공해드리겠습니다!
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>균형이 잡힌 음식 패턴</h2>
          <p>
            FastFood가 질리시나요? 지금 즉시 신청해보세요!
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              신청하기
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              더 알아보기
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
