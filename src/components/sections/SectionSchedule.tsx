import clsx from 'clsx'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export type I18nString = Record<string, string>

interface ScheduleEvent {
  start: Date
  end: Date
  title: I18nString
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
    title: {
      en: 'Opening',
      ja: '始めのご挨拶',
    },
  },
  {
    start: toDate('13:10'),
    end: toDate('13:30'),
    title: {
      en: 'Mochi Making & Tasting 1',
      ja: '餅つき（１）',
    },
  },
  {
    start: toDate('13:30'),
    end: toDate('13:50'),
    title: {
      en: 'Band Performance 1',
      ja: 'バンド演奏',
    },
  },
  {
    start: toDate('14:00'),
    end: toDate('15:00'),
    title: {
      en: 'Kyo Daiko (Japanese drums) Performance',
      ja: '協太鼓の演奏',
    },
  },
  {
    start: toDate('15:00'),
    end: toDate('15:30'),
    title: {
      en: 'Bon-odori (Summer dance)',
      ja: '盆踊り（炭坑節、上野町）',
    },
  },
  {
    start: toDate('15:30'),
    end: toDate('16:00'),
    title: {
      en: 'Band Performance 2',
      ja: 'バンド演奏',
    },
  },
  {
    start: toDate('16:00'),
    end: toDate('16:20'),
    title: {
      en: 'Raffle & Mochi Making & Tasting 2',
      ja: '福引と餅つき（２）',
    },
  },
  {
    start: toDate('16:20'),
    end: toDate('17:00'),
    title: {
      en: 'Band Performance 3',
      ja: 'バンド演奏',
    },
  },
  {
    start: toDate('17:00'),
    end: toDate('17:10'),
    title: {
      en: 'Closing',
      ja: '終わりのご挨拶',
    },
  },
]

function ScheduleBlock({ event }: { event: ScheduleEvent }) {
  const { i18n } = useTranslation()
  const duration = (event.end.getTime() - event.start.getTime()) / 1000 / 60
  return (
    <div
      className={clsx(
        'flex border border-solid border-gray-50/20 h-full px-1.5 py-1 rounded-md shadow bg-primary/20',
        duration <= 10
          ? 'flex-row items-center gap-2'
          : 'flex-col items-start justify-start',
      )}
    >
      <div className="text-sm font-semibold">{event.title[i18n.language]}</div>
      <div className="text-xs">
        {dayjs(event.start).format('HH:mm')} —{' '}
        {dayjs(event.end).format('HH:mm')}
      </div>
    </div>
  )
}

function ScheduleRender({ events }: { events: ScheduleEvent[] }) {
  const firstEventAtHour = events[0].start.getHours()
  const lastEventAtHour = events[events.length - 1].end.getHours() + 1
  // we assume that the event is in the same day

  const blockHeight = 24 * 6.5

  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col items-center justify-start">
        {Array.from({ length: lastEventAtHour - firstEventAtHour }).map(
          (_, i) => (
            <div
              key={i}
              className="flex items-start justify-start text-xs opacity-50 border-t border-solid border-gray-100/20 w-full pt-2"
              style={{
                height: `${blockHeight}px`,
              }}
            >
              {firstEventAtHour + i}:00
            </div>
          ),
        )}
      </div>
      {events.map((event, i) => {
        const topOffsetMinutes =
          event.start.getHours() * 60 +
          event.start.getMinutes() -
          firstEventAtHour * 60
        const topOffsetPixels = (topOffsetMinutes / 60) * blockHeight

        const heightOffsetHours =
          (event.end.getTime() - event.start.getTime()) / 1000 / 60 / 60
        const heightOffsetPixels = heightOffsetHours * blockHeight

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
