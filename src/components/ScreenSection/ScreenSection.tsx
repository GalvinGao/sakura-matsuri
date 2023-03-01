import clsx from 'clsx'
export function ScreenSection({
  children,
  id,
  className,
  contentClassName,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
  contentClassName?: string
}) {
  return (
    <section
      id={'section-' + (id ?? Math.random().toString(36).substr(2, 9))}
      className={clsx(
        'min-h-full w-full snap-start px-6 pt-[2rem] pb-[4rem]',
        className,
      )}
      {...props}
    >
      <div className={clsx('min-h-full h-auto w-full', contentClassName)}>
        {children}
      </div>
    </section>
  )
}
