import { render } from '@testing-library/react';
import React from 'react';
import { LinearProgress } from './linear-progress';

describe('LinearProgress', () => {
  it('renders', () => {
    const { asFragment, container } = render(<LinearProgress progress={0.5} />);

    expect(container.firstChild).toHaveClass('mdc-linear-progress');
    expect(asFragment()).toMatchSnapshot();
  });

  it('can buffer', () => {
    const { asFragment } = render(<LinearProgress buffer={0.8} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('can be closed', () => {
    const { asFragment } = render(<LinearProgress closed />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('can be indeterminate', () => {
    const { container } = render(<LinearProgress />);
    expect(container.firstChild).not.toHaveClass(
      'mdc-linear-progress--determinate'
    );
  });

  it('can be reversed', () => {
    const { asFragment, container } = render(<LinearProgress reversed />);
    expect(container.firstChild).toHaveAttribute('dir', 'rtl');
    expect(asFragment()).toMatchSnapshot();
  });

  it('can have custom classnames', () => {
    const { container } = render(
      <LinearProgress className={'my-custom-classname'} />
    );
    expect(container.firstChild).toHaveClass('my-custom-classname');
  });
});
