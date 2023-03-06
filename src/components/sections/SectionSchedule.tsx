import clsx from 'clsx'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

interface ScheduleEvent {
  start: Date
  end: Date
  title: string
}

const sakuraDate = '2023-03-25'
const toDate = (time: string) => dayjs(`${sakuraDate} ${time}`).toDate()

// 1:00 		  Opening
// 1:10-1:30 	Mochi Making & Tasting 1
// 1:30-1:50 	Band Performance 1
// 2:00-3:00 	Kyo Daiko (Japanese drums) Performance
// 3:00-3:30 	Bon-odori (Summer dance)
// 3:30-4:00 	Band Performance 2
// 4:00-4:20 	Raffle & Mochi Making & Tasting 2
// 4:20-5:00 	Band Performance 3
// 5:00 	  	Closing

const schedules: ScheduleEvent[] = [
  {
    start: toDate('13:00'),
    end: toDate('13:10'),
    title: 'opening',
  },
  {
    start: toDate('13:10'),
    end: toDate('13:30'),
    title: 'mochi-making-1',
  },
  {
    start: toDate('13:35'),
    end: toDate('14:05'),
    title: 'band-performance-1',
  },
  {
    start: toDate('14:15'),
    end: toDate('15:15'),
    title: 'kyo-daiko',
  },
  {
    start: toDate('15:15'),
    end: toDate('15:40'),
    title: 'bon-odori',
  },
  {
    start: toDate('15:45'),
    end: toDate('16:15'),
    title: 'band-performance-2',
  },
  {
    start: toDate('16:20'),
    end: toDate('16:40'),
    title: 'raffle-mochi-making-2',
  },
  {
    start: toDate('16:45'),
    end: toDate('17:00'),
    title: 'band-performance-3',
  },
  {
    start: toDate('17:00'),
    end: toDate('17:10'),
    title: 'closing',
  },
]

function ScheduleBlock({ event }: { event: ScheduleEvent }) {
  const { t } = useTranslation()
  const duration = (event.end.getTime() - event.start.getTime()) / 1000 / 60
  const shortEvent = duration <= 15
  const titleLines = t('schedules.' + event.title).split('\n')

  return (
    <div
      className={clsx(
        'flex border border-solid border-primary/20 h-full px-2 py-1.5 rounded-md shadow bg-primary/10',
        shortEvent
          ? 'flex-row items-center gap-2'
          : 'flex-col items-start justify-start gap-[2px]',
      )}
    >
      <div className="text-xs whitespace-nowrap">
        {dayjs(event.start).format('HH:mm')} —{' '}
        {dayjs(event.end).format('HH:mm')}
      </div>
      <div className={clsx('text-sm font-semibold leading-[1.18]')}>
        {titleLines.length === 1
          ? titleLines[0]
          : titleLines.map((line, i) => (
              <div className="mb-[2px] last:mb-0" key={i}>
                {line}
              </div>
            ))}
      </div>
    </div>
  )
}

function ScheduleRender({ events }: { events: ScheduleEvent[] }) {
  const firstEventAtHour = events[0].start.getHours()
  const lastEventAtHour = events[events.length - 1].end.getHours() + 1
  // we assume that the event is in the same day

  const blockHeight = window.innerHeight / 5

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center justify-start">
        {Array.from({
          length: (lastEventAtHour - firstEventAtHour) * 2 - 1,
        }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              'flex items-start justify-start text-xs text-gray-100/50 border-t-[thin] border-solid pt-1 pl-1',
              i % 2 !== 0
                ? 'ml-[3rem] w-[calc(100%-3rem)] border-gray-100/10'
                : 'w-full border-gray-100/20',
            )}
            style={{
              height: `${blockHeight / 2}px`,
            }}
          >
            {i % 2 === 0 && `${Math.floor(firstEventAtHour + i / 2)}:00`}
          </div>
        ))}
      </div>
      {events.map((event, i) => {
        const topOffsetHours =
          (event.start.getHours() * 60 +
            event.start.getMinutes() -
            firstEventAtHour * 60) /
          60
        const topOffsetPixels = topOffsetHours * blockHeight

        const heightOffsetHours =
          (event.end.getTime() - event.start.getTime()) / 1000 / 60 / 60
        const heightOffsetPixels = heightOffsetHours * blockHeight

        console.log('event', i, event, {
          topOffsetHours,
          topOffsetPixels,
          heightOffsetHours,
          heightOffsetPixels,
        })

        return (
          <div
            key={event.start.getTime()}
            className="absolute left-[6rem] w-[calc(100%-6rem)] h-full"
            style={{
              top: topOffsetPixels + 1,
              height: heightOffsetPixels - 1 * 2,
            }}
          >
            <ScheduleBlock event={event} />
          </div>
        )
      })}
    </div>
  )
}

export function SectionSchedule() {
  const { t } = useTranslation()

  return (
    <ScreenSection id="schedule">
      <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.schedule')}</h1>
      <ScheduleRender events={schedules} />
    </ScreenSection>
  )
}
