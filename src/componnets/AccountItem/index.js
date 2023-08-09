import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f3f86d0d3ca68b3e92cd362b074e6e29.jpeg?x-expires=1691564400&x-signature=%2Fs0FoOgqnaQL8xV3JaMX%2FL0bfpw%3D"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Minh Luan</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>m.luan_0202</span>
      </div>
    </div>
  );
}

export default AccountItem;
