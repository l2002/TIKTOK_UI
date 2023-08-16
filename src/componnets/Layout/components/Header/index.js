import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faSignIn,
  faSpinner,
  faMagnifyingGlass,
  faUser,
  faBookmark,
  faCoins,
  faChartLine,
  faVideoCamera,
  faHome,
  faGear,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';

import Button from '~/componnets/Button';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Header.module.scss';
import images from '~/assets/immages';
import { useState, useEffect } from 'react';
import AccountItem from '~/componnets/AccountItem';
import Menu from '~/componnets/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên bàn phím',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 1000);
  }, []);

  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Xem hồ sơ',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: 'Yêu thích',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Nhận xu',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} />,
      title: 'Xem phân tích',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faVideoCamera} />,
      title: 'Live Studio',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faHome} />,
      title: 'Trung tâm live',
      to: '/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: '/feedback',
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: 'Đăng xuất',
      to: '/feedback',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('seacrh-tittle')}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEM}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b83816a9b49ad65051654173b1b832b5.jpeg?x-expires=1692338400&x-signature=MrX7ALxbHR4X%2Fm8MeOuZcJ1jH8E%3D"
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
