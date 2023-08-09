import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disibled = false,
  rounded = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Component = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  // Remove envent listener when btn is disabled
  if (disibled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disibled,
    rounded,
  });

  return (
    <Component className={classes}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
