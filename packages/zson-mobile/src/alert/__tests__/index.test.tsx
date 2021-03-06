import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../modal';
import Alert from '../Alert';

describe('Alert', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Alert animationType="door" />);
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.prop('className')).toEqual('zs-alert zs-alert--radius');
  });

  it('should render default locale cancel text for the button inside footer', () => {
    const wrapper = shallow(<Alert />);
    const button = wrapper.find(Modal).prop('footer') as React.ReactElement;
    expect(button.props).toEqual({
      type: 'button',
      className: 'zs-alert__button',
      onClick: undefined,
      children: '关闭',
    });
  });

  it('should render default locale cancel text for the button inside footer', () => {
    const onCancel = jest.fn();
    const wrapper = shallow(<Alert onCancel={onCancel} cancelText="close" />);
    const button = wrapper.find(Modal).prop('footer') as React.ReactElement;
    expect(button.props).toEqual({
      type: 'button',
      className: 'zs-alert__button',
      onClick: onCancel,
      children: 'close',
    });
  });

  it('should handle button click', () => {
    const onCancel = jest.fn();
    const wrapper = shallow(<Alert onCancel={onCancel} />);
    const button = wrapper.find(Modal).prop('footer') as React.ReactElement;
    button.props.onClick();
    expect(onCancel).toBeCalledTimes(1);
  });
});
