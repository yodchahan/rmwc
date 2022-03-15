import * as RMWC from '@rmwc/types';
import React from 'react';
import { MDCSliderFoundation } from '@material/slider';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
import { useSliderFoundation } from './foundation';

export type SliderOnChangeEventT = RMWC.CustomEventT<{
  value: number;
}>;

export type SliderOnInputEventT = RMWC.CustomEventT<{
  value: number;
}>;

/** A Slider component. */
export interface SliderProps {
  /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
  onChange?: (evt: SliderOnChangeEventT) => void;
  /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
  onInput?: (evt: SliderOnInputEventT) => void;
  /** The value of the Slider. */
  value?: number | string;
  /** The minimum value of the Slider. */
  min?: number | string;
  /** The maximum value of the Slider. */
  max?: number | string;
  /** A step to quantize values by. */
  step?: number | string;
  /** Displays the exact value of the Slider on the knob. */
  discrete?: boolean;
  /** Displays the individual step markers on the Slider track. */
  displayMarkers?: boolean;
  /** Disables the control. */
  disabled?: boolean;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: React.Ref<MDCSliderFoundation>;
}

export type SliderHTMLProps = RMWC.HTMLProps<
  HTMLDivElement,
  Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput'>
>;

const SliderTrack = React.memo(
  React.forwardRef(function SliderTrack(props: any, ref: React.Ref<any>) {
    return (
      <div ref={ref} className="mdc-slider__track">
        <div className="mdc-slider__track--inactive"></div>
        <div className="mdc-slider__track--active">
          <div className="mdc-slider__track--active_fill"></div>
        </div>
      </div>
    );
  })
);

const SliderTrackMarkerContainer = React.memo(
  React.forwardRef(function SliderTrackMarkerContainer(
    props: any,
    ref: React.Ref<any>
  ) {
    return <div ref={ref} className="mdc-slider__track-marker-container"></div>;
  })
);

const SliderThumb = React.memo(function SliderThumb() {
  return <div className="mdc-slider__thumb-knob"></div>;
});

export const Slider: RMWC.ComponentType<SliderProps, SliderHTMLProps, 'input'> =
  createComponent<SliderProps, SliderHTMLProps>(function Slider(props, ref) {
    const {
      rootEl,
      setThumbsRef,
      setTracActivekRef,
      setTrackMarkerContainerRef
    } = useSliderFoundation(props);

    const {
      value,
      min,
      max,
      discrete,
      displayMarkers,
      step,
      disabled,
      onChange,
      onInput,
      children,
      foundationRef,
      ...rest
    } = props;

    const className = useClassNames(props, [
      'mdc-slider',
      {
        'mdc-slider--discrete': discrete,
        'mdc-slider--display-markers': displayMarkers && discrete
      }
    ]);

    const dataStep = step ? { 'data-step': step } : {};

    if (displayMarkers && !discrete) {
      console.warn(
        `The 'displayMarkers' prop on rmwc Slider will
        only work in conjunction with the 'discrete' prop`
      );
    }

    return (
      <Tag
        // tabIndex={0}
        //eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        // role="slider"
        // aria-valuemin={min as any}
        // aria-valuemax={max as any}
        // aria-valuenow={value as any}
        // aria-label="Select Value"
        // {...(disabled ? { 'aria-disabled': disabled } : {})}
        // {...dataStep}
        // {...rest}
        tag="div"
        ref={ref}
        element={rootEl}
        className={className}
      >
        <SliderTrack ref={setTracActivekRef} />
        {/* {displayMarkers && (
          <SliderTrackMarkerContainer ref={setTrackMarkerContainerRef} />
        )} */}
        <Tag
          tabIndex={0}
          ref={setThumbsRef}
          className="mdc-slider__thumb"
          role="slider"
          aria-valuemin={min as any}
          aria-valuemax={max as any}
          aria-valuenow={value as any}
        >
          <SliderThumb />
        </Tag>
        {children}
      </Tag>
    );
  });
