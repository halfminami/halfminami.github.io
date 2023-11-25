import { useRef } from 'preact/hooks';
import './coolButton.scss';
import { JSXProps } from './type';

interface CoolButtonProps extends JSXProps {}

function CoolButton({ children, style, props, className }: CoolButtonProps) {
  const ripple = useRef<HTMLDivElement>(null);
  let timeoutid: number | '' = '';

  return (
    <button
      {...{ style }}
      className={['coolbutton', className].join(' ')}
      {...props}
      onClick={(e) => {
        if (props && props.onClick) {
          // @ts-ignore
          props.onClick();
        }

        // sync with css!
        const r = '10px';
        const dur = 0.8;

        // place circle center
        ripple.current!.style.left = `calc(${e.offsetX}px - ${r} / 2)`;
        ripple.current!.style.top = `calc(${e.offsetY}px - ${r} / 2)`;

        ripple.current!.classList.add('active');

        const rm = (): number =>
          window.setTimeout(() => {
            ripple.current!.classList.remove('active');
            timeoutid = '';
          }, dur * 1000);

        if (timeoutid !== '') {
          // toggle animation
          ripple.current!.classList.remove('active');
          clearTimeout(timeoutid);

          setTimeout(() => {
            ripple.current!.classList.add('active');

            timeoutid = rm();
          }, 10);
        } else {
          timeoutid = rm();
        }
      }}
    >
      {children}
      <div ref={ripple} className={'ripple'}></div>
    </button>
  );
}

export { CoolButton };
