import { getDay, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export default function CalendarDate({ weddingDate }: { weddingDate: Date }) {
    const today = new Date();
    const calendarBase = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 1);

    const weekly = ['일', '월', '화', '수', '목', '금', '토'];
    const startOfCurrentMonth = startOfMonth(calendarBase);
    const endOfCurrentMonth = endOfMonth(calendarBase);

    const daysInMonth = eachDayOfInterval({
        start: startOfCurrentMonth,
        end: endOfCurrentMonth,
    });

    const firstDayOfMonth = getDay(startOfCurrentMonth);
    const blankDays = Array(firstDayOfMonth).fill(null);

    const getDayClassName = (date: Date) => {
        const day = getDay(date);

        const isToday =
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate();

        const isWeddingDay =
            date.getFullYear() === weddingDate.getFullYear() &&
            date.getMonth() === weddingDate.getMonth() &&
            date.getDate() === weddingDate.getDate();

        let className = 'text-gray-800';

        if (day === 0) {
            className += ' text-red-300'; // 일요일 빨간색
        }

        if (isToday) {
            className =
                'rounded-[50%] text-white bg-red-400 hover:bg-red-300 after:content-["♥︎"] after:pl-[1px] after:text-[8px]';
        } else if (isWeddingDay) {
            className =
                'rounded-[50%] text-white bg-pink-500 hover:bg-pink-400 after:content-["💍"] after:pl-[1px] after:text-[10px]';
        }

        return className;
    };

    return (
        <div className='select-none max-w-md mx-auto p-6 mt-8 rounded-3xl opacity-90'>
            <div className='font-kotra text-xl grid grid-cols-7 gap-1 mb-2'>
                {weekly.map((day) => (
                    <div key={day} className='text-center text-gray-600'>
                        {day}
                    </div>
                ))}
            </div>
            <div className='font-kotra grid grid-cols-7 gap-1'>
                {blankDays.map((_, index) => (
                    <div key={`blank-${index}`} className="p-4 text-center text-gray-300"></div>
                ))}
                {daysInMonth.map((day) => (
                    <div
                        key={day.toISOString()}
                        className={`p-4 text-[15px] text-center rounded ${getDayClassName(day)}`}
                    >
                        {day.getDate()}
                    </div>
                ))}
            </div>
        </div>
    );
}
