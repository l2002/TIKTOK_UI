import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b83816a9b49ad65051654173b1b832b5.jpeg?x-expires=1691823600&x-signature=VHZCRimsKlITQrgXY%2BU0Nr7eZ%2BQ%3D"
        alt='avt'
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
