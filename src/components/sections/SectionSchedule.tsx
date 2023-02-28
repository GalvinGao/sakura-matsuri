import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

interface ScheduleEvent {
  start: Date
  end: Date
  title: string
  description: string
  location: string
}

const sakuraDate = '2023-03-25'
const toDate = (time: string) => dayjs(`${sakuraDate} ${time}`).toDate()

const schedules: ScheduleEvent[] = [
  {
    start: toDate('13:00'),
    end: toDate('14:00'),
    title: 'Opening Ceremony',
    description: 'Opening Ceremony',
    location: 'Main Stage',
  },
  {
    start: toDate('14:00'),
    end: toDate('14:30'),
    title: 'Event 2',
    description: 'Opening Ceremony',
    location: 'Main Stage',
  },
  {
    start: toDate('14:30'),
    end: toDate('15:15'),
    title: 'Event 3',
    description: 'Opening Ceremony',
    location: 'Main Stage',
  },
  {
    start: toDate('15:15'),
    end: toDate('16:00'),
    title: 'Event 4',
    description: 'Opening Ceremony',
    location: 'Main Stage',
  },
]

function ScheduleBlock({ event }: { event: ScheduleEvent }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-bold">{event.title}</div>
          <div className="text-sm">{event.description}</div>
        </div>
      </div>
    </div>
  )
}

function ScheduleRender({ events }: { events: ScheduleEvent[] }) {
  const firstEventAtHour = events[0].start.getHours()
  const lastEventAtHour = events[events.length - 1].end.getHours()
  // we assume that the event is in the same day

  return (
    <div className="relative w-full h-full">
      <div className="grid grid-cols-2 gap-1">
        <div className="flex flex-col items-center justify-center columns-1">
          {Array.from({ length: lastEventAtHour - firstEventAtHour + 1 }).map(
            (_, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-12"
                style={{ gridRow: i + 1 }}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="text-xs opacity-50">
                    {firstEventAtHour + i}:00
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
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
